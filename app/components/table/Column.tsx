"use client"
import prettyBytes from 'pretty-bytes';
import { FileType } from "@/typings"
import { ColumnDef } from "@tanstack/react-table"
import { FileIcon, defaultStyles } from 'react-file-icon';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<FileType>[] = [

    {
        accessorKey: "type",
        header: "type",
        cell:({ renderValue,...props}) =>{
            const type = renderValue() as string;
            const extension: string = type.split("/")[1];
        return (
            <div className='w-10'>
                <FileIcon 
                extension={extension}
                labelColor={COLOR_EXTENSION_MAP[extension]}
                {...defaultStyles[extension]}
                />
            </div>
        )
        }
    }
    {
        accessorKey: "filename",
        header: "filename",
    },
    {
        accessorKey: "timestamp",
        header: "Date Added",
    },
    {
        accessorKey: "size",
        header: "Size",
        cell:({ renderValue, ...props}) =>{
        return <span>{prettyBytes(renderValue() as number)}</span>
        }
    },
    {
        accessorKey: "downLoadURL",
        header: "Link",
        cell:({ renderValue,...props}) =>{
        return <a href={renderValue() as string} target="_blank" rel="noreferrer" className='underline text-blue-500 hover:text-blue-700'>Download</a>
        }
    }
]
