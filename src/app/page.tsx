import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'Nextjs tutorial',
  description: 'making a blog with SSR, SSG, ISR.',
  openGraph:{
    title: 'Nextjs tutorial',
    description: 'making a blog whith SSR, SSG, ISR.',
    url: '<url of the site>',
    siteName: 'SSG blog',
    images: [
      {
        width: '1200',
        height: '675',
        url: '<url of the site>/ogp-home.png'
      }
    ],
    locale: 'jp',
    type: 'website',
  }
}

const Home = () => {
  return (
    <div className="text-[50px]">Nextjs tutorial</div>
  )
}

export default Home