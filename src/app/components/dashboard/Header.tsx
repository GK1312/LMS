"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import { LogOut, Search, Settings } from "react-feather";
import Logo from "../../../../public/images/logo.png";

const HeaderComponent = React.memo(function HeaderComponent() {
  const [profile, setProfile] = useState(false);
  return (
    <div className="relative">
      <header className="px-6 py-3 flex flex-row items-center justify-between border border-[#e5e7eb]">
        <Image
          src={Logo}
          alt="lms_logo"
          title="Learning Management System"
          priority
          width={120}
          className="h-auto"
        />
        <div className="flex flex-row items-center justify-start gap-6">
          <nav className="mr-4 text-light font-bold">
            <ul className="w-max flex flex-row items-center justify-start gap-12">
              <li>MY COURSES</li>
              <li>MY RESOURCES</li>
            </ul>
          </nav>
          <div className="md:min-w-80 relative">
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className={`w-full  px-4 py-2.5 pr-8 text-label leading-tight font-normal border border-solid border-hr outline outline-2 outline-transparent outline-offset-2 rounded-3xl focus:shadow-input-focus transition-all duration-200 ease-in-out`}
            />
            <div className="text-slate-600 absolute top-2.5 right-3 cursor-pointer">
              <Search size={16} />
            </div>
          </div>
          <div>
            <Avatar
              as="button"
              name="GK"
              src="https://lh3.googleusercontent.com/a/ACg8ocKzuhjMNcKcHe6Uus8MNFLwpzQ93q5HKdNqNBS6hlGz5JcIEA=s96-c"
              onClick={() => setProfile(!profile)}
            />
          </div>
        </div>
      </header>
      <div className="w-fit flex flex-col items-stretch justify-start">
        {profile && (
          <div className="default_header w-94 pt-4 pb-2 flex flex-col items-stretch justify-start absolute top-full right-4 z-40 border border-solid border-light-border rounded-2xl shadow-auth-card">
            <div className="w-full min-w-0 mb-2 px-6 flex flex-row items-center justify-start gap-4">
              <Avatar
                name="GK"
                src="https://lh3.googleusercontent.com/a/ACg8ocKzuhjMNcKcHe6Uus8MNFLwpzQ93q5HKdNqNBS6hlGz5JcIEA=s96-c"
              />
              <div className="min-w-0 text-left flex flex-col items-stretch justify-center">
                <p className="text-label font-semibold leading-tight flex items-center gap-1">
                  Gaurav Kadam
                </p>
                <p className="text-label text-light font-medium leading-tight text-ellipsis whitespace-nowrap overflow-hidden flex items-center gap-1">
                  kadamgaurav177@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-start">
              <button className="min-h-9 py-3.5 px-6 text-label-md text-light font-bold leading-tight tracking-wider inline-flex items-center flex-hr gap-6 border-0 outline-0 select-none transition-all duration-200 hover:bg-bg-light">
                <Settings size={17} />
                Manage Profile
              </button>
              <button className="min-h-9 py-3.5 px-6 text-label-md text-light font-bold leading-tight tracking-wider inline-flex items-center flex-hr gap-6 border-0 outline-0 select-none transition-all duration-200 hover:bg-bg-light">
                <LogOut size={17} />
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

HeaderComponent.displayName = "HeaderComponent";

export default HeaderComponent;
