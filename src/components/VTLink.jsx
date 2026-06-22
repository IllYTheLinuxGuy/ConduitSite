import { useNavigate } from 'react-router-dom'
import { flushSync } from 'react-dom'

export default function VTLink({ to, children, className }) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => navigate(to))
      })
    } else {
      navigate(to)
    }
  }

  return <a href={to} onClick={handleClick} className={className}>{children}</a>
}
