"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import { LogOut, Search, Settings } from "react-feather";
import Logo from "../../../../public/images/logo.png";
import NewLogo from "../../../../public/images/logo-udemy.svg";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const HeaderComponent = React.memo(function HeaderComponent() {
  const [profile, setProfile] = useState(false);
  const { status, data: session } = useSession();
  return (
    <div className="relative">
      <header className="px-6 py-3 flex flex-row items-center justify-between shadow-header-default">
        <nav className="mr-4 text-sm text-light font-bold uppercase flex flex-row items-center gap-6">
          <Image
            src={NewLogo}
            alt="lms_logo"
            title="Learning Management System"
            priority
            width={80}
            className="h-auto"
          />
          <ul className="w-max flex flex-row items-center justify-start gap-12">
            <li>Categories</li>
          </ul>
          <div className="md:min-w-96 w-full relative">
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className={`w-full px-4 py-2.5 pr-8 text-label leading-tight font-normal border border-solid border-hr outline outline-2 outline-transparent outline-offset-2 rounded-3xl focus:shadow-input-focus transition-all duration-200 ease-in-out`}
            />
            <div className="text-slate-600 absolute top-2.5 right-3 cursor-pointer">
              <Search size={16} />
            </div>
          </div>
        </nav>
        <div className="flex flex-row items-center justify-start gap-6">
          <nav className="mr-4 text-sm text-light font-bold uppercase">
            {status === "authenticated" && (
              <ul className="w-max flex flex-row items-center justify-start gap-12">
                <li>
                  <Link href={"/my-courses"}>MY COURSES</Link>
                </li>
                <li>
                  <Link href={""}>MY RESOURCES</Link>
                </li>
              </ul>
            )}
            {status === "unauthenticated" && (
              <ul className="w-max flex flex-row items-center justify-start gap-12">
                <li>
                  <Link href={""}>Become an Instructor</Link>
                </li>
                <li>
                  <Link href={""}>LMS for Business</Link>
                </li>
              </ul>
            )}
          </nav>

          <div>
            {status === "authenticated" && (
              <>
                <Avatar
                  as="button"
                  name={session.user?.name || ""}
                  src={session.user?.image || ""}
                  onClick={() => setProfile(!profile)}
                />
              </>
            )}
            {status === "unauthenticated" && (
              <div className="flex flex-row items-center gap-4">
                <Link
                  href={"/sign-in"}
                  className="w-full min-h-9 px-5 py-2 text-xs text-light leading-none tracking-wider font-bold inline-flex items-center justify-center border border-hr outline-0 whitespace-nowrap select-none rounded-md transition-all duration-100 ease-in-out hover:bg-accent hover:text-white"
                >
                  Sign in
                </Link>
                <Link
                  href={"/sign-up"}
                  className="w-full min-h-9 px-5 py-2 text-xs text-white leading-none tracking-wider font-semibold inline-flex items-center justify-center border-0 outline-0 whitespace-nowrap bg-accent select-none rounded-md transition-all duration-100 ease-in-out hover:bg-accent-dark"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="w-fit flex flex-col items-stretch justify-start">
        {profile && status === "authenticated" && (
          <div className="default_header w-94 pt-4 pb-2 flex flex-col items-stretch justify-start absolute top-full right-4 z-40 border border-solid border-light-border bg-white rounded-2xl shadow-auth-card">
            <div className="w-full min-w-0 mb-2 px-6 flex flex-row items-center justify-start gap-4">
              <Avatar
                name={session.user?.name || ""}
                src={session.user?.image || ""}
              />
              <div className="min-w-0 text-left flex flex-col items-stretch justify-center">
                <p className="text-label font-semibold leading-tight flex items-center gap-1">
                  {session.user?.name}
                </p>
                <p className="text-label text-light font-medium leading-tight text-ellipsis whitespace-nowrap overflow-hidden flex items-center gap-1">
                  {session.user?.email}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-start">
              <button className="min-h-9 py-3.5 px-6 text-label-md text-light font-bold leading-tight tracking-wider inline-flex items-center flex-hr gap-6 border-0 outline-0 select-none transition-all duration-200 hover:bg-bg-light">
                <Settings size={17} />
                Manage Profile
              </button>
              <button
                className="min-h-9 py-3.5 px-6 text-label-md text-light font-bold leading-tight tracking-wider inline-flex items-center flex-hr gap-6 border-0 outline-0 select-none transition-all duration-200 hover:bg-bg-light"
                onClick={() =>
                  signOut({
                    callbackUrl: "/sign-in",
                  })
                }
              >
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
