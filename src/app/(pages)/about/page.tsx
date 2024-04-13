
import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'about',
  description: 'about this site',
  openGraph:{
    title: 'about',
    description: 'about this site',
    url: '<url of the site>',
    siteName: 'about blog',
    locale: 'jp',
    type: 'article',
  }
}

const AboutPage = () => {
    return (
        <div className="text-[50px]">About</div>
    )
}

export default AboutPage