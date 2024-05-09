import CardContainer from "@/app/components/auth/CardContainer";
import SocialLogin from "@/app/components/auth/SocialLogin";
import React from "react";

const SignInPage = React.memo(function signInPage() {
  return (
    <>
      <main className="h-full flex items-center justify-center">
        <CardContainer title="Sign in" subtitle="to continue to LMS">
          <SocialLogin />
          <div className="flex flex-row items-center justify-center">
            <div className="h-[1px] flex flex-row flex-hr items-stretch justify-start bg-hr"></div>
            <p className="mx-4 text-sm text-light leading-snug font-medium">
              or
            </p>
            <div className="h-[1px] flex flex-row flex-hr items-stretch justify-start bg-hr"></div>
          </div>
        </CardContainer>
      </main>
    </>
  );
});

export default SignInPage;
