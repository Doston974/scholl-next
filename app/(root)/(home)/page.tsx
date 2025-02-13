import BlogCard from '@/components/cards/blog'
import Direktor from '@/components/direktor/Direktor'
import Profile from '@/components/profile/Profile'
import BgArrow from '@/components/shared/bg-arrow'
import { blogs } from '@/constants'

function HomePage() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[60vh] flex items-center justify-center'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-creteRound text-center max-w-2xl'>
					Bizning bilim dargohimizga
					Xush kelibsiz!
				</h1>
				<BgArrow />
			</div>

			
			<Direktor />

			<h2 className='text-center text-4xl section-title font-creteRound'>
				<span>Maktab profili</span>
			</h2>
			<Profile/>




			<h2 className='text-center text-4xl section-title font-creteRound'>
				<span>Yangiliklar</span>
			</h2>
			<div className='flex flex-col space-y-24 mt-24'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} />
				))}
			</div>
		</div>
	)
}

export default HomePage
