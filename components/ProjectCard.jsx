import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useContractWrite } from "wagmi"
import { CONTRACT_ADDRESS } from "@/config/address"
import Abi from "@/config/GasReimbursement.json"
import { utils, ethers } from "ethers"

const ProjectCard = () => {
  const [projectAddress, setProjectAddress] = useState("")
  const [eventName, setEventName] = useState("")
  const [totalReimbursementAmount, setTotalReimbursementAmount] = useState(0)
  const [reimbursementDeadline, setReimbursementDeadline] = useState("")
  const [reimbursementRatio, setReimbursementRatio] = useState("")
  const [reimbursementLimit, setReimbursementLimit] = useState("")

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: Abi,
    functionName: "setParameters",
  })

  console.log(data,'fuck data')

  const handleDeployClick = () => {
    console.log({
      projectAddress,
      eventName,
      totalReimbursementAmount,
      reimbursementDeadline,
      reimbursementRatio,
      reimbursementLimit
    })
    write({
      args: [
        projectAddress,
        eventName,
        totalReimbursementAmount,
        reimbursementDeadline,
        reimbursementRatio,
        reimbursementLimit
      ],
      value: utils.parseEther(totalReimbursementAmount.toString())
    })
  }

  return (
    <div className="w-2/3 bg-white p-8 rounded-3xl shadow-md animate-breatheYellow border-4 border-[#fadfba]">
      <Card className="">
        <CardHeader>
          <CardTitle>Config Reimbursement</CardTitle>
          <CardDescription>
            Deploy your new project reimbursement in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="ProjectAddres">Project Address</Label>
              <Input
                id="ProjectAddres"
                className="p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none"
                placeholder="Enter your project address"
                value={projectAddress}
                onChange={(e) => setProjectAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="eventName">Event Name</Label>
              <Input
                id="eventName"
                className="p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none"
                placeholder="Enter your project event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="totalReimbursementAmount">
                Total Reimbursement Amount
              </Label>
              <div className="flex flex-row gap-2 items-center justify-center">
                <Input
                  id="totalReimbursementAmount"
                  className="p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none"
                  placeholder="Enter your Total Reimbursement Amount"
                  value={totalReimbursementAmount}
                  onChange={(e) => setTotalReimbursementAmount(e.target.value)}
                />
                <Button variant="secondary" className="w-[84px]">
                  ETH
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="reimbursementDeadline">
                reimbursementDeadline
              </Label>
              <div className="flex flex-row gap-2 items-center justify-center">
                <Input
                  id="reimbursementDeadline"
                  className="p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none"
                  placeholder="Enter your Reimbursement Deadline"
                  value={reimbursementDeadline}
                  onChange={(e) => setReimbursementDeadline(e.target.value)}
                />
                <Button variant="secondary" className="w-[84px]">
                  Days
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="reimbursementRatio">ReimbursementRatio</Label>
              <div className="flex flex-row gap-2 items-center justify-center">
                <Input
                  id="reimbursementRatio"
                  className="p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none"
                  placeholder="Enter your Reimbursement Ratio"
                  value={reimbursementRatio}
                  onChange={(e) => setReimbursementRatio(e.target.value)}
                />
                <Button variant="secondary" className="w-[84px]">
                  %
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="reimbursementLimit">reimbursementLimit</Label>
              <div className="flex flex-row gap-2 items-center justify-center">
                <Input
                  id="reimbursementLimit"
                  className="p-4 placeholder:text-[#ed7255] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none"
                  placeholder="Enter your Reimbursement Limit"
                  alue={reimbursementLimit}
                  onChange={(e) => setReimbursementLimit(e.target.value)}
                />
                <Button variant="secondary" className="w-[84px]">
                  Times
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div></div>
          <Button
            variant="outline"
            className="bg-[#fadfba] hover:bg-[#ed7255] text-[#ed7255] hover:text-white transform hover:scale-105 px-8 py-4 rounded-md transition duration-150"
            onClick={handleDeployClick}
          >
            Deploy
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProjectCard
