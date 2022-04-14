const NameComponent: React.FC<{
  name: string;
  onClick: (name: string) => void;
}> = (props) => {
  return (
    <li
      onClick={() => {
        props.onClick(props.name);
      }}
    >
      {props.name}
    </li>
  );
};
export default NameComponent;
