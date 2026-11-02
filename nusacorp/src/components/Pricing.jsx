import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
import { pricingData } from '../data'

export default function Pricing() {
  return (
    <section id="pricing" className="block">
      <Container>
        <SectionTitle title="Harga & Paket" subtitle="Pilih paket yang sesuai kebutuhan" />
        <Row className="g-4 justify-content-center">
          {pricingData.map((p) => (
            <Col md={6} lg={4} key={p.plan}>
              <div className={`price-card ${p.featured ? 'featured' : ''}`}>
                {p.featured && <span className="badge-pop">Terpopuler</span>}
                <div className="heading">
                  <h3>{p.plan}</h3>
                  <div className="price">{p.price}</div>
                </div>
                <ListGroup variant="flush">
                  {p.features.map((f) => (
                    <ListGroup.Item key={f}><i className="fa-solid fa-check" /> {f}</ListGroup.Item>
                  ))}
                </ListGroup>
                <div className="p-4 text-center">
                  <a href="#contact" className="btn btn-accent">Pesan Sekarang</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
