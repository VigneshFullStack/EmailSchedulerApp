import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../types/authTypes";
import { http } from "../../api/api";
import { toast } from "react-toastify";

export const login = (payload) => {
  console.log(payload);
  return async (dispatch) => {
    dispatch(loginRequest());
    http
      .post("login", payload)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("successfully!", {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            dispatch(loginSuccess(res.data));
          }, 1200);
        }
      })
      .catch((err) => {
        console.error(err);
        const error = err.response.data.error;

        toast.error(error, {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          dispatch(loginFailure(err.response.data));
        }, 1200);
      });
  };
};

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload: payload,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginLogout = () => ({
  type: LOGIN_LOGOUT,
});
