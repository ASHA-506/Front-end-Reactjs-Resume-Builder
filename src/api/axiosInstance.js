import axios from "axios";

const instance = axios.create({
  baseURL: "https://back-end-json-server-resume-builder.onrender.com",
  timeout: 5000,
});

//global error handling
instance.interceptors.response.use((response)=>{
    console.log("API RESPONSE RECEIVED...");
    return response
    
},
(error)=>{
    if(error.response){
        const status = error.response.status
        if(status==401){
            console.log("Unauthorized Access");
        }else if(status==404){
            console.log("API is NOT Found..");     
        }else if(status==500){
             console.log("Something went wrong..");    
        }else if(error.request){
             console.log("No response from the ");
        }else{
            console.log("Error"+ error.message);    
  }

  return Promise.reject(error)
    }}
  )

export default instance