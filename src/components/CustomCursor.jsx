import { useEffect, useRef } from 'react'

const TRAIL_COUNT = 6
const TRAIL_OPACITIES = [0.6, 0.45, 0.32, 0.2, 0.12, 0.06]
const isTouch = 'ontouchstart' in window

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const trailRefs = useRef([])
  const history = useRef(
    Array.from({ length: TRAIL_COUNT + 1 }, () => ({ x: -100, y: -100 }))
  )

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = e => {
      const { clientX: x, clientY: y } = e

      dot.style.left = `${x}px`
      dot.style.top = `${y}px`
      ring.style.left = `${x}px`
      ring.style.top = `${y}px`

      if (!isTouch) {
        history.current.unshift({ x, y })
        history.current.length = TRAIL_COUNT + 1
        trailRefs.current.forEach((el, i) => {
          if (el && history.current[i + 1]) {
            el.style.left = `${history.current[i + 1].x}px`
            el.style.top = `${history.current[i + 1].y}px`
          }
        })
      }
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
      {!isTouch && TRAIL_OPACITIES.map((opacity, i) => (
        <div
          key={i}
          className="cursor-trail"
          ref={el => { trailRefs.current[i] = el }}
          style={{ '--trail-opacity': opacity }}
        />
      ))}
    </>
  )
}
