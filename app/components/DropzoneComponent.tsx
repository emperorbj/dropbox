"use client"
import { cn } from '@/lib/utils';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { db, storage } from '@/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const DropzoneComponent = () => {

    const [loading, setLoading] = useState(false);

    const onDrop = (acceptedFiles: File[]) =>{
        acceptedFiles.forEach((file) =>{
            const reader = new FileReader();

            reader.onabort = () => console.log("file reading was aborted");
            reader.onerror = () => console.log("file reading was failed");
            reader.onload = async () => {
                await upLoadPost(file);
            };
            reader.readAsArrayBuffer(file);
        });
    }

    const upLoadPost = async (selectedFile: File) => {
        if (loading) return;

        setLoading(true);

        // addDoc => users/user123/files
        // Add file metadata to Firestore
        const docRef = await addDoc(collection(db, "files"),{
            filename: selectedFile.name,
            type: selectedFile.type,
            size: selectedFile.size,
            timestamp: serverTimestamp(),
        });

        // Upload file to Storage
        const fileRef = ref(storage, `files/${docRef.id}` );

        uploadBytes(fileRef, selectedFile).then(async (snapshot) =>{
             // Get download URL for the uploaded file
            const downLoadURL = await getDownloadURL(fileRef);

            // Update Firestore document with download URL
            await updateDoc(doc(db, "files", docRef.id),{
                downLoadURL: downLoadURL,
            });
        })
        // do what needs to be done...

        setLoading(false)
    }

    // max file size 20mb 
    const maxSize = 20971520;

    return (
        
        //minSize={0} maxSize={maxSize} onDrop={acceptedFiles => console.log(acceptedFiles)}
<Dropzone minSize={0} maxSize={maxSize} onDrop={onDrop}>
    {({getRootProps, getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        fileRejections,
    }) => {
        const isFileTooLarge = 
        fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
        <section className='m-4'>
        <div {...getRootProps()}
        className={cn(
            "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center",
            isDragActive ? "bg-purple-300 text-white animation-pulse" : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
        )}>
            <input {...getInputProps()} />
            {!isDragActive && "click here or drop a file to upload"}
            {isDragActive && !isDragReject && "Drop to upload this file"}
            {isDragReject && "file type not accepted, sorry fo this!"}
            {isFileTooLarge && (
                <div className='text-danger mt-2'> File too large</div>
            )}
        </div>
        </section>
        
    )}}
</Dropzone>
    )
}

export default DropzoneComponent
