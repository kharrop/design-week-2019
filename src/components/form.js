import React from "react"
import styled from "styled-components"

const FormWrapper = styled.form`
  width: 300px;
  label {
    font-size: 12px;
    margin-bottom: 8px;
  }
  textarea {
    width: 100%;
  }
  input {
    width: 100%;
    font-size: 18px;
    padding: 4px 0;
    outline: 0 none;
    border: 0 none;
    border-bottom: 1px solid #bbb;
    background-color: transparent !important;
    &:focus {
      border-bottom: 1px solid #a200a1;
    }
  }
  textarea {
    padding: 8px;
    font-size: 16px;
  }
`

const Form = ({ children }) => (
  <FormWrapper
    className="form"
    name="contact"
    method="POST"
    data-netlify="true"
  >
    {children}
  </FormWrapper>
)

export default Form
