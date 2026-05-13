import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = e => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
      ring.style.left = `${e.clientX}px`
      ring.style.top = `${e.clientY}px`
    }

    const onEnter = () => ring.classList.add('expanded')
    const onLeave = () => ring.classList.remove('expanded')

    window.addEventListener('mousemove', onMove)

    const els = document.querySelectorAll('a, button, [role="button"]')
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      els.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
