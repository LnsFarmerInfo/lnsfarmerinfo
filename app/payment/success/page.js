"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(7)
  useEffect(() => {
    setTimeout(function () {
      router.push("/");
    }, 7000);
    setInterval(() => {
      setCounter(counter-1)
    },1000)
  });
  return (
    <div className="text-center mt-32">
      <h1 className="text-3xl font-semibold">
        Your payment has been successfull, you will shortly recieve a mail from
        us.
      </h1>
      <h1 className="text-3xl font-semibold">Thank you.</h1>
      <h1 className="mt-10 text-3xl bg-green-50 py-5">Redirecting in {counter} secs....</h1>
    </div>
  );
};

export default page;
