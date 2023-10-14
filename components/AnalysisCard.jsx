import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const AnalysisCard = () => {
    return (
        <div className="w-2/3 bg-white p-8 rounded-3xl shadow-md animate-breatheYellow border-4 border-[#fadfba]">
            <div className='flex flex-col gap-8 items-center'>
                <h1 className="text-2xl text-[#fadfba] font-bold">How much can you reimbursement from dapp?</h1>
                <div>
                    <input
                        className="w-[500px] p-4 placeholder:text-[#fadfba] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none"
                        type="text"
                        placeholder='Please Enter Your ENS Name Or Ethereum Address'
                    />
                </div>
                <div> 
                    <Button variant="outline" className="w-[500px] bg-[#fadfba] hover:bg-[#ed7255] text-[#ed7255] hover:text-white px-8 py-4 rounded-md transition duration-150">Check Your Reimbursement</Button>
                </div>
            </div>
        </div>
    )
}

export default AnalysisCard