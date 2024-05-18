"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { search_validation } from "@/utils/inputValidations";
import React from "react";
import PrimaryInput from "@/app/components/PrimaryInput";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import MyCourses from "@/app/components/user/MyCourses";
import MyRecourses from "@/app/components/user/MyRecourses";
import MyCertificates from "@/app/components/user/MyCertificates";

const tabs: {
  id: string;
  label: string;
  component: React.ComponentType;
}[] = [
  {
    id: "my-courses",
    label: "My courses",
    component: MyCourses,
  },
  {
    id: "resources",
    label: "Resources",
    component: MyRecourses,
  },
  {
    id: "certificates",
    label: "Certificates",
    component: MyCertificates,
  },
];

const MyCoursesDashboard = React.memo(function MyCoursesDashboard() {
  const { status, data: session } = useSession();
  const [success, setSuccess] = useState(false);
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });
  return (
    <>
      <main className="container mx-auto pt-10">
        <h1 className="mb-8 text-4xl text-main-text font-bold">My Courses</h1>
        <Tabs
          aria-label="Dynamic tabs"
          items={tabs}
          variant="underlined"
          color="primary"
          className="primary_tabs"
        >
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <item.component />
            </Tab>
          )}
        </Tabs>
        {/* {status === "authenticated" && (
          <section>
            <p className="font-medium">Hi {session.user?.name || ""},</p>
            <p className="font-medium leading-loose">
              You don't have any courses yet. Browse our catalog to find the
              perfect course for you!
            </p>
            <FormProvider {...methods}>
              <PrimaryInput {...search_validation} />
              <button type="submit" style={{ display: "none" }}>
                Submit
              </button>
            </FormProvider>
          </section>
        )} */}
      </main>
    </>
  );
});

export default MyCoursesDashboard;
