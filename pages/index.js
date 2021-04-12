import Head from 'next/head'
import DreamineersLogo from './../public/dreamineers-logo.svg'
import RightArrow from './../public/right-arrow.svg'
import Contentful from './../lib/contentful'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Dreamineers Studio</title>
      </Head>

      <main>
        <div className="flex justify-center items-center bg-black w-full h-screen max-h-49rem">
          <div className="flex flex-col px-10 w-full max-w-7xl">
            <DreamineersLogo className="w-full md:px-10"/>
            <div className="w-full my-5 flex justify-between">
              <p className="text-white font-sync font-bold text-sm md:text-2xl uppercase w-1/2 pr-10">
                {
                  props.globalContent.descriptionOnHero
                }
              </p>
              <ul className="text-white text-right font-sync font-bold text-sm md:text-2xl uppercase w-1/2 pl-10">
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
        <div id="about" className="w-full mx-auto max-w-7xl px-6 my-10">
          <h2 className="uppercase font-sync font-bold text-3xl py-3">
            About
          </h2>
          <p className="text-gray-700 font-sync font-bold text-xl md:text-2xl uppercase md:w-3/4 pr-10">
            { props.globalContent.aboutDescription }
          </p>
        </div>
        <div id="work" className="w-full mx-auto max-w-7xl px-6 my-10">
          <h2 class="uppercase font-sync font-bold text-3xl py-3">
            Work
          </h2>
          <ul className="pb-5 space-y-6">
            {
              props.workContent.items.map((item) => {
                return (
                  <li key={item.sys.id} className="w-full flex flex-col md:flex-row mb-14">
                    <div className="w-full md:w-1/2">
                      <p className="sticky top-0 flex justify-between items-center font-sync text-xl md:text-xl text-gray-600 pb-6 md:pb-0 py-3 font-bold md:pr-5">
                        {item.fields.title}
                        {
                          item.fields.link ?
                          <a target="_blank" rel="noopener noreferrer" href={item.fields.link}>
                            <RightArrow className="fill-current text-gray-800 w-10 md:mr-4"/>
                          </a>
                          :
                          ''
                        }
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="aspect-w-1 aspect-h-1 w-full">
                        <img src={item.fields.image.fields.file.url} className="object-cover w-full shadow-2xl"/>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  // get generic data from globals content
  // get all work content entities
  const contentfulClient = Contentful(); 
  const [globalsEntry, workEntries] = await Promise.all([
    contentfulClient.getEntries({
      content_type: 'globals',
    }),
    contentfulClient.getEntries({
      content_type: 'work',
    })
  ]);
  return {
    props: {
      globalContent: globalsEntry.items[0].fields,
      workContent: workEntries,
    }
  }
}
