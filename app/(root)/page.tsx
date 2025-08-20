import SearchForm from "../../components/SearchForm"
import {JSX} from "react";
import StartupCard from "@/components/StartupCard";


export default async function Home(
    { searchParams}: {searchParams: Promise<{query?: string}>}
    ) :Promise<JSX.Element> {
  const query :string | undefined = (await searchParams).query;

  const posts = [{
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Sam Chukwuemeka" },
      description: "This is a description",
      image: "https://res.cloudinary.com/smdsimages/image/upload/v1755625986/code-unsplash_u5t665.jpg",
      category: "Robots",
      title: "We Robots"
  }]
  return (
    <>
    <section className="h-[300px] w-auto bg-pink-500 flex p-6 items-center flex-col">
      <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[44px] sm:leading-[54px] text-[36px] leading-[46px] max-w-5xl text-center my-5">Pitch your tent here; Let other developers feel your potentials</h1>

      <div className="border-none">
        <SearchForm query={query}/>
      </div>
      </section> 
      <section>
        <p>
          {query ? `Search results for ${query}` : 'All caught up'}
        </p>

          <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5;">
              {posts?.length > 0 ? (
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  posts.map((post: any, index: number)  =>  (
                      <StartupCard key={index} post={post} />
                  ))
              ):(
                  <p>No startups found</p>
              )}
          </ul>
      </section>
    </>
      );
}