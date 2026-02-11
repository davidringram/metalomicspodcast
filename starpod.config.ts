import { defineStarpodConfig } from 'src/utils/config';

export default defineStarpodConfig({
  blurb:
    'This isn\'t your average podcast. Metalomics is a sonic assault on intellectual laziness.' ,
  description:
    'Metalomics, the podcast where brutal breakdowns meet economic blowouts. Join your hosts, Josh Goddard and David Ingram, as they forge a new sound, one that blends the raw aggression of extreme metal with the complex, unforgiving world of economics.',
  hosts: [
    {
      name: 'Josh Goddard',
      bio: 'Economics nerd and Marxist, but not a communist.', 
      img: 'josh.jpg',
      email: 'mailto:josh@metalomics.com',
      instagram: 'https://www.instagram.com/im_not_the_mess_officer/',
      website: 'https://joshgoddard.dev'
    },
    {
      name: 'David Ingram',
      bio: 'Lover of data, behavioral economics and a good drink.',
      img: 'david.jpg',
      email: 'mailto:davidingram.marketing@gmail.com',
      instagram: 'https://www.instagram.com/davidringram',
      website: 'https://davidingram.us'
    }
  ],
  socials: {
    instagram: 'https://www.instagram.com/metalomics/',
    youtube: 'https://www.youtube.com/'
  },
  platforms: {
    apple:
      'https://podcasts.apple.com/gb/podcast/metalomics/id1838027377',
    appleIdNumber: '1838027377',
    overcast: 'https://overcast.fm/itunes1838027377',
    pocketCasts: 'https://pocketcasts.com/podcast/metalomics/d138fbe0-6ccd-013e-b35e-0ebe3674f0af',
    spotify: 'https://open.spotify.com/show/42LDh0hJwCd1VFWWTSA2Yp',
    youtube: 'https://www.youtube.com/'
  },
  rssFeed: 'https://anchor.fm/s/108e8b5bc/podcast/rss'
});

