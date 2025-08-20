import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import type { Post } from "@/type";

type HomePageProps = {
    searchParams: Promise< { [key: string]: string | undefined }>;
};

export default async function Home({ searchParams }: HomePageProps) {
    const resolvedSearchParams   = await searchParams;

    const query  =  resolvedSearchParams.q


    const posts: Post[] = [
        {
            _id: 12345,
            _createdAt: new Date(),
            views: 55,
            author: { _id: 67890, name: "Sam Paragon" },
            description: "This is a description",
            image: "/image/upload/v1755625986/code-unsplash_u5t665.jpg",
            category: "Robots",
            title: "We Robots",
        },
    ];

    return (
        <>
            <section className="h-[300px] w-auto bg-pink-500 flex p-6 items-center flex-col">
                <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[44px] sm:leading-[54px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
                    Pitch your tent here; Let other developers feel your potentials
                </h1>
                <div className="border-none">
                    <SearchForm query={query} />
                </div>
            </section>

            <section>
                <p>
                    {query ? `Search results for ${query}` : 'All caught up'}
                </p>

                <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
                    {posts?.length > 0 ? (
                        posts.map((post) => (
                            // This is now fully type-safe
                            <StartupCard key={post._id} post={post} />
                        ))
                    ) : (
                        <p>No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}