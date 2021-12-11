import Head from 'next/head'

// // eslint-disable-next-line
// import "swiper/css/bundle";

import Background from "../components/Background/Background"
import Navbar from "../components/Navbar/Navbar"
import Button from "../components/Button/PrimaryButton"
import Audit from "../components/Audit/Audit"
import Container from '../components/Audit/Container'



const DAPP = [
  {
    id: 1,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 3,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 4,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 5,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 6,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 7,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id:8,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
]


export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Demo Frog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
            rel="preload"
            href="/fonts/retro.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>

        <div className="relative lg:w-4/5 py-2 mx-auto">
          <div className="pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            
            <Navbar/>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              
              <section className="flex justify-between border-b pb-12">
                <div className="sm:text-center md:text-left">
                  <h1 className="text-4xl font-retro text-shadow-retro-gray tracking-wide font-extrabold text-gray-primary sm:text-5xl md:text-6xl">
                    <span className="block xl:inline text-shadow-retro-green">Data to enrich your</span>{' '}
                    <span className="block text-green-600 xl:inline">online business</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                    fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start">
                    <div className="retro-btn">
                      <Button>Get Started</Button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 retro-btn">
                      <Button style="text-green-700 bg-green-100 hover:bg-green-200">Live Demo</Button>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-end justify-center">
                    <img src="/crypto.svg" className="object-contain"></img>
                </div>
              </section>

              <section className="mt-6 md:mt-12 p-2 md:p-6 pb-12 overflow-hidden w-screen relative left-1/2 -translate-x-1/2">
                  <Background />
                <div className="relative z-10 mx-auto lg:w-4/5 flex flex-col gap-y-10">
                  <div className="text-center w-full">
                    <h1 className="font-retro text-4xl sm:text-5xl md:text-6xl sm:tracking-wider text-green-700">Recent audits</h1>
                  </div>
                  
                  <div className='px-2'>
                    <Container>
                      {DAPP.map((elem) => (
                          <Audit key={elem.id} imageSrc={elem.imageSrc} imageAlt={elem.imageAlt} title={elem.title} subTitle={elem.subTitle} cta={elem.cta} />
                        ))}
                    </Container>
                  </div>
                </div>
              </section>

              
              <section className='w-screen relative left-1/2 -translate-x-1/2 bg-gray-primary mt-6'>
                    
                <div className='lg:w-4/5 mx-auto py-6'>
                  <div className="mt-12 md:w-4/5 lg:w-1/2 font-retro ">
                    <h2 className='text-green-400 text-base md:text-xl'>Why Frogchain</h2>
                    <h1 className='font-bold tracking-wide text-white sm:text-shadow-retro-green-sm text-3xl md:text-5xl'>An innovative approach to crypto</h1>
                  </div>

                  <div className="flex flex-row justify-items-start mt-12 gap-12 divide-x divide-gray-400 divide-dashed">
                    {[...Array(4)].map((e,i)=>(
                      <div key={i} className="flex flex-col justify-items-start align-middle flex-shrink basis-1/5">
                        <div className="w-12 h-12 mx-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                        </div>
                        <div className='break-words mt-2'>
                          <h1 className="px-2 leading-[1] text-gray-100 font-bold font-retro tracking-wide text-lg border-x-2 border-green-700">Something cool</h1>
                          <p className='px-2 mt-3 text-sm text-gray-300'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                        </div>  
                      </div>
                    ))}
                  </div>


                </div>
              </section>


            </main>

          </div>
        </div>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        
      </footer> */}
    </div>
  )
}
