import { useEffect, useRef, useState } from 'react'

const options = {
  root: null, // Cuando el 10% del último elemento es visible, carga más contenido
  rootMargin: '0px',
  threshold: 0.5
}

const useIntersection = ({ handleShow } = {}) => {
  const [show, setShow] = useState(false)
  const elementRef = useRef(null)
  // Configuración del Intersection Observer

  useEffect(() => {
    const handleObserver = (entries, observer) => {
      // const { target } = entries[0]
      const entry = entries[0]
      if (entry.isIntersecting) {
        // console.log('visible')
        // handleShow()
        // target.style.backgroundColor = 'lightgreen'
        setShow(true)
        // observer.unobserve(target)
      } else {
        // console.log('no visible')
        // target.style.backgroundColor = 'lightblue'
        setShow(false)
      }
    }

    const observer = new window.IntersectionObserver(handleObserver, options)
    observer.observe(elementRef.current)
  }, [handleShow])

  return { show, elementRef }
}

export default useIntersection
