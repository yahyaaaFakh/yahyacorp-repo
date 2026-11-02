import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>&copy; {new Date().getFullYear()} YahyaCorp. Hak cipta dilindungi.</div>
        <div className="socials">
          <a href="https://www.facebook.com" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
          <a href="https://www.x.com" aria-label="X"><i className="fa-brands fa-x-twitter" /></a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
        </div>
      </Container>
    </footer>
  )
}
