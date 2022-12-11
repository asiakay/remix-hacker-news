import { Link, useLoaderData } from '@remix-run/react'
//import { getTopStories, getItem } from '~/helper/fetch'
import { getList } from '~/helper/fetch'
import Item from '~/components/Item'

/* export const loader = async () => {
  const topStoryIds = await getTopStories()
  const items = await Promise.all(
    topStoryIds.slice(0, 10).map(async (itemId) => await getItem(itemId))
  )
  return items 
} */



/* export const loader = async () => {
  const topStoryIds = await getTopStories()
  const items = await Promise.all(
    topStoryIds.slice(0, 10).map(async (itemId) => await getItem(itemId))
  )

  return items
} */

export const loader = async () => {
  const res = await getList('topstories')

  return res
}


export default function Index() {
  const items = useLoaderData()

  return (
    <>
    <div className="font-sans leading-5 m-4">
      <header>
      <h1 
      className="text-3xl underline decoration-double text-sky-400">
        <Link to="/">
          Hacker News
          </Link>
      </h1>
      </header>
      <div className='divide-y'>
        {items.length > 0 && 
        items.map((item) => {
          return <Item item={item} key={item.id} />
        })}
      </div>



      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>


    <div className="divide-y"></div>
    </>
  
  );
}
