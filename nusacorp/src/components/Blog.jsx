import { Card, Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
import { blogData } from '../data'

export default function Blog() {
  return (
    <section id="blog" className="block bg-soft">
      <Container>
        <SectionTitle title="Blog Terbaru" subtitle="Berita dan artikel dari kami" />
        <Row className="g-4">
          {blogData.map((b) => (
            <Col md={6} lg={4} key={b.title}>
              <Card className="blog-card h-100">
                <Card.Img variant="top" src={b.image} alt={b.title} />
                <Card.Body>
                  <time><i className="fa-regular fa-calendar me-1" /> {b.date}</time>
                  <Card.Title>{b.title}</Card.Title>
                  <Card.Text>{b.description}</Card.Text>
                  <a href="#blog" className="btn btn-accent btn-sm">
                    Baca Selengkapnya <i className="fa-solid fa-chevron-right" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
