import ourAxios from "./ourAxios";

export const getAllPins = async () => {
  const response = await ourAxios.get("api/pin");
  return response;
};
