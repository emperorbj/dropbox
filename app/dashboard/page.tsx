import React from 'react'
import DropzoneComponent from '../components/DropzoneComponent'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { FileType } from '@/typings'

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

    console.log(skeletonFiles)
    return (
        <div>
        <DropzoneComponent/>
        <section>
            <h2>All files</h2>
        </section>
        </div>
    )
}

export default Dashboard
