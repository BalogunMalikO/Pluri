import React from "react";
interface iupload{
    fileType: any,
    proficiency: any,
    name: String,
}

const tListOfUploadedData : Array<iupload> = [
    {
        name: "kene",
        proficiency: "A1",
        fileType: "audio",
    }
]

function Upload(){

    const uploadData = {tListOfUploadedData}


    return uploadData
    
}

function UploadLists(uploadData: iupload){
     

    const listOfUploadedData : Array<iupload> = [uploadData];

    for (let i in listOfUploadedData) {
        console.log(listOfUploadedData[i])
        
        ;
    }

    return (UploadLists) 


/* run for loop conditional statement to print Upload passing the data of Upload at every
        iteration index */
    
}

