import { fetcher } from '@/lib/api'
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react'
import { fetchAPI } from '../utils/fetch-api';
import { PostsService } from '../services/post';
import Post from '../components/Post';
import PostList from '../components/PostList';
import { LayoutService } from '../services/layout';

interface AboutProps {
    posts: any;
}
const About: React.FC = async ({ navLevels }: any) => {
    // const data = await getPost();
    // console.log(data, 'sđâsd');
    // if (data) return
    console.log("sađấ", navLevels);

    return (
        <div>
            Bài viết mới !
            {/* <PostList data={data?.data} /> */}
        </div >
    )
}

export default About;

export const getServerSideProps = (async () => {
    const urlParamsObject = '*'
    // [
    //     "navBar.links",
    //     "navBar.navbarLogo.logoImg",
    //     "navBar.button",
    //     "metadata.shareImage",
    //     "favicon",
    //     "footer.footerLogo.logoImg",
    //     "footer.menuLinks",
    //     "footer.legalLinks",
    //     "footer.socialLinks",
    //     "footer.categories",
    // ]
    try {
        let res = await LayoutService.getNavLevels({ populate: urlParamsObject })
        // const repo: Repo = await res?.json()
        console.log("res.data", res);
        return {
            navLevels: res
        }
    } catch (err) {
        console.error(err);
    }

    // Fetch data from external API
    // const res = await fetch('https://api.github.com/repos/vercel/next.js')
    // const repo: Repo = await res.json()
    // // Pass data to the page via props
    // return { props: { repo } }
})


