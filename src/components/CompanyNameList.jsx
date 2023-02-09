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
  ];
  return (
    <>
      <div className="select-month">
        <select class="month-select">
          <option value="January">January 2021</option>
          <option value="February">February 2021 </option>
          <option value="March">March 2021 </option>
          <option value="April">April 2021</option>
          <option value="May">May 2021</option>
          <option value="June">June 2021</option>
          <option value="July">July 2021</option>
          <option value="August">August 2021</option>
          <option value="September">September 2021</option>
          <option value=" October"> October 2021</option>
          <option value="November">November 2021</option>
          <option value=" December"> December 2021</option>
        </select>
      </div>
      <div className="Sidebar-cards">
        {companyData.map((data, index) => (
          <SideBarCards
            companyName={data.companyName}
            code={data.code}
            entities={data.entities}
            users={data.users}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
