import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      toast.success("Logged in successfully");
      navigate("/");
    },
    onError: (err) => {
      console.log("ERROR", err.message);
      toast.error("Incorrect email or password");
    },
  });

  return { login, isLoggingIn };
}
