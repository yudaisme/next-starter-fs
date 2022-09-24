import NextNProgress from "nextjs-progressbar"
import Sidebar from './backend/Sidebar';
import Header from './backend/Header';
import Footer from './backend/Footer';
import Image from 'next/image';
import Head from 'next/head';
import { createPopper } from '@popperjs/core';
import { useEffect } from 'react';

const BackendLayout = ({children}) => {
    useEffect(() => {
        document.body.classList.add('text-blueGray-700', 'antialiased')
    })
    function openDropdown(event, dropdownID) {
        let element = event.target;
        while (element.nodeName !== "A") {
          element = element.parentNode;
        }
        createPopper(element, document.getElementById(dropdownID), {
          placement: "bottom-start"
        });
        document.getElementById(dropdownID).classList.toggle("hidden");
        document.getElementById(dropdownID).classList.toggle("block");
    }

    function toggleNavbar(collapseID) {
        document.getElementById(collapseID).classList.toggle("hidden");
        document.getElementById(collapseID).classList.toggle("bg-white");
        document.getElementById(collapseID).classList.toggle("m-2");
        document.getElementById(collapseID).classList.toggle("py-3");
        document.getElementById(collapseID).classList.toggle("px-6");
    }
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <NextNProgress />
            <div id="root">
                <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                    <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                        <button className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button" onClick="toggleNavbar('example-collapse-sidebar')" >
                            <i className="fas fa-bars"></i>
                        </button>
                        <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" href="#">
                            Notus Tailwind JS
                        </a>
                        <ul className="md:hidden items-center flex flex-wrap list-none">
                            <li className="inline-block relative">
                                <a className="text-blueGray-500 block py-1 px-3" href="#pablo" onClick={(event) => openDropdown(event,'notification-dropdown')}
                                    ><i className="fas fa-bell"></i>
                                </a>
                                <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="notification-dropdown">
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a>
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                    >Another action</a>
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                    >Something else here</a>
                                    <div className="h-0 my-2 border border-solid border-blueGray-100"></div>
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a
                                    >
                                </div>
                            </li>
                            <li className="inline-block relative">
                                <a className="text-blueGray-500 block" href="#pablo" onClick={(event) => openDropdown(event,'user-responsive-dropdown')}>
                                    <div className="items-center flex">
                                        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                                            <Image alt="..." className="w-full rounded-full align-middle border-none shadow-lg" width={800} height={800} src="https://dummyimage.com/64x64" />
                                        </span>
                                    </div>
                                </a>
                                <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="user-responsive-dropdown" >
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                    >Action</a>
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a>
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                    >Something else here</a>
                                    <div className="h-0 my-2 border border-solid border-blueGray-100"></div>
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                    >Seprated link</a>
                                </div>
                            </li>
                        </ul>
                        <Sidebar />
                    </div>
                </nav>
                <div className="relative md:ml-64 bg-blueGray-50">
                    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4" >
                        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4" >
                            <a className="text-white text-sm uppercase hidden lg:inline-block font-semibold" href="./index.html" >Dashboard</a>
                            <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                                <div className="relative flex w-full flex-wrap items-stretch">
                                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <input type="text" placeholder="Search here..." className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
                                </div>
                            </form>
                            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                                <a className="text-blueGray-500 block" href="#pablo" onClick={(event) => openDropdown(event,'user-dropdown')}>
                                    <div className="items-center flex">
                                        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                                            <Image alt="..." className="w-full rounded-full align-middle border-none shadow-lg" src="https://dummyimage.com/64x64" width={800} height={800}/>
                                        </span>
                                    </div>
                                </a>
                                <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"id="user-dropdown">
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a>
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a>
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
                                    <div className="h-0 my-2 border border-solid border-blueGray-100"></div>
                                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
                                </div>
                            </ul>
                        </div>
                    </nav>
                    {/* <!-- Header --> */}
                    <Header />
                    <div className="px-4 md:px-10 mx-auto w-full -m-24">
                        {children}
                        <Footer />
                    </div>
                </div>
            </div>        
        </>
    );
}
 
export default BackendLayout;