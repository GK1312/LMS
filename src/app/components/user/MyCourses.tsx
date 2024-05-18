import React from "react";
import CourseCard from "../dashboard/CourseCard";

const MyCourses = React.memo(function MyCourses() {
  return (
    <section>
      <CourseCard />
    </section>
  );
});

export default MyCourses;
