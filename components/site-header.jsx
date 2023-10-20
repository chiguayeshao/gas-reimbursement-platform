import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  DiscordLogoIcon
} from "@radix-ui/react-icons"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import { Container } from "./Container"
import { useRouter } from "next/router"


export function SiteHeader() {
  const { address } = useAccount()
  const router = useRouter()


  return (
    <Container className="top-0 z-40 w-full">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-row justify-between gap-8 items-center text-base font-medium text-muted-foreground">
          <Link href="/" className="flex flex-row gap-2 items-center">
            <Image src="/scroll-reimbursement.png" alt="Logo" width={48} height={48} />
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fadfba] to-[#ed7255]">
              Gas Reimbursement
            </div>
          </Link>
          {/* <Link href="/whitePaper" target="_blank">
            WhitePaper
          </Link> */}
          {/* {address ? <Link href="/ClaimList">Purchase History</Link> : null} */}
        </div>
        <div className="flex flex-row items-center space-x-4 text-muted-foreground">
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open("https://github.com/GasLockR", "_blank")}
          >
            <GitHubLogoIcon className="h-6 w-6" />
          </Button> */}

          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              window.open("https://twitter.com/gaslockr", "_blank")
            }
          >
            <TwitterLogoIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              window.open("https://discord.gg/DUZMwJzfsP", "_blank")
            }
          >
            <DiscordLogoIcon className="h-6 w-6" />
          </Button>
          <Button
            className="bg-[#fadfba] hover:bg-[#ed7255] text-[#ed7255] hover:text-white transform hover:scale-105"
            onClick={() => {
              router.push("/projectAdmin")
            }}
          >
            Project Admin
          </Button>
          <ConnectButton />
        </div>
      </div>
    </Container>
  )
}
