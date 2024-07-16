import { ThemeProvider } from '@/components/providers/theme-provider'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	title: 'Bilim maskani',
	description:
		"Bizning bilim dargohimizda sizning farzandingiz kelajagi uchun zarur bo'lgan bilimi, ko'nikmali, malakali va albatta jamiyatimiz uchun yetuk shaxs bo'lib yetishib chiqishiga biz kafolot beramiz va bu yo'ldagi har qanday to'siqlarni birgalikda yengib o'tishga yordam beramiz. Biz bilan farzandingiz kelajagini quring.",
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
