import axios from "../Api/api";
export const ApiHelperFunction = async (data: {
  urlPath: any;
  method: any;
  formData: any;
}) => {
  const { urlPath, method, formData } = data;
  var config = {
    method: `${method}`,
    url: `${urlPath}`,
    data: formData,
  };
  let responseData: any = "";
  await axios(config)
    .then(function (response) {
      responseData = response;
    })
    .catch(function (error) {
      if (error?.response?.status === 401) {
        // toast.error("Unauthorized");
      } else {
        // toast.error(error.message);
        console.log(error?.response);
        responseData = error?.response;
      }
    });
  return responseData;
};

// export const getStorage = (sKey) =>
// {
//    if(localStorage.getItem("remember_me") === "true"){
//       return localStorage.getItem(sKey)
//    }else{
//       return sessionStorage.getItem(sKey);
//    }
// }
// export const deleteStorage = (sKey) =>
// {
//    if(localStorage.getItem("remember_me") === "true"){
//       return localStorage.clear();
//    }else{
//       return sessionStorage.clear();
//    }
// }
// export const deleteSpecificStorage = (sKey) =>
// {
//    if(localStorage.getItem("remember_me") === "true"){
//       return localStorage.removeItem(sKey)
//    }else{
//       return sessionStorage.removeItem(sKey)
//    }
// }
// export const setStorage = (sKey,data) =>
// {
//    if(localStorage.getItem("remember_me") === "true"){
//       return localStorage.setItem(sKey, data);
//    }else{
//       return  sessionStorage.setItem(sKey, data);
//    }
// }

// export const setLocaleStorage = (sKey, data) =>
//   localStorage.setItem(sKey, data);

// export const removeStorage = (sKey) => localStorage.setItem(sKey);

// export const clearLocalStorage = (sKey) => localStorage.removeItem(sKey);

// export const setSessionStorage = (sKey, data) =>
//   sessionStorage.setItem(sKey, data);

// export const clearSessionStorage = (sKey) => sessionStorage.removeItem(sKey);
