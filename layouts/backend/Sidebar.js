import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter();
    const logout = async () => {
        try {
            const response = await fetch('/api/logout', {
                method: 'GET',
                credentials: 'same-origin',
            });

            if (response.status === 200) router.push('/')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden" id="example-collapse-sidebar">
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200" >
                <div className="flex flex-wrap">
                    <div className="w-6/12">
                        <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" href="../../index.html">
                            Notus Tailwind JS
                        </a>
                    </div>
                    <div className="w-6/12 flex justify-end">
                        <button type="button" className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" onClick="toggleNavbar('example-collapse-sidebar')">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
            <form className="mt-6 mb-4 md:hidden">
                <div className="mb-3 pt-0">
                    <input type="text" placeholder="Search" className="border-0 px-3 py-2 h-12 border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"/>
                </div>
            </form>
            {/* <!-- Divider --> */}
            <hr className="my-4 md:min-w-full" />
            {/* <!-- Heading --> */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Admin Layout Pages
            </h6>
            {/* <!-- Navigation --> */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                    <Link href="/admin/dashboard">
                        <a className="text-xs uppercase py-3 font-bold block" id="menu-dashboard">
                            <i className="fas fa-tv mr-2 text-sm opacity-75"></i>
                            Dashboard
                        </a>
                    </Link>
                </li>
                <li className="items-center">
                    <Link href="/admin/about">
                        <a className="text-xs uppercase py-3 font-bold block" id="menu-about">
                            <i className="fas fa-info mr-6 text-sm text-blueGray-300"></i>
                            About
                        </a>
                    </Link>
                </li>
                <li className="items-center">
                    <Link href="/admin/blog">
                        <a className="text-xs uppercase py-3 font-bold block" id="menu-blog">
                            <i className="fas fa-book mr-2 text-sm text-blueGray-300"></i>
                            Blog
                        </a>
                    </Link>
                </li>
                <li className="items-center">
                    <a href="./maps.html" className="text-xs uppercase py-3 font-bold block">
                        <i className="fas fa-map-marked mr-2 text-sm text-blueGray-300"
                        ></i>
                        Maps
                    </a>
                </li>
            </ul>

            {/* <!-- Divider --> */}
            <hr className="my-4 md:min-w-full" />
            {/* <!-- Heading --> */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Auth Layout Pages
            </h6>
            {/* <!-- Navigation --> */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li className="items-center">
                    <a href="../auth/login.html" className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block">
                        <i className="fas fa-fingerprint text-blueGray-300 mr-2 text-sm"></i>
                        Login
                    </a>
                </li>
                <li className="items-center">
                    <a href="../auth/register.html" className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block">
                        <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>
                        Register
                    </a>
                </li>
                <li className="items-center">
                    <a href="javascript:;" className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block" onClick={logout}>
                        <i className="fas fa-power-off text-blueGray-300 mr-2 text-sm"></i>
                        Logout
                    </a>
                </li>
            </ul>

            {/* <!-- Divider --> */}
            <hr className="my-4 md:min-w-full" />
            {/* <!-- Heading --> */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                No Layout Pages
            </h6>
            {/* <!-- Navigation --> */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li className="items-center">
                    <a href="../landing.html" className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block">
                        <i className="fas fa-newspaper text-blueGray-300 mr-2 text-sm"></i>
                        Landing Page
                    </a>
                </li>

                <li className="items-center">
                    <a href="../profile.html" className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block">
                        <i className="fas fa-user-circle text-blueGray-300 mr-2 text-sm"></i>
                        Profile Page
                    </a>
                </li>
            </ul>
        </div>
    );
}
 
export default Sidebar;