import { useState, useEffect } from "react";

interface SomeItem {
  val: string;
  id: number;
}

const StateComponent = () => {
  const [someState, setSomeState] = useState<SomeItem[]>([]);
  useEffect(() => {
    setSomeState((prevState) => {
      return prevState.concat({ val: "asdfasdf", id: 123123 });
    });
  }, []);

  return <div></div>;
};

export default StateComponent;
