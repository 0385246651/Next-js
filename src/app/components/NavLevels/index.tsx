
import LayoutService from '@/app/services/layout'
import type { InferGetServerSidePropsType, GetServerSideProps, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'

export const getStaticPaths = (async () => {
    return {
        paths: [
            {
                params: {
                    name: 'next.js',
                },
            }, // See the "paths" section below
        ],
        fallback: true, // false or "blocking"
    }
}) satisfies GetStaticPaths

export async function getStaticProps() {
    try {
        const urlParamsObject = '*';
        const res = await LayoutService.getNavLevels({ populate: urlParamsObject });
        // const data = await res?.json();
        console.log("res", res);
        return {
            props: {
                res: res,
            },
        };
    } catch (err) {
        console.error(err);
        return {
            props: {
                res: null,
            },
        };
    }
}

export default function Page({
    repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <div>{repo?.stargazers_count}</div>;
}