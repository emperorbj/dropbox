import React from 'react'
import DropzoneComponent from '../components/DropzoneComponent'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { FileType } from '@/typings'
import TableWrapper from '../components/table/TableWrapper'

const Dashboard = async () => {

    const docsResults = await getDocs(collection(db, "files"))
    const skeletonFiles: FileType[] = docsResults.docs.map(doc =>({
        id:doc.id,
        filename: doc.data().filename || doc.id,
        timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
        downloadURL:doc.data().downLoadURL,
        type: doc.data().type,
        size: doc.data().size,
    }))

    // console.log(skeletonFiles)
    return (
        <div className='border-t'>
        <DropzoneComponent/>
        <section className='container space-y-5'>
            <h2 className='font-bold'>All files</h2>
            <div>
                {/* Table wrapper */}
                <TableWrapper skeletonFiles={skeletonFiles}/>
            </div>
        </section>
        </div>
    )
}

export default Dashboard
