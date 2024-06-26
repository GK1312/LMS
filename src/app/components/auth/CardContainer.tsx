import React, { ReactNode } from "react";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";

const CardContainer = React.memo(function CardContainer({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="w-100 sm:max-w-auth-card-lg max-w-auth-card-sm pt-10 px-8 pb-12 flex flex-col items-stretch justify-start gap-8 rounded-2xl shadow-auth-card">
      <div className="h-12 flex flex-col items-stretch justify-start object-cover">
        <Image
          src={Logo}
          alt="lms_logo"
          title="Learning Management System"
          priority
          width={120}
          className="h-auto"
        />
      </div>
      <div className="flex flex-col items-stretch justify-start gap-1">
        <h1 className="text-xl leading-6 font-semibold">{title}</h1>
        <p className="text-base text-light leading-5 font-normal">{subtitle}</p>
      </div>
      <div className="flex flex-col items-stretch justify-start gap-8">
        {children}
      </div>
    </div>
  );
});

CardContainer.displayName = "CardContainerComponent";

export default CardContainer;
