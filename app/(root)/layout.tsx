import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'
import { Separator } from '@/components/ui/separator'

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			<div className='container'>{children}</div>
		<div className="mt-12">
				<Separator />
			<Footer />
		</div>
		</main>
	)
}

export default Layout
