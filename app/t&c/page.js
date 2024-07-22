import React from "react";

const page = () => {
  return (
    <div className="text-center text-2xl space-y-10">
      <h1 className="text-4xl font-bold uppercase p-5 text-center">
        Terms & Conditions
      </h1>
      <p>
        <span className="font-semibold">Welcome! </span>These terms and
        conditions ("Terms") outline the rules for using the website of LNS
        FarmerInfo LLP ("Website" or "Service"). By accessing or using the
        Website, you agree to be bound by these Terms.
      </p>
      <ul className="space-y-5 max-w-5xl mx-auto text-left list-disc">
        <li>
          <span className="font-semibold">Use of the Website</span>: You may
          use the Website for lawful purposes only. You agree not to: Interfere
          with the Website's operation. Violate any laws or regulations.
          Infringe on the rights of others.
        </li>
        <li>
          <span className="font-semibold">User Content</span>:You are responsible for any content you post on the Website ("User Content"). You retain ownership of your User Content, but grant LNS FarmerInfo LLP a license to use it in connection with the Website.
        </li>
        <li>
          <span className="font-semibold">Intellectual Property</span>:The Website and its content are protected by intellectual property laws. You may not use any content without permission from LNS FarmerInfo LLP.
        </li>
        <li>
          <span className="font-semibold">Disclaimers</span>:The Website is provided "as is" without warranty of any kind. LNS FarmerInfo LLP is not liable for any damages arising from your use of the Website.
        </li>
        <li>
          <span className="font-semibold">Limitation of Liability</span>:Our liability to you is limited to the fullest extent permitted by law.
        </li>
        <li>
          <span className="font-semibold">Termination</span>:LNS FarmerInfo LLP may terminate your access to the Website for any reason.
        </li>
      </ul>
    </div>
  );
};

export default page;
