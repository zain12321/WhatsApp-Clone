import Head from 'next/head'
import Chat from '../Components/Chat'
import Sidebar from '../Components/Sidebar'

export default function Home() {
  return (
    <div className="bg-mainBg h-screen grid place-items-center">
      <Head>
        <title>whatsapp clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[90vw] h-[90vh] bg-bgApp shadow-mainShadow flex">
        <Sidebar/>
        <Chat />
      </div>
    </div>
  )
}
