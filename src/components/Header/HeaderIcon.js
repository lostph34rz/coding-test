import './HeaderIcon.scss'

function HeaderIcon({ title, icon }) {
  return (
    <a href="/" className="header-icon-container">
      <div className="header-icon">
        {icon}
        <span>{title}</span>
      </div>
    </a>
  )
}

export default HeaderIcon