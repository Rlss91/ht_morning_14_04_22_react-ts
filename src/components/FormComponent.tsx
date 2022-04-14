import React, { useRef } from "react";

const FormComponent = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (ev: React.FormEvent): void => {
    ev.preventDefault();
    console.log(textInputRef.current?.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Name</label>
      <input type="text" name="text" id="text" ref={textInputRef} />
      <button>Click me</button>
    </form>
  );
};
export default FormComponent;
