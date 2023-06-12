import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="title">
      <h1>Cash Flow</h1>
      <div className="row">
        <Link href="/cashtransaction">
          <div className="left">
            <Image src="/Transaction.png" alt="Snow" width={100} height={100} />
            <p style={{ paddingTop: "10px" }}>Cash Transaction</p>
          </div>
        </Link>
        <Link href="/vault">
          <div className="right">
            <Image src="/Vault.png" alt="Snow" width={100} height={100} />
            <p style={{ paddingTop: "10px" }}>Vault Status</p>
          </div>
        </Link>
      </div>
    </div>
    // <div className="full">
    //   <iframe
    //     className="frame"
    //     src="https://app.powerbi.com/reportEmbed?reportId=152a650f-ae45-4366-8ae5-4b3b767c1498&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
    //   ></iframe>
    // </div>
  )
}
