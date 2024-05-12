
"use client"

import { Copy } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    } from "@/components/ui/dialog";
    import { useAppStore } from "@/store";


    export function DeleteModal() {

        const [
            fileId,
            setFileId,
            isDeleteModalOpen,
            setIsDeleteModalOpen] = useAppStore((state) => [
            state.fileId,
            state.setFileId,
            state.isDeleteModalOpen,
            state.setIsDeleteModalOpen,
        ]);

        // async function deleteFile(){
            
        // }

    return (
        <Dialog>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
            <DialogTitle>Are you sure you want to delete this?</DialogTitle>
            <DialogDescription>
                File will be deleted permanently.
            </DialogDescription>
            </DialogHeader>
            <div className="flex space-x-2 py-3">
                <Button size="sm" variant={"ghost"} className="px-3 flex-1" onClick={()=> setIsDeleteModalOpen(false)}>
                    <span className="sr-only">cancel</span>
                    <span>cancel</span>
                </Button>
                <Button type="submit" variant="secondary" size="sm" className="px-3 flex-1" onClick={()=> deleteFile()}>
                    <span className="sr-only">delete</span>
                    <span>delete</span>
                </Button>
            </div>

            <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
                <Button type="button" variant="secondary">
                Close
                </Button>
            </DialogClose>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    )
}
