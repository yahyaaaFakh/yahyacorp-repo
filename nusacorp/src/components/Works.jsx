import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
import { worksData } from '../data'

const categories = ['Semua', ...new Set(worksData.map((w) => w.category))]

export default function Works() {
  const [filter, setFilter] = useState('Semua')
  const items = worksData.filter((w) => filter === 'Semua' || w.category === filter)

  return (
    <section id="works" className="block">
      <Container>
        <SectionTitle title="Portofolio" subtitle="Karya-karya terbaik kami" />
        <div className="filters">
          {categories.map((c) => (
            <button key={c} className={c === filter ? 'active' : ''} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>
        <Row className="g-4">
          {items.map((w, i) => (
            <Col sm={6} lg={4} key={`${w.title}-${i}`}>
              <a href="#works" className="work-card">
                <img src={w.image} alt={w.title} />
                <div className="label">
                  <h3>{w.title}</h3>
                  <p>{w.category}</p>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
