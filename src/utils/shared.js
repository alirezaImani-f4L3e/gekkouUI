import { toast } from "react-toastify";

export const timeUnits = [
  { id: 0, name: "دقیقه", title: "minutes", unit: 1 },
  { id: 1, name: "ساعت", title: "houres", unit: 60 },
  { id: 2, name: "روز", title: "days", unit: 1440 },
];

export function successToast(text) {
  toast.success(text, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
export function errorToast(text) {
  toast.error(text, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
