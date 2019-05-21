import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.a`
border-radius: 20px;
background-color: #10a472;
border: 0 none;
color: #fff;
font-weight: 600;
padding: 8px 16px;
letter-spacing: 0.1em;
font-size: 12px;
text-transform: uppercase;
text-decoration: none;
cursor: pointer;
transition: background-color 0.2s ease-in-out;
outline: 0 none;
&:hover {
    background-color: #0a8a5f;
  }
&.outline {
    border: 2px solid #555;
    background-color: transparent;
    color: #555;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
}

  }
`

const ButtonLink = ({ className, children, href, target }) => (
  <ButtonWrapper
    className={className}
    href={href}
    target={target}
    activeClassName="active"
  >
    {children}
  </ButtonWrapper>
)

export default ButtonLink
