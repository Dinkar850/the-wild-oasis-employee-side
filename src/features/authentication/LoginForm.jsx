import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";
import PasswordFormRowVertical from "../../ui/PasswordFormRowVertical";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggingIn } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoggingIn}
        />
      </FormRowVertical>
      <PasswordFormRowVertical
        label="Password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      >
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoggingIn}
        />
      </PasswordFormRowVertical>
      <FormRowVertical>
        <Button size="large">{!isLoggingIn ? "Login" : <SpinnerMini />}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
