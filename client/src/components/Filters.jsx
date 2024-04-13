import Select from "react-select";
import { useContext } from "react";
import { FormInputContext } from "../contexts/FormInputContext";

export function Filters() {
  const {
    selectedRegion,
    selectedYears,
    selectedState,
    yearsOptions,
    regionsOptions,
    stateOptions,
    handleRegionChange,
    handleStateChange,
    handleYearsChange,
  } = useContext(FormInputContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3 className="text-2xl font-bold">Filtros</h3>
      <form onSubmit={handleSubmit} className="text-indigo-50">
        <label htmlFor="year" className="block">
          Selecione o ano:
          <Select
            name="year"
            id="year"
            className="text-black"
            options={yearsOptions}
            value={selectedYears}
            onChange={handleYearsChange}
          />
        </label>
        <label htmlFor="region" className="block my-2 ">
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
          <label htmlFor="state" className="block my-2">
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
        <button className="w-full py-2 font-bold text-black duration-300 ease-in-out rounded-lg bg-redRose hover:bg-indigo-400">
          Buscar
        </button>
      </form>
    </>
  );
}
