import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ProjectCard = () => {
    return (
        <div className="w-2/3 bg-white p-8 rounded-3xl shadow-md animate-breatheYellow border-4 border-[#fadfba]">
            <Card className="">
                <CardHeader>
                    <CardTitle>Config Reimbursement</CardTitle>
                    <CardDescription>Deploy your new project reimbursement in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="ProjectAddres">Project Address</Label>
                            <Input id="ProjectAddres" className='p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none' placeholder="Enter your project address" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="eventName">Event Name</Label>
                            <Input id="eventName" className='p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none' placeholder="Enter your project event name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="totalReimbursementAmount">Total Reimbursement Amount</Label>
                            <Input id="totalReimbursementAmount" className='p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none' placeholder="Enter your Total Reimbursement Amount" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="reimbursementDeadline">reimbursementDeadline</Label>
                            <Input id="reimbursementDeadline" className='p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none' placeholder="Enter your Reimbursement Deadline" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="reimbursementRatio">ReimbursementRatio</Label>
                            <Input id="reimbursementRatio" className='p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none' placeholder="Enter your Reimbursement Ratio" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="reimbursementLimit">reimbursementLimit</Label>
                            <Input id="reimbursementLimit" className='p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none' placeholder="Enter your Reimbursement Limit" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div></div>
                    <Button variant="outline" className='bg-[#fadfba] hover:bg-[#ed7255] text-[#ed7255] hover:text-white transform hover:scale-105 px-8 py-4 rounded-md transition duration-150'>Deploy</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProjectCard