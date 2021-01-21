import LandingPage, { LandingPageProps } from 'templates/LandingPage'

export default function Index(props: LandingPageProps) {
  return <LandingPage {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      sectionHero: {
        title: 'Welcome to the world of programming',
        description:
          "Have you thought about <strong>improving</strong> your skills in the <strong>hottest</strong> technologies on the market lately? <strong>Join us</strong> and start your first 4 <strong>free lessons.</strong> It's <strong>very easy</strong>, watch the <strong>video</strong> below, see what you think and below you can <strong>click</strong> the button and make the <strong>payment</strong>",
        alternativeTextLogo: 'DevCourse',
        logoUrl: '/img/logo.svg',
        alternativeTextHero: 'Computer Illustration',
        heroUrl: '/img/hero.svg'
      },
      sectionAbout: {
        buttonText: 'Buy now',
        discountPrice: 'R$ 299,90',
        price: 'R$ 699,90',
        subtitle: 'You liked it, do not miss the opportunity buy now!!',
        title: 'About Course',
        urlVideo: 'https://www.youtube.com/embed/tgbNymZ7vqY'
      }
    }
  }
}
