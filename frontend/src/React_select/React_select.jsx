export const customStyles = {
    //main background color
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#fff",
      padding: "2px",
      outline: "none",
      border: state.isFocused ? "solid 1px #2a30ef" : "solid 1px grey ",
      boxShadow: state.isFocused ? "solid 1px #2a30ef" : "solid 1px #2a30ef",
      "&:hover": {
        border: state.isFocused ? "solid 1px #2a30ef" : "solid 1px #2a30ef",
      },
    }),
  
    //selected value
    multiValueLabel: (provided, state) => ({
      ...provided,
  
      backgroundColor: "#2a30ef",
      borderTopLeftRadius: "2px",
      borderBottomLeftRadius: "2px",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      color: "black",
    }),
  
    //cross symbolin selected value
    multiValueRemove: (provided, state) => ({
      ...provided,
  
      backgroundColor: "#2a30ef",
      color: "black",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
      borderTopRightRadius: "2px",
      borderBottomRightRadius: "2px",
    }),
  
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
  
    //all the possible value vala manu
    menuList: (provided) => ({
      ...provided,
      height: "table",
      backgroundColor: "#fff",
      color: "black",
    }),
  
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#fff",
      color: state.isSelected ? "#2a30ef" : "black",
      ":active": {
        backgroundColor: "#2a30ef",
      },
    }),
  };
  