import axiosService from "../api/axiosServices";

//add resume api
export const addResumeAPI=async(reqBody)=>{
    return await axiosService('POST','/resumes',reqBody)
}

//get a particular resume
export const viewResumeAPI=async(id)=>{
    return await axiosService('GET',`/resumes/${id}`,{})
}

//edit resume api
export const editResumeAPI=async(id,reqBody)=>{
    return await axiosService('PUT',`/resumes/${id}`,reqBody)
}

// download resume api
export const downloadResumeAPI=async(reqBody)=>{
    return await axiosService('POST','/downloads',reqBody)
}
// View all downloads
export const ViewdownloadsAPI=async()=>{
    return await axiosService('GET','/downloads')
}

// Url Compression
export const uploadCloudinary=async(imageData)=>{
    const formData = new FormData()
    formData.append(
        "upload_preset",
        "resume-builder"

    )
    const response = await fetch('https://api.cloudinary.com/v1_1/emtkci5q/image/upload',{
    method:'POST',
    body:formData    
    })
    return response.json()
}
// Delete a resume from downloads
export const deleteDownloadsAPI=async(id)=>{
    return await axiosService('DELETE',`/downloads/${id}`)
}

// List all resumes
 export const viewAllResumesAPI=async()=>{
    return await axiosService('GET',`/resumes`,{})
}
// Delete resumes from all resumes
export const deleteSavedAPI=async(id)=>{
    return await axiosService('DELETE',`/resumes/${id}`,{})
}
