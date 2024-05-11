"use client"

import { Button } from '@/components/ui/button'
import { FileType } from '@/typings'
import React, { useEffect, useState } from 'react';
import { DataTable } from "./Table";
import { columns } from "./Column";
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';

const TableWrapper = ({skeletonFiles}: {skeletonFiles:FileType}) => {

    const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
    const [sort, setSort] = useState<"asc" | "desc">("desc");

    const [docs, loading, error] = useCollection(
            query(
                collection(db, "files"),
                // implementing the sort functionality
                orderBy("timestamp", sort)
            )
    );

    useEffect(()=>{
        if(!docs) return;
        const files: FileType[] = docs.docs.map((doc) => ({
            id:doc.id,
            filename: doc.data().filename || doc.id,
            timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
            downloadURL:doc.data().downLoadURL,
            type: doc.data().type,
            size: doc.data().size,
        }))

        setInitialFiles(files)
    },[docs])


    return (
        <div>
            <Button className='bg-blue-600 text-white text-md hover:bg-blue-400' 
            onClick={() => {
                // implementing the sort functionality
                setSort( sort === "desc" ? "asc" : "desc")
            }}>Sort by {sort === "desc" ? "Newest" : "Oldest"}</Button>
            <DataTable columns={columns} data={skeletonFiles} />
        </div>
    )
}

export default TableWrapper
