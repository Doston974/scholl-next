import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'



function FanlarCard(blog: any) {
    return (
        <Link
            href={'/'}
            className={cn(
                'grid gap-4 group',
                blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
            )}
        >
            <div className='relative bg-secondary rounded-md'>
                <Image
                    width={650}
                    height={335}
                    src={blog.image}
                    alt={blog.title}
                    className='px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
                />
            </div>
            <div className='flex flex-col space-y-4'>
                {/* Time info */}


                {/* Title */}
                <h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors'>
                    {blog.title}
                </h2>
                <p className='text-muted-foreground line-clamp-3'>{blog.description}</p>

                {/* Author */}

            </div>
        </Link>
    )
}

export default FanlarCard
