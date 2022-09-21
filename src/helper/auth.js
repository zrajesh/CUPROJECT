// import { API } from "../backend";
const API = "http://localhost:8000/api";

export const Signup = (user, url) => {
    console.log("API: ", API);
    return fetch(`${API}/${url}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const Sigin = (user, url) => {
    return fetch(`${API}/${url}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const authenticate = (data, next) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
}

export const Signout = next => {
    if(typeof window !== "undefined") {
        localStorage.removeItem("jwt");
        next();
        return fetch(`${API}/signout`, {
            method: "GET"
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
}

export const isAuthenticated = () => {
    if(typeof window == "undefined") {
        return false;
    }
    if(localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
}
