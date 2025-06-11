import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 5rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
    `}
`;
// we can add expressions as font-size: {10 > 5 ? 20px : 30px} as it is a template literal

export default Heading;

// const test = css`
//   text-align: center;
//   ${10 > 5 &&
//   "background-color: yellow"}//css function needed for expressions to work in externally defined css variables
// `;
