import Swal from "sweetalert2";

export const alertSuccess = async (message) => {
    return Swal.fire({
        icon: "success",
        title: "Success",
        message: message,
    })
}

export const alertError = async (message) => {
    return Swal.fire({
        icon: "error",
        title: "Ups",
        message: message,
    })
}