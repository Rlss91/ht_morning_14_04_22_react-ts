import NameComponent from "./NameComponent";

const names: string[] = ["kenny", "john", "cartman", "eden"];

const NamesComponent = () => {
  const handleItemClicked = (name: string): void => {
    console.log("name", name);
  };
  return (
    <ul>
      {names.map((item: string) => {
        return (
          <NameComponent
            name={item}
            key={item}
            onClick={handleItemClicked}
          ></NameComponent>
        );
      })}
    </ul>
  );
};

export default NamesComponent;
