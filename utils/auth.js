"use client";
import jwtDecode from "jwt-decode"; 

const decodeToken = (token) => {
    const decodedToken = jwtDecode(token);

    return decodedToken;
}

const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token;
  }
};

const setToken = (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
};

export { getToken, setToken, decodeToken };