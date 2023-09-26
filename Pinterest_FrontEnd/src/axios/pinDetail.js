import ourAxios from "./ourAxios";
import {
  deleteWithToken,
  getWithToken,
  postWithToken,
  putWithToken,
} from "./auth";

export const getPinbyId = (id) => async () => {
  const response = await ourAxios.get(`api/pin/${id}`);
  return response;
};

export const savePin = async (pinid) => {
  const response = await postWithToken(`api/pin/${pinid}/save`, pinid);
  return response;
};
