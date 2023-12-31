import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "./Container"

const Footer = () => {
  return (
    <Container className="top-0 z-40 w-full mt-20">
      {/* <div data-donate3-cid="bafkreiejul3v6gpknutxz5bmnhj2ftxexrlozcl67jat632chwanq45lz4" ></div> */}
      <div className="border-b mb-10"></div>
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div>
          <Link href="/" className="flex flex-row gap-2 items-center">
            <Image
              src="/scroll-reimbursement.png"
              alt="Logo"
              width={48}
              height={48}
            />
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fadfba] to-[#ed7255]">
              Gas Reimbursement
            </div>
          </Link>
        </div>
        <div className="flex flex-row gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-2xl">Resource</p>
            <Link href="https://gaslockr.gitbook.io/gaslockr" target="_blank">
              GitBook
            </Link>
            {/* <Link href="/whitePaper" target="_blank">
            WhitePaper
          </Link> */}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl">Contact Us</p>
            <Link href="https://twitter.com/gaslockr" target="_blank">
              Twitter
            </Link>
            <Link href="https://discord.gg/sBAaqfxR" target="_blank">
              Discord
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4 mt-10">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} GasLockR. All rights reserved.
        </p>
      </div>
    </Container>
  )
}

export default Footer
