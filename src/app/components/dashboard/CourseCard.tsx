import Image from "next/image";
import React from "react";
import Thumb from "../../../../public/images/course_thumb01.jpg";
import Link from "next/link";

const CourseCard = React.memo(function CourseCard() {
  return (
    <section className="w-fit px-6 pt-6 pb-8 border border-[#B5B5C3] rounded-xl bg-white transition-all divide-success-200 ease-in-out">
      <Link href={""} className="mb-5 relative block">
        <Image
          src={Thumb}
          alt="courses_thumb"
          width={300}
          height={190}
          className="rounded-lg"
        />
      </Link>
      <div>
        <ul>
          <li>
            <Link
              href={""}
              className="px-[0.815rem] py-[0.45rem] text-sm text-main-text font-semibold bg-[#EFEFF2] rounded-3xl"
            >
              Development
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
});

export default CourseCard;
