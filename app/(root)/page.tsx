import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import {STARTUPS_QUERY} from "@/sanity/lib/Queries"
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({searchParams, }:{
    searchParams: Promise<{ query?: string }>
}) {

    const query  =  (await searchParams).query;
    const params = { search: query || null}
    const { data: posts } = await sanityFetch({query: STARTUPS_QUERY, params})

    return (
        <>
            <section className="h-[300px] w-auto bg-pink-500 flex p-6 items-center flex-col">
                <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[44px] sm:leading-[54px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
                    Pitch your tent here; Let other developers feel your potentials. S
                </h1>
                <div className="border-none">
                    <SearchForm query={query} />
                </div>
            </section>

            <section>
                <p className="mt-2">
                    {query ? `Search results for ${query}` : 'All caught up'}
                </p>

                <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupCardType) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p>No startups found</p>
                    )}
                </ul>
            </section>

            <SanityLive />
        </>
    );
}