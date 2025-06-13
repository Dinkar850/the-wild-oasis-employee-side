import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last") ? 7 : +searchParams.get("last");

  const queryDate = subDays(new Date(), numDays).toISOString(); //subtract days

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`], //changing with change in days: 7/30/90
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  ); //not the unconfirmed ones as the person might not even show up

  return { isLoading, stays, confirmedStays, numDays };
}
