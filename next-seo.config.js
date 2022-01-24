const title = 'Nitin Panwar – Software Engineer'
const description = 'example.'
const url = 'https://nitin.com'

export const configSEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    url: url,
    type: 'website',
    title,
    locale: 'en-CA',
    description,
    images: [
      {
        url: `${url}/images/banner.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
}
