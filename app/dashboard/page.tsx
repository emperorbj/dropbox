import React from 'react'
import DropzoneComponent from '../components/DropzoneComponent'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'

const Dashboard = async () => {

    const docsResults = await getDocs(collection(db, "files"))
    return (
        <div>
        <DropzoneComponent/>
        </div>
    )
}

export default Dashboard
