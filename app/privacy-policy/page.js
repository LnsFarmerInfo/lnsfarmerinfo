import React from "react";

const page = () => {
  return (
    <div className="text-center text-2xl space-y-10">
      <h1 className="text-4xl font-bold uppercase p-5 text-center">
        Privacy Policy
      </h1>
      <p>
        <span className="font-semibold">We respect your privacy</span>. This
        policy explains what information we collect when you visit our website,
        how we use it, and how we keep it safe.
      </p>
      <ul className="space-y-5 max-w-5xl mx-auto text-left list-disc">
        <li>
          <span className="font-semibold">Information We Collect</span>: We may
          collect basic information like your IP address and browsing activity
          on our site. If you contact us, we might store your name and email
          address.
        </li>
        <li>
          <span className="font-semibold">Use of Information:</span>:We use this
          information to improve our website and understand user traffic. We may
          also use it to contact you if you request it.
        </li>
        <li>
          <span className="font-semibold">Sharing Information </span>:We will
          not share your information with third parties without your consent,
          except as required by law.
        </li>
        <li>
          <span className="font-semibold">Data Security</span>:We take steps to
          protect your information from unauthorized access.
        </li>
        <li>
          <span className="font-semibold">Your Control</span>:You can choose not
          to provide certain information. You can also contact us to request to
          see or delete your data.
        </li>
      </ul>
    </div>
  );
};

export default page;
