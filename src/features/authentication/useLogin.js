import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      toast.success("Logged in successfully");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err.message);
      toast.error(err.message);
    },
  });

  return { login, isLoggingIn };
}
