export default function SectionTitle({ title, subtitle, light }) {
  return (
    <div className={`section-title ${light ? 'light' : ''}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}
