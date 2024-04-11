import Select from "react-select";
import { useLocation } from "react-router-dom";
import { getRegions, getStates, getYears } from "../Helpers";
import { useState } from "react";

export function Filters() {
  let location = useLocation();
  let yearsOptions = getYears();
  let regionsOptions = getRegions();
  let stateOptions = getStates();

  const [selectedYears, setSelectedYears] = useState(yearsOptions);
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
      <h3 className="text-2xl font-bold">Filtros</h3>
      <form action={`/${location.pathname.slice(1)}`} method="GET" className="">
        <label htmlFor="" className="block">
          Selecione os anos:
          <Select
            name="period"
            id="period"
            className="text-black"
            options={yearsOptions}
            value={selectedYears}
            onChange={handleYearsChange}
            isMulti
          />
        </label>
        <label htmlFor="" className="block my-2 ">
          Selecione uma região do Brasil:
          <Select
            name="region"
            id="region"
            className="text-black"
            options={regionsOptions}
            value={selectedRegion}
            onChange={handleRegionChange}
          />
        </label>
        {selectedRegion?.value != "todos" && (
          <label htmlFor="" className="block my-2">
            Selecione um estado do Brasil:
            <Select
              name="state"
              id="state"
              className="text-black"
              options={stateOptions[selectedRegion.value]}
              value={selectedState}
              onChange={handleStateChange}
            />
          </label>
        )}

        <button className="w-full py-2 font-bold text-indigo-100 duration-300 ease-in-out rounded-lg bg-redRose hover:bg-indigo-800">
          Buscar
        </button>
      </form>
    </>
  );
}
