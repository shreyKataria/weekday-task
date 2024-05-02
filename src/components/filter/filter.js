import React from "react";
import Data from "../../utils/rawData.json";
import DropdownFilter from "./dropdownFilter";
import Dropdown from "./dropdown";
import "./filter.css";

const Filter = () => {
  return (
    <div className="filters">
      <div>
        <DropdownFilter data={Data.filterData.Roles} title="Roles" />
      </div>

      <Dropdown data={Data.filterData.Location} title="Location" />
      <Dropdown
        data={Data.filterData["Remote/on-site"]}
        title="Remote/on-site"
      />
      <Dropdown
        data={Data.filterData["Minimum experience"]}
        title="Minimum experience"
      />
      <Dropdown data={Data.filterData["Min base pay"]} title="Min base pay" />
    </div>
  );
};

export default Filter;
