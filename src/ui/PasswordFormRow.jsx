/* eslint-disable react/prop-types */
import { HiEyeOff } from "react-icons/hi";
import { HiEye } from "react-icons/hi2";
import styled from "styled-components";
import ToggleEyeButton from "./ToggleEyeButton";

const StyledPasswordFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const Div = styled.div`
  width: 100;
  position: relative;
`;

function PasswordFormRow({
  label,
  error,
  showPassword,
  setShowPassword,
  children,
}) {
  return (
    <StyledPasswordFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      <Div>
        {children}
        <ToggleEyeButton
          onClick={() => setShowPassword((sp) => !sp)}
          type="button"
        >
          {showPassword ? <HiEyeOff /> : <HiEye />}
        </ToggleEyeButton>
      </Div>
      {error && <Error>{error}</Error>}
    </StyledPasswordFormRow>
  );
}

export default PasswordFormRow;
