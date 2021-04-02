import Head from 'next/head'
import DreamineersLogo from './../public/dreamineers-logo.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dreamineers Studio</title>
      </Head>

      <main>
        <div className="flex justify-center items-center bg-black w-full h-screen max-h-49rem">
          <div className="flex flex-col px-10 w-full max-w-7xl">
            <DreamineersLogo className="w-full px-10"/>
            <div className="w-full my-5 flex justify-between">
              <p className="text-white font-sync font-bold md:text-2xl uppercase w-1/2 pr-10">
                We are a small independent web technology studio.
              </p>
              <ul className="text-white text-right font-sync font-bold md:text-2xl uppercase w-1/2 pl-10">
                <li>
                  <a href="#work" className="hover:text-gray-500 transition transition-all">
                    view our work
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-500 transition transition-all">
                    about
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
