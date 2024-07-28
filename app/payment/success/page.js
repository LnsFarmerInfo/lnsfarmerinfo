"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(function () {
      router.push("/");
    }, 5000);
  });
  return (
    <div>
      <h1 className="text-3xl font-semibold">
        Your payment has been successfull, you will shortly recieve a mail from
        us.
      </h1>
      <h1 className="text-3xl font-semibold">Thank you.</h1>
    </div>
  );
};

export default page;
