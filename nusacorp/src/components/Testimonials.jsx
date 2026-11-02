import { Carousel, Container } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
import images from '../images'
import { testimonialsData } from '../data'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="block testimonials"
      style={{ backgroundImage: `url(${images.bgTestimonial})` }}
    >
      <div className="testimonials-overlay" />
      <Container className="position-relative">
        <SectionTitle light title="Kata Klien" subtitle="Apa kata mereka tentang kami" />
        <Carousel controls={false} interval={6000}>
          {testimonialsData.map((t) => (
            <Carousel.Item key={t.name}>
              <blockquote>
                <i className="fa-solid fa-quote-left" />
                <p>{t.text}</p>
                <cite>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </cite>
              </blockquote>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}
