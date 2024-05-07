"use client"
import React from 'react';
import Dropzone from 'react-dropzone'

const DropzoneComponent = () => {

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
        <section>
        <div {...getRootProps()}>
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
