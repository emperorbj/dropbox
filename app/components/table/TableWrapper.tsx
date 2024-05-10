import { Button } from '@/components/ui/button'
import { FileType } from '@/typings'
import React from 'react'

const TableWrapper = ({skeletonFiles}: {skeletonFiles:FileType}) => {
    return (
        <div>
        <Button>Sort by...</Button>
        </div>
    )
}

export default TableWrapper
