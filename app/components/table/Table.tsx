"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    } from "@tanstack/react-table"

    import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    } from "@/components/ui/table"
import { TrashIcon } from "lucide-react"
import { FileType } from "@/typings"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/store"
import { ref } from "firebase/storage"
import { storage } from "@/firebase"

    interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[];
    onDelete: (fileId: string) => void;
    }

    export function DataTable<TData, TValue>({
    columns,
    data,
    onDelete,
    }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const [
        setFileId,
        setFilename,
        setIsDeleteModalOpen,

    ] = useAppStore((state) => [
        state.setFileId,
        state.setFilename,
        state.setIsDeleteModalOpen,
    ])

    const openDeleteModal = (fileId: string) => {
        setFileId(fileId);
        setIsDeleteModalOpen(true);
    };

    return (
        <div className="rounded-md border">
        <Table>
            <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                    return (
                    <TableHead key={header.id}>
                        {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                            )}
                    </TableHead>
                    )
                })}
                </TableRow>
            ))}
            </TableHeader>
            <TableBody>
            {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                >
                    {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                    ))}
                {/* functionality for delete */}
                    <TableCell key={(row.original as FileType).id}>
                        <Button
                        variant={"outline"}
                        onClick={()=>{
                            onDelete((row.original as FileType).id)
                        }}>
                            <TrashIcon size={20}/>
                        </Button>
                    </TableCell>
                </TableRow>
                ))
            ) : (
                <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                    No file available here!!!
                </TableCell>
                </TableRow>
            )}
            </TableBody>
        </Table>
        </div>
    )
}
