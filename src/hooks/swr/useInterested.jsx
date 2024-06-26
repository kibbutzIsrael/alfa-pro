import useSWR from "swr";
import { VOLUNTEERS_API_ROUTE } from "../../lib/constants";

export function useInterested() {
   const { data, error, isLoading } = useSWR(VOLUNTEERS_API_ROUTE);

   let numOfInterested = 0;
   if (data) {
      numOfInterested = data.length;
   }

   return {
      interested: data,
      numOfInterested,
      isLoading,
      isError: error,
   };
}
