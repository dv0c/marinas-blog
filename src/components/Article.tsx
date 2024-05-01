import { FC } from 'react'
import { Article as ArticleType } from '../../types'
import { formatDate } from '@/helpers/date'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleProps {
    data: ArticleType
}

const Article: FC<ArticleProps> = ({ data }) => {
    return <article>
        <Link className='flex group items-center justify-between' href={'/' + data.slug}>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-3'>
                    <span className='text-sm text-muted-foreground font-semibold'>{formatDate(data.createdAt)}</span>
                    <span>-</span>
                    <span className='text-muted-foreground text-sm font-semibold'>#minimalistic</span>
                </div>
                <div className='space-y-3'>
                    <h1 className='font-semibold text-md md:text-xl max-w-xl group-hover:underline'>{data.title}</h1>
                    {data.title.length <= 57 && (
                        <p className='text-sm text-muted-foreground max-w-lg'>{data.description}</p>
                    )}
                </div>
            </div>
            <div className='hidden sm:block'>
                <Image className='object-cover rounded-xl w-[200px] h-[140px] border' src={data.thumbnail || "/placeholder.png"} width={200} height={200} alt={data.title} />
            </div>
        </Link>
    </article>
}

export default Article