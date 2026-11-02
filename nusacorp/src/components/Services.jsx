import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
import { servicesData } from '../data'

export default function Services() {
  return (
    <section id="services" className="block bg-soft">
      <Container>
        <SectionTitle title="Layanan Kami" subtitle="Apa yang bisa kami lakukan untuk Anda" />
        <Row className="g-4">
          {servicesData.map((s) => (
            <Col md={6} lg={4} key={s.title}>
              <div className="service-card">
                <div className="icon"><i className={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
