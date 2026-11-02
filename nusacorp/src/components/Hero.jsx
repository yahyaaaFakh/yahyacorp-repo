import { Carousel } from 'react-bootstrap'
import { heroData } from '../data'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Carousel fade interval={5000}>
        {heroData.map((h, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={h.image} alt={h.title} />
            <Carousel.Caption>
              <h1>{h.title}</h1>
              <p>{h.description}</p>
              <a className="btn btn-accent" href={h.link}>
                Selengkapnya <i className="fa-solid fa-chevron-right" />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}
