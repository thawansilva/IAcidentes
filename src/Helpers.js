// Navbar
export const toggleSidebar = (action) => {
  let sidebar = document.querySelector("#sidebar");
  let closeIcon = document.querySelector("#close");
  let openIcon = document.querySelector("#open");

  if (action == "close") {
    closeIcon.classList.add("hidden");
    openIcon.classList.remove("hidden");
    sidebar.classList.add("left-[-400px]", "opacity-0");
  } else {
    closeIcon?.classList.remove("hidden");
    openIcon?.classList.add("hidden");
    sidebar?.classList.remove("left-[-400px]", "opacity-0");
  }
};

// Formulary
export const getYears = () => {
  const dataCurrent = new Date();
  let currentYear = dataCurrent.getFullYear();
  let years = [];
  for (let initialYear = 2007; initialYear <= currentYear; initialYear++) {
    years.push({ value: String(initialYear), label: String(initialYear) });
  }
  return years;
};

export const getRegions = () => {
  let regions = [
    { value: "todos", label: "Todos" },
    { value: "centro-oeste", label: "Centro-oeste" },
    { value: "norte", label: "Norte" },
    { value: "nordeste", label: "Nordeste" },
    { value: "sul", label: "Sul" },
    { value: "sudeste", label: "Sudeste" },
  ];
  return regions;
};

export const getStates = () => {
  return {
    norte: [
      { value: "todos", label: "Todos" },
      { value: "AC", label: "AC" },
      { value: "AP", label: "AP" },
      { value: "AM", label: "AM" },
      { value: "PA", label: "PA" },
      { value: "RR", label: "RR" },
      { value: "RO", label: "RO" },
      { value: "TO", label: "TO" },
    ],
    nordeste: [
      { value: "todos", label: "Todos" },
      { value: "AL", label: "AL" },
      { value: "BA", label: "BA" },
      { value: "CE", label: "CE" },
      { value: "MA", label: "MA" },
      { value: "PB", label: "PB" },
      { value: "PI", label: "PI" },
      { value: "PE", label: "PE" },
      { value: "RN", label: "RN" },
      { value: "SE", label: "SE" },
    ],
    sudeste: [
      { value: "todos", label: "Todos" },
      { value: "ES", label: "ES" },
      { value: "MG", label: "MG" },
      { value: "RJ", label: "RJ" },
      { value: "SP", label: "SP" },
    ],
    sul: [
      { value: "todos", label: "Todos" },
      { value: "PR", label: "PR" },
      { value: "RS", label: "RS" },
      { value: "SC", label: "SC" },
    ],
    "centro-oeste": [
      { value: "todos", label: "Todos" },
      { value: "DF", label: "DF" },
      { value: "GO", label: "GO" },
      { value: "MS", label: "MS" },
      { value: "MT", label: "MT" },
    ],
  };
};
