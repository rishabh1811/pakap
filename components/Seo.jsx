import { LocalBusinessJsonLd, NextSeo } from 'next-seo'

export default function Seo(props) {
    

    return (
        <>
{/* google tag manager */}

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NL89B8K"

height={0}
width={0}
  className="hidden invisible"></iframe></noscript>





{/* Basic SEO */}
<NextSeo
      title="No.1 Web Development company | Website Design company Delhi | RG Web"
      description="Create your custom website with best designers. No.1 Website Development Company in Delhi NCR.
      Free consultation. Website @ ₹2499"
      // canonical="https://www.canonical.ie/"
      openGraph={{
        //url: 'https://www.url.ie/a',
        title: `No.1 Web Development company | Website Design company Delhi`,
        description: `Create your custom website with best designers. No.1 Website Development Company in Delhi NCR.
        Free domain and hosting`,
        images: [
          { url: "https://rgweb.in/images/og.png" }
        ],
        site_name: 'Website Design company Delhi | RG Web',
      }}
    />

{/* JSON-LD */}

<LocalBusinessJsonLd
  type="LocalBusiness"
  id="https://rgweb.in"
  name="RGweb Web Development company"
  description="We build beautiful professional websites for you. No.1 Website Development Company in Delhi NCR.
  Free consultation. Call 9971763478"
  url="https://rgweb.in"
  telephone="+919971763478"
  address={{
    streetAddress: 'D71, Shakarpur',
    addressLocality: 'Delhi',
    postalCode: '110051',
    addressCountry: 'IN',
  }}
  geo={{
    latitude: '28.634189',
    longitude: '77.283200',
  }}
  images={[
    'https://rgweb.in/images/poster.png',
    'https://rgweb.in/images/google2.webp',
    'https://rgweb.in/images/google.jpg',
    'https://rgweb.in/images/google3.webp',

  ]}
  priceRange="$"
  openingHours={[
    {
      opens: '08:00',
      closes: '22:00',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      validFrom: '2020-12-23',
      validThrough: '2024-04-02',
    },
    // {
    //   opens: '14:00',
    //   closes: '20:00',
    //   dayOfWeek: 'Sunday',
    //   validFrom: '2019-12-23',
    //   validThrough: '2020-04-02',
    // },
  ]}
  rating={{
    ratingValue: '4.6',
    ratingCount: '481',
  }}
  review={[
    {
      author: 'Saurabh Aggarwal',
      datePublished: '20021-05-04',
      name: 'Really great work',
      reviewBody:
        'They build my website in 2 days. It was good looking and professional',
      reviewRating: {
        bestRating: '5',
        worstRating: '1',
        reviewAspect: 'Ambiance',
        ratingValue: '5',
      },
    },
    {
      author: 'Priya Gupta',
      datePublished: '2022-01-15',
      name: 'great service',
      reviewBody: "I needed a good looking ecommerce website. They did good work",
      reviewRating: {
        ratingValue: '4.5',
      },
    },
  ]}
  makesOffer={[
    {
      itemOffered: {
        name: 'Web Development',
        description:
          'We are the expert of website building.',
      },
    },

    {
        priceSpecification: {
          type: 'UnitPriceSpecification',
          priceCurrency: 'EUR',
          price: '1000-10000',
        },
        itemOffered: {
          name: 'Web Designing',
          description:
            'We create beautiful designs for your website',
        },
      },

    {
      priceSpecification: {
        type: 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '2000-10000',
      },
      itemOffered: {
        name: 'Build ecommerce store',
        description:
          'We help you build an online store. Take your business online with an ecommerce store',
      },
    },
  ]}


  areaServed={[
    {
      geoMidpoint: {
        latitude: '28.634189',
        longitude: '77.283200',
      },
      geoRadius: '1000',
    },
  ]}


  
//   areaServed={[
//     {
//       geoMidpoint: {
//         latitude: '41.108237',
//         longitude: '-80.642982',
//       },
//       geoRadius: '1000',
//     },
//     {
//       geoMidpoint: {
//         latitude: '28.634189',
//         longitude: '-80.642982',
//       },
//       geoRadius: '1000',
//     },
//   ]}

//   action={{
//     actionName: 'potentialAction',
//     actionType: 'ReviewAction',
//     target: 'https://www.example.com/review/this/business',
//   }}


/>




        </>
    )
}
