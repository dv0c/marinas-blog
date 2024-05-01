import { getArticles } from "@/helpers/fetcher"
import Article from "./Article"

const RecentArticles = async () => {
    const posts = await getArticles()
    
    return <div className="max-w-4xl mx-auto pt-14">
        <h1 className="text-sm md:text-md font-semibold text-muted-foreground">Recent Publications</h1>
        <div className="mt-5 space-y-10 md:space-y-5 ">
            {posts?.map((item, i) => (
                <Article key={i} data={item} />
            ))}
        </div>
    </div>
}

export default RecentArticles