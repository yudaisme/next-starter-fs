import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client'
import { withIronSessionSsr } from "iron-session/next";
import BackendLayout from '../../../layouts/BackendLayout';
import { sessionCookie } from "../../../lib/session"
import { postData } from '../../../lib/request'

const About = (props) => {
    const [data, setData] = useState({
        id: props.about ? props.about.id : null,
        title: props.about ? props.about.title : null,
        content: props.about ? props.about.content : null,
    })
    const router = useRouter();

    useEffect(() => {
        if (!props.isAuth) {
            router.push('/')
        }
        document.getElementById('menu-about').classList.add('text-pink-500','hover:text-pink-600')
        document.getElementById('menu-dashboard').classList.remove('text-pink-500','hover:text-pink-600')
        document.getElementById('menu-blog').classList.remove('text-pink-500','hover:text-pink-600')
    })

    const submit = (e) => {
        e.preventDefault()
        if (data.id && data.title && data.content) {
          postData('/api/about/update', data).then(response => {
            if (response.status === "success") {
                alert('Updated')
                setTimeout(() => {
                    window.location.reload()
                }, 500)
            }
          });
        }
    }
    return (
        <div>
            <Head>
                <title>Admin | About</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
             
            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">
                                    About Page
                                </h6>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    About Page
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="title">
                                                Title
                                            </label>
                                            <input type="text" id="title" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.title} onChange={(e) => setData({...data, title: e.target.value})} />
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Content
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="content">
                                            Content
                                        </label>
                                        <textarea type="text" id="content" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" value={data.content} onChange={(e) => setData({...data, content: e.target.value})} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit" onClick={submit}>
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
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
    const prisma = new PrismaClient()
    const about = await prisma.about.findUnique({  
        where: {
            id: 1
        }
    })
    about.createdAt = null
    about.updatedAt = null
    return {
        props: {
            isAuth: (user && user.id != null) ? true : false,
            about
        }
    }
  
}, sessionCookie)

export default About;