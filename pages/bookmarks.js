import { useState } from 'react';
import fs from 'fs';
import path from 'path';

const Search = () => (
  <>
    <div className="flex flex-col space-y-2 sm:hidden">
      <div className="bg-white rounded-lg flex items-center p-2 shadow-sm border border-gray-200">
        <svg className="w-8 mr-auto stroke-current text-gray-300" viewBox="0 0 20 20"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" fillRule="evenodd"></path></svg>
        <input placeholder="search for bookmarks" className="w-full pl-4 text-xl outline-none focus:outline-none bg-transparent" />
      </div>
      <button className="flex items-center mt-auto text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded">
        Search
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    <div className="bg-white hidden sm:flex rounded-lg items-center p-2 shadow-sm border border-gray-200">
      <svg fill="currentColor" className="w-8 mr-auto stroke-current text-gray-300" viewBox="0 0 20 20"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" fillRule="evenodd"></path></svg>
      <input placeholder="search for bookmarks" className="w-full pl-4 text-xl outline-none focus:outline-none bg-transparent text-gray-700" />
      <button className="inline-flex items-center mt-auto text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded shadow-2xl">
        Search
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </>
)

const FilterChip = ({ text, color, active, onClick }) => {
  const chipColors = {
    green: {
      base: 'bg-green-500',
      hover: 'bg-green-600'
    },
    orange: {
      base: 'bg-orange-500',
      hover: 'bg-orange-600'
    },
    blue: {
      base: 'bg-blue-500',
      hover: 'bg-blue-600'
    }
  }

  return (
    <button onClick={onClick} className={`${active ? chipColors[color].base : 'bg-gray-900'} flex items-center px-2 py-1 rounded-full text-white focus:outline-none hover:${active ? chipColors[color].hover : 'bg-gray-900'} space-x-2 mb-2 mr-4`}>
      {active ? <svg className="w-4 fill-current text-white" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" fillRule="evenodd"></path>
      </svg> :
        <svg className="w-4 fill-current text-white" viewBox="0 0 20 20">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>}
      <span>{text}</span>
    </button>
  )
}

const Bookmark = ({ category, title, date, description, author, href }) => {
  return (
    <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="tracking-widest font-medium title-font text-gray-900">{category}</span>
        <a href="https://twitter.com/richbuggy" className="tracking-widest font-medium title-font text-indigo-500">{author}</a>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
        <p className="leading-relaxed">{description}</p>
        <a href={href} className="text-indigo-500 inline-flex items-center mt-4">Learn More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

const bookmarkDirectory = path.join(process.cwd(), '_bookmarks');

export async function getStaticProps(context) {
  return {
    props: {
      bookmarks: JSON.parse(fs.readFileSync(path.join(bookmarkDirectory, 'bookmarks.json')))
    }
  }
}


export default function Bookmarks({ bookmarks }) {
  const [topics, setTopics] = useState([
    { text: 'Serverless', color: 'green', active: true },
    { text: 'DynamoDB', color: 'blue', active: true },
    { text: 'Soft Skills', color: 'orange', active: true }
  ]);
  console.log(bookmarks)
  return (
    <div className="flex w-screen justify-center p-8">
      <div className="max-w-xs sm:max-w-2xl space-y-6 p-2 container">
        <h1 className="text-4xl font-black tracking-wider uppercase text-gray-900">Bookmarks</h1>
        <p className="text-gray-700">A collection things I think are useful from around the web</p>
        <Search />
        <section className="flex flex-wrap">
          {topics.map(({ text, color, active }, index) => <FilterChip
            text={text}
            color={color}
            active={active}
            onClick={() => setTopics(topics.map((topic, i) => index === i ? ({ ...topic, active: !topic.active }) : topic))}
          />)}
        </section>
        <section className="text-gray-700 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8">
              {bookmarks.map(bm => (
                <Bookmark category={bm.category} title={bm.title} date={bm.date} description={bm.description} author={bm.author} href={bm.href} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
