import axiosInstance from "./axiosInstance";
import axios from "axios";

interface ContactData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export const sendContactMessage = async (data: ContactData) => {
  try {
    const response = await axiosInstance.post("/contact/Lossa", data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error de Axios:", error.response?.data || error.message);
    } else {
      console.error("Error inesperado:", error);
    }
    throw error;
  }
};
