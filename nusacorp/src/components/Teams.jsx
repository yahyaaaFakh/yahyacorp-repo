import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
import { teamsData } from '../data'

export default function Teams() {
  return (
    <section id="teams" className="block bg-soft">
      <Container>
        <SectionTitle title="Tim Kami" subtitle="Orang-orang hebat di balik layar" />
        <Row className="g-4">
          {teamsData.map((t) => (
            <Col sm={6} lg={3} key={t.name}>
              <div className="team-card">
                <div className="photo">
                  <img src={t.image} alt={t.name} />
                  <div className="overlay">
                    <a href="https://www.facebook.com" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                    <a href="https://www.x.com" aria-label="X"><i className="fa-brands fa-x-twitter" /></a>
                    <a href="https://www.linkedin.com" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="info">
                  <h3>{t.name}</h3>
                  <span>{t.role}</span>
                  <p>{t.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
