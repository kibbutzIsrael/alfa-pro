import { VOLUNTEERS_API_ROUTE } from "./constants";
import httpServices from "./httpServices";

export async function addVolunteer(formData) {
   return await httpServices.post(VOLUNTEERS_API_ROUTE, formData);
}

export async function getVolunteers() {
   return await httpServices.get(VOLUNTEERS_API_ROUTE);
}
export async function getNumOfVolunteers() {
   const { data: volunteers } = await getVolunteers();
   return volunteers.length;
}
