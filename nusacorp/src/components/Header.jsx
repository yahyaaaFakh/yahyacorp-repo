import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { navLinks } from '../data'

export default function Header() {
  const [active, setActive] = useState('home')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120
      let current = 'home'
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Navbar expand="lg" sticky="top" className="site-nav" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand href="#home">
          <i className="fa-solid fa-cube me-2" />
          Yahya<span>Corp</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {navLinks.map(({ id, label }) => (
              <Nav.Link key={id} href={`#${id}`} active={active === id} onClick={() => setExpanded(false)}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
