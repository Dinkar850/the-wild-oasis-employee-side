/* eslint-disable react/prop-types */
import { HiEyeOff } from "react-icons/hi";
import { HiEye } from "react-icons/hi2";
import styled from "styled-components";
import ToggleEyeButton from "./ToggleEyeButton";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
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
function PasswordFormRowVertical({
  label,
  error,
  showPassword,
  setShowPassword,
  children,
}) {
  return (
    <StyledFormRow>
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
    </StyledFormRow>
  );
}

export default PasswordFormRowVertical;
