import React from 'react';
import { Helmet } from 'react-helmet';
import { PHONE, IMG } from '@/lib/site';

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Happy Rolls',
  servesCuisine: 'Desserts, Rolled Ice Cream, Waffles',
  image: IMG.hero,
  telephone: PHONE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1195 Wellington St. W',
    addressLocality: 'Ottawa',
    addressRegion: 'ON',
    postalCode: 'K1Y 2Z6',
    addressCountry: 'CA',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '440' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'], opens: '14:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday'], opens: '14:00', closes: '22:00' },
  ],
};

export default function Seo({ title, description, image = IMG.hero }) {
  const fullTitle = title || 'Happy Rolls | Rolled Ice Cream, Banana Pudding and Desserts in Ottawa';
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
    </Helmet>
  );
}
