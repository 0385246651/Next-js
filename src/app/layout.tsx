import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConsoleLog from "./components/ConsoleLog";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { PageRenderer } from "./utils/page/page-renderer";
import { NavigationMenuDemo } from "./components/Link/Nav";
import { Roboto } from "next/font/google";
import NavLevels from "./components/NavLevels";
import LayoutService from "./services/layout";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ // font moi Roboto
  subsets: ["vietnamese"], weight: [
    '100',
    "300",
    '400',
    '500',
    '700',
    '900',
  ]
});

const FALLBACK_SEO = {
  title: "Gobox Fulfillment Service",
  description: "Gobox Fulfillment Service",
}

const getGlobal = async () => {
  const urlParamsObject = [
    "navBar.links",
    "navBar.navbarLogo.logoImg",
    "navBar.button",
    "metadata.shareImage",
    "favicon",
    "footer.footerLogo.logoImg",
    "footer.menuLinks",
    "footer.legalLinks",
    "footer.socialLinks",
    "footer.categories",
  ]
  try {
    let res = await LayoutService.getGlobal({ populate: urlParamsObject })
    return res.data
  } catch (err) {
    console.error(err);
  }
}


export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal();

  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ------navBar------------
  const gblobal = await getGlobal();
  // console.log("gblobal", gblobal);

  if (!gblobal.data) return null;

  const navBar = gblobal.data.attributes?.navBar
  const footer = gblobal?.data?.attributes?.footer[0]
  // const {
  //   navBar,
  //   footer,
  // } = nav?.data?.attributes;

  const navbarLogoUrl = getStrapiMedia(
    navBar?.navbarLogo?.logoImg?.data.attributes.url
  );
  // ------end navBar------------

  const footerLogoUrl = getStrapiMedia(
    footer?.footerLogo?.logoImg?.data.attributes.url
  );

  return (
    <html lang="en">


      <body
        className={roboto.className}>
        <Navbar
          links={navBar?.links}
          logoUrl={navbarLogoUrl}
          logoText={navBar?.navbarLogo?.logoText}
          buttons={navBar?.button}
          activeColor={navBar?.activeColor}
        />
        {/* <NavigationMenuDemo /> */}
        {/* <ConsoleLog props={navbar} /> */}
        {/* <NavLevels /> */}
        <main
          className="dark:bg-black dark:text-gray-100 min-h-screen"
        >
          {children}
        </main>
        <Footer
          logoUrl={footerLogoUrl}
          logoText={footer?.footerLogo?.logoText}
          menuLinks={footer?.menuLinks}
          categoryLinks={footer?.categories?.data}
          legalLinks={footer?.legalLinks}
          socialLinks={footer?.socialLinks}
        />

      </body>
    </html>
  );
}
