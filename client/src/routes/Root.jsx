import { useState } from "react";
import { NavigationBar } from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import { FormInputContext } from "../contexts/FormInputContext";
import { getRegions, getStates, getYears } from "../Helpers";

export function Root() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarOpen((current) => !current);
  };

  let yearsOptions = getYears();
  let regionsOptions = getRegions();
  let stateOptions = getStates();

  const [selectedYears, setSelectedYears] = useState(yearsOptions.slice(-1)[0]);
  const [selectedRegion, setSelectedRegion] = useState(regionsOptions[0]);
  const [selectedState, setSelectedState] = useState();

  const handleYearsChange = (selectedYear) => {
    setSelectedYears(selectedYear);
  };

  const handleRegionChange = (selectedRegion) => {
    setSelectedRegion(selectedRegion);
    setSelectedState(stateOptions[selectedRegion.value][0]);
  };

  const handleStateChange = (selectedState) => {
    setSelectedState(selectedState);
  };

  return (
    <>
      <FormInputContext.Provider
        value={{
          selectedRegion,
          selectedYears,
          selectedState,
          yearsOptions,
          regionsOptions,
          stateOptions,
          handleRegionChange,
          handleStateChange,
          handleYearsChange,
        }}
      >
        <NavigationBar toggleNavbar={toggleNavbar} />
        <main
          id="main"
          className={`${isNavbarOpen && "md:ml-[340px]"} p-5 ml-12`}
        >
          <section className="container mx-auto">
            <Outlet />
          </section>
        </main>
      </FormInputContext.Provider>
    </>
  );
}
