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
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label>
        Name
        <br /> <input type="text" name="name" placeholder="Symmetra" />
      </label>
    </p>
    <p>
      <label>
        Email <br />
        <input type="email" name="email" placeholder="symmetra@overwatch.com" />
      </label>
    </p>
    <p>
      <label>
        Message <br />
        <textarea
          rows="4"
          name="message"
          placeholder="Write a short message..."
        />
      </label>
    </p>
    <p>
      <button className="outline" type="submit">
        Send
      </button>
    </p>
  </FormWrapper>
)

export default Form
