import { VOLUNTEERS_API_ROUTE } from "./constants";
import httpServices from "./httpServices";

export async function addVolunteer(formData) {
   return await httpServices.post(VOLUNTEERS_API_ROUTE, formData);
}
