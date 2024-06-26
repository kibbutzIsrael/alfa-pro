function getModal(modalId) {
   return document.getElementById(modalId);
}

export function openModal(modalId) {
   const modal = getModal(modalId);
   modal.showModal();
}
export function closeModal(modalId) {
   const modal = getModal(modalId);
   modal.close();
}
