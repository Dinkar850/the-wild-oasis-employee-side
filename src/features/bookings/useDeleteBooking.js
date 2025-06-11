import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: delBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteBooking(id),
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: () => toast.error("There was an error deleting the booking"),
  });
  return { delBooking, isDeleting };
}
