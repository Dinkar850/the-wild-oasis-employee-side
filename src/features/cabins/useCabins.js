import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
    onError: (err) => toast.error(err.message),
  });
  return { isLoading, cabins, error };
}
