import { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="block">
      <Container>
        <SectionTitle title="Hubungi Kami" subtitle="Mari terhubung dengan kami" />
        <Row className="g-4">
          <Col lg={7}>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Row className="g-3">
                <Col md={4}><Form.Control type="text" placeholder="Nama lengkap" required /></Col>
                <Col md={4}><Form.Control type="email" placeholder="Alamat email" required /></Col>
                <Col md={4}><Form.Control type="tel" placeholder="Nomor telepon" required /></Col>
                <Col xs={12}><Form.Control as="textarea" rows={6} placeholder="Tulis pesan Anda" required /></Col>
              </Row>
              <Button type="submit" className="btn-accent mt-3">Kirim Pesan</Button>
              {sent && <Alert variant="success" className="mt-3 mb-0">Terima kasih! Pesan Anda sudah terkirim.</Alert>}
            </Form>
          </Col>
          <Col lg={5}>
            <ul className="contact-info">
              <li><i className="fa-solid fa-envelope" /> hello@yahyacorp.id</li>
              <li><i className="fa-solid fa-phone" /> +62 31 0000 0000</li>
              <li><i className="fa-solid fa-location-dot" /> Surabaya, Jawa Timur, Indonesia</li>
            </ul>
            <div className="map">
              <iframe title="Peta lokasi" loading="lazy" src="https://www.google.com/maps?q=Surabaya&output=embed" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
