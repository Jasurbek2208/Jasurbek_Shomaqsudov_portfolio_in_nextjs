'use client'

import { useEffect } from 'react'
import styled from 'styled-components'
import { Toaster } from 'react-hot-toast'

// Helpers
import { handleKeyDown } from 'helpers'

// Components
import { Contact, Hero, Navbar, Works, About, Footer, MatrixLoader } from 'components'

export default function Home() {
  // Disabling dev elements
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window?.addEventListener('keydown', handleKeyDown)
      window?.addEventListener('contextmenu', (e) => e?.preventDefault())

      return () => {
        window?.removeEventListener('keydown', handleKeyDown)
        window?.removeEventListener('contextmenu', (e) => e?.preventDefault())
      }
    }
  }, [])

  return (
    <StyledApp>
      <Navbar />
      <Hero />
      <About />
      {/* <Works /> */}
      <Contact />
      <Footer />
      <Toaster />
      <MatrixLoader />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  background: #141e30c0 !important;
  background: -webkit-linear-gradient(to right, #243b55ab, #141e30ab) !important;
  background: linear-gradient(to right, #243b55ab, #141e30ab) !important;

  &::-webkit-scrollbar {
    display: none;
  }
`