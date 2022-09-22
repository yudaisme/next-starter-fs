import Head from 'next/head';
import Image from 'next/image';
import BackendLayout from '../../../layouts/BackendLayout';
import { sessionCookie } from "../../../lib/session"
import { withIronSessionSsr } from "iron-session/next";;
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const About = (props) => {
    const router = useRouter();

    useEffect(() => {
        if (!props.isAuth) {
            router.push('/')
        }
    })
    return (
        <div>
            <Head>
                <title>Admin | About</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
             
            <div className="p-4 md">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="p-6">
                    <form className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Title
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe" />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Content
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" rows={10}></textarea>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>             
        </div>
    );
}

About.getLayout = function getLayout(page) {
    return (
      <BackendLayout>
        {page}
      </BackendLayout>
    )
}

export const getServerSideProps = withIronSessionSsr( async ({req}) => {
    const user = req.session.user
    return {
        props: {
            isAuth: (user && user.id != null) ? true : false
        }
    }
  
}, sessionCookie)

export default About;