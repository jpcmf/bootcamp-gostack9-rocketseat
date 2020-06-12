import React, { forwardRef, useImperativeHandle } from 'react';

interface FormProps {
  initialData?: string;
}

export interface FormRef {
  handleSubmit(): void;
}

const Form: React.RefForwardingComponent<FormRef, FormProps> = (props, ref) => {
  function handleSubmit() {
    alert('Submit');
  }

  useImperativeHandle(ref, () => ({
    handleSubmit,
  }))

  return (
    <form action="">
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  )
}

export default forwardRef(Form);