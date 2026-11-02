import { Col, Container, Image, ProgressBar, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
import images from '../images'
import { skills } from '../data'

export default function About() {
  return (
    <section id="about" className="block">
      <Container>
        <SectionTitle title="Tentang Kami" subtitle="Kenali lebih dekat siapa kami" />
        <Row className="align-items-center g-5">
          <Col md={6}>
            <Image src={images.about} className="about-img" fluid />
          </Col>
          <Col md={6}>
            <p>
              YahyaCorp adalah studio digital yang berfokus pada pembuatan website dan identitas brand untuk
              bisnis yang ingin tumbuh. Kami menggabungkan desain yang rapi dengan teknologi modern.
            </p>
            <p>
              Dengan pengalaman bertahun-tahun, kami percaya setiap proyek layak mendapat perhatian penuh,
              mulai dari riset, desain, hingga peluncuran dan perawatan.
            </p>
            {skills.map((s) => (
              <div className="skill" key={s.label}>
                <h4>{s.label}</h4>
                <ProgressBar now={s.value} label={`${s.value}%`} />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
