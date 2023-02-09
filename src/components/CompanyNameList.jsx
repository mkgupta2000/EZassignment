import "./CompanyNameList.css";

import { SideBarCards } from "./SideBarCards";

export const CompanyNameList = () => {
  const companyData = [
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
    {
      companyName: "Company Name",
      code: "CODE",
      entities: "8 Entities",
      users: "64 Users",
    },
  ];
  return (
    <>
      <div>
        <img
          src="./images/Group 76.jpg"
          className="April-Image"
          alt="april 2021"
        />
      </div>
      {companyData.map((data, index) => (
        <SideBarCards
          companyName={data.companyName}
          code={data.code}
          entities={data.entities}
          users={data.users}
          key={index}
        />
      ))}
      {/* <div>
        <SideBarCards />
        <SideBarCards />
        <SideBarCards />
        <SideBarCards />
        <SideBarCards />
        <SideBarCards />
        <SideBarCards />
        <SideBarCards />
        <SideBarCards />
        <SideBarCards />
        <SideBarCards />
      </div> */}
    </>
  );
};
