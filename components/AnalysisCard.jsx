import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAccount } from 'wagmi';
import { ConnectButton } from "@rainbow-me/rainbowkit"

const AnalysisCard = () => {
    const [showAnalysis, setShowAnalysis] = useState(false);

    const { isDisconnected } = useAccount()

    return (
        <div className="w-2/3 bg-white p-8 rounded-3xl shadow-md animate-breatheYellow border-4 border-[#fadfba]">
            <div className='flex flex-col gap-8 items-center'>
                <h1 className="text-2xl font-bold">How much can you reimbursement from dapp?</h1>
                <div>
                    <Input
                        className="w-[500px] p-4 placeholder:text-[#fadfba] rounded-md border border-gray-600 focus:border-yellow-400 focus:outline-none"
                        type="text"
                        placeholder='Please Enter Your ENS Name Or Ethereum Address'
                    />
                </div>
                <div>
                    <Button variant="outline" className="w-[500px] bg-[#fadfba] hover:bg-[#ed7255] text-[#ed7255] hover:text-white transform hover:scale-105 px-8 py-4 rounded-md transition duration-150" onClick={() => setShowAnalysis(!showAnalysis)}>Check Your Reimbursement</Button>
                </div>
                <div>
                    {showAnalysis &&
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='flex flex-row gap-2'>Wow! 🎉🎉🎉 you can be reimbursed <div className='text-[#ed7255]'>{0.3}</div> ETH.</div>
                            <div>Click here to cliam 👇</div>
                            <div>
                                {isDisconnected ? <ConnectButton /> : <Button variant="outline" className="w-[200px] bg-[#fadfba] hover:bg-[#ed7255] text-[#ed7255] hover:text-white transform hover:scale-105 px-8 py-4 rounded-md transition duration-150">Claim</Button>}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AnalysisCard