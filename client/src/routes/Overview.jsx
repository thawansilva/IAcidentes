import { useContext, useEffect, useState } from "react";
import { FormInputContext } from "../contexts/FormInputContext";

export function Overview() {
  const [data, setData] = useState({});
  const { selectedYears, selectedRegion, selectedState } =
    useContext(FormInputContext);

  const fetchAPI = async () => {
    const response = await fetch(
      `http://localhost:5000/visaogeral?year=${selectedYears?.value}&region=${
        selectedRegion?.value
      }${selectedRegion?.value != "todas" && `&state=${selectedState?.value}`}`,
    )
      .then((res) => res.json())
      .then((data) => data);
    setData(response);
  };

  useEffect(() => {
    fetchAPI();
  }, [selectedYears, selectedRegion]);

  return <div>Visão geral</div>;
}
