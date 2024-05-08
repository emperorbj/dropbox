"use client"
import { cn } from '@/lib/utils';
import React from 'react';
import Dropzone from 'react-dropzone'

const DropzoneComponent = () => {
    const onDrop = (acceptedFiles: File[]) =>{
        acceptedFiles.forEach((file) =>{
            const reader = new FileReader();

            
        });
    }

    // max file size 20mb 
    const maxSize = 20971520;

    return (
        
<Dropzone minSize={0} maxSize={maxSize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
            isDragActive ? "bg-[#035FFE] text-white animation-pulse" : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
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
