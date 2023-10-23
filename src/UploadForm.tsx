import React, { ChangeEvent } from "react";
import DropDown from "./components/dropdown";
import LangProficiencyDropdown from "./components/LangProficiencyDropdown";
import LangDropdown from "./components/LangDropdown";
import TextInput from "./components/TextInput";
import TextTitle from "./components/TextTitle";
import { useState } from "react";

interface iData {
  description: string;
  fileType: any;
  fileTitle: string;
  proficiency: string;
  language: string;
  audioFile: any;
  textFile: any;
  imageFile: any;
}


export default function UploadForm() {
  const [] = useState<iData>({
    description: "",
    fileType: null,
    fileTitle: "",
    proficiency: "",
    language: "",
    audioFile: null,
    textFile: null,
    imageFile: null,
  });
  
  const [data, setData] = useState<any>({});

  const handleAudioFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    setData({
      ...data,
      audioFile: files,
    });
  };
  const handleTextFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    setData({
      ...data,
      textFile: files,
    });
  };
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    setData({
      ...data,
      imageFile: files,
    });
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleAllUpload = () => {
    if (!data.description) {
      alert("Add a description");
      return;
    }
    if (!data.fileType) {
      alert("Add a Filetype");
      return;
    }
    //This uploads the audio to a storage
    console.log({ data });

    let dataArray = []
    dataArray.push(data)

    console.log(dataArray[0])
    
  };

  return (
    <div>
      <h2> Upload Form</h2>
      <form>
        <DropDown name= "dropdown" fileType={data.fileType} handleChange={handleChange} />
        <TextInput description={data.description} handleChange={handleChange} />
        <TextTitle fileTitle={data.fileTitle} handleChange={handleChange} />
        <LangProficiencyDropdown
          proficiency={data.proficiency}
          handleChange={handleChange}
        />
        <LangDropdown language={data.language} handleChange={handleChange} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input type="file" accept="audio/*" onChange={handleAudioFileChange} />
        <input type="file" accept="text/*" onChange={handleTextFileChange} />
        
        <div className=" button"
         onClick={handleAllUpload}>Upload</div>
       
      </form>

    </div>
  );
}
