import axios from "axios";

const httpClient = () => {
  // let lang = localStorage.getItem("language_wms");
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  let _httpClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api`,
    timeout: 90000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token || undefined,
    },
    data: null,
    // params: {
    //   lang: lang ?? "vn",
    // },
  });

  _httpClient.interceptors.response.use(
    (response) => {
      // if (
      //   response.status === 200 &&
      //   window.location.pathname === "/permission"
      // ) {
      //   window.location.assign("/");
      // }
      return response;
    },
    (error) => {
      if (!error.response) {
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  return _httpClient;
};

export { httpClient };
