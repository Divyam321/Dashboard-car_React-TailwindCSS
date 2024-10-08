import React, { Fragment } from 'react';
import {
    Bars3CenterLeftIcon,
    PencilIcon,
    ChevronDownIcon,
    CreditCardIcon,
    Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Link } from 'react-router-dom';
import UserImage from '../assets/avatar.png';

const TopBar = ({ showNav, setShowNav }) => {
    return (
        <div className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] bg-black ${showNav ? "pl-56" : ""}`}>
            <div className="pl-4 md:pl-16">
                <Bars3CenterLeftIcon
                    className="h-8 w-8 text-gray-300 cursor-pointer"
                    onClick={() => setShowNav(!showNav)}
                />
            </div>
            <div className='flex items-center pr-4 md:pr-16'>
                <Popover className='relative'>
                    <Popover.Button className='outline-none mr-5 md:mr-8 cursor-pointer text-gray-300'>
                        <BellIcon className='h-6 w-6' />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform scale-95"
                        enterTo="transform scale-100"
                        leave="transition ease-in duration=75"
                        leaveFrom="transform scale-100"
                        leaveTo="transform scale-95"
                    >
                        <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-gray-800 shadow-lg rounded max-w-xs sm:max-w-sm w-screen">
                            <div className="relative p-3">
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-white font-medium">Notifications</p>
                                    <Link to="#" className='text-sm text-green-400'>Mark all as read</Link>
                                </div>
                                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-400 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-white" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-white">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-400 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-400 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-white" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-white">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-400 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-400 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-white" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-white">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-400 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-400 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-white" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-white">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-400 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className='inline-flex w-full justify-center items-center'>
                            <img src={UserImage} className='rounded-full h-8 md:mr-4 border-2 border-gray-600 shadow-sm' alt="profile_picture" />
                            <span className='hidden md:block font-medium text-gray-300'>Divyam</span>
                            <ChevronDownIcon className='ml-2 h-4 w-4 text-gray-300' />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform scale-95"
                        enterTo="transform scale-100"
                        leave="transition ease-in duration=75"
                        leaveFrom="transform scale-100"
                        leaveTo="transform scale-95"
                    >
                        <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-gray-800 rounded shadow-lg">
                            <div className="p-1">
                                <Menu.Item>
                                    <Link to="#" className="flex hover:bg-green-500 hover:text-white text-gray-300 rounded p-2 text-sm group transition-colors items-center">
                                        <PencilIcon className="h-4 w-4 mr-2" />
                                        Edit
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="#" className="flex hover:bg-green-500 hover:text-white text-gray-300 rounded p-2 text-sm group transition-colors items-center">
                                        <CreditCardIcon className="h-4 w-4 mr-2" />
                                        Billing
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="#" className="flex hover:bg-green-500 hover:text-white text-gray-300 rounded p-2 text-sm group transition-colors items-center">
                                        <Cog8ToothIcon className="h-4 w-4 mr-2" />
                                        Settings
                                    </Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
};

export default TopBar;
