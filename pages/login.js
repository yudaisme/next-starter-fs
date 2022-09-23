import Head from 'next/head';
import Image from 'next/image';
import FrontendLayout from '../layouts/FrontendLayout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { postData } from '../lib/request'

const Login = () => {
    const [data, setData] = useState({
        email: null,
        password: null
    });

    const router = useRouter()

    const submit = (e) => {
        e.preventDefault()
        if (data.email && data.password)  {
            postData('/api/login', data).then(response => {
                if (response.status === "success") router.push('/admin/dashboard')
            });
        }
    }
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-full h-screen flex items-center justify-center bg-indigo-100">
                <form className="w-full md:w-1/3 rounded-lg" onSubmit={submit}>
                    <div className="flex font-bold justify-center mt-6">
                        <Image className="h-20 w-20 mb-3" width={64} height={64} alt="image" src="https://dummyimage.com/64x64" />
                    </div>
                    <h2 className="text-2xl text-center text-gray-200 mb-8">Login</h2>
                    <div className="px-12 pb-10">
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="
                                    w-full
                                    border
                                    rounded
                                    px-3
                                    py-2
                                    text-gray-700
                                    focus:outline-none
                                    "
                                    onChange={(e) => setData({...data, email: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="
                                    w-full
                                    border
                                    rounded
                                    px-3
                                    py-2
                                    text-gray-700
                                    focus:outline-none
                                    "
                                    onChange={(e) => setData({...data, password: e.target.value})}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="
                            w-full
                            py-2
                            mt-8
                            rounded-full
                            bg-blue-400
                            text-gray-100
                            focus:outline-none
                            "
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>        
        </>
    );
}

Login.getLayout = function getLayout(page) {
    return (
      <FrontendLayout>
        {page}
      </FrontendLayout>
    )
}
export default Login;