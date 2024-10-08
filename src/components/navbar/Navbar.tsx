'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

// Components
import { Button, OrderModal } from 'components'

export default function Navbar(): JSX.Element {
  const params: URLSearchParams = new URLSearchParams(typeof window !== 'undefined' ? window?.location?.search : '')

  const [navItems, setNavItems] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const [renderCount, setRenderCount] = useState<number>(0)

  const scrollToAnchor: (id: string) => void = (id: string) => {
    const element: HTMLElement | null = document?.getElementById(id)

    if (element) element?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen((p: boolean) => !p)
  }

  useEffect(() => {
    setRenderCount((p: number) => ++p)
  }, [menuOpen])

  useEffect(() => {
    if (renderCount > 2) menuOpen ? setNavItems(false) : setNavItems(true)
  }, [renderCount])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const addScript: HTMLScriptElement = document?.createElement('script')
        addScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        document?.body?.appendChild(addScript)
        ;(window as any).googleTranslateElementInit = () => {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,ru,uz,ar,kk,tr,uk,de,ky,ps',
              layout: (window as any)?.google?.translate?.TranslateElement?.InlineLayout?.SIMPLE,
            },
            'google_translate_element',
          )
        }
      }, 600)
    }
  }, [])

  useEffect(() => {
    if (JSON?.parse(params?.get('sendOrder') || 'false')) {
      setIsModalOpen(true)
    }
  }, [params?.get('sendOrder')])

  return (
    <StyledNavbar>
      <div className={'menubar-modal' + (menuOpen ? ' open' : ' close')}></div>

      <div className='container'>
        <div className={'nav' + (menuOpen ? ' open' : navItems ? ' close' : '')}>
          <ul>
            <li>
              <Link href='#hero' onClick={() => scrollToAnchor('hero')}>
                Home
              </Link>
            </li>
            <li>
              <Link href='#about' onClick={() => scrollToAnchor('about')}>
                About Me
              </Link>
            </li>
            <li>
              <Link href='#works' onClick={() => scrollToAnchor('works')}>
                Works
              </Link>
            </li>
            <li>
              <Link href='#contact' onClick={() => scrollToAnchor('contact')}>
                Contact
              </Link>
            </li>
            <li>
              <div id='google_translate_element'></div>
            </li>
          </ul>
        </div>
        <div className={'mobile-menu' + (menuOpen ? ' On' : '')} onClick={() => setMenuOpen((p) => !p)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='action'>
          <Button content='Send Order' animatedBtn={true} onClick={() => setIsModalOpen(true)} />
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          typeof window !== 'undefined' && window?.history?.replaceState({}, '', '/')
        }}
      />
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  padding: 10px 0px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  color: #fff;
  font-weight: 600;

  background: #141e30;
  background: -webkit-linear-gradient(to right, #243b55, #141e30);
  background: linear-gradient(to right, #243b55, #141e30);

  animation: fadeInNavbar 400ms ease-in-out;
  will-change: margin-top, opacity;
  z-index: 3;

  & > .container {
    display: flex;
    justify-content: space-between;

    .nav {
      margin-top: 14px;

      ul {
        display: flex;
        align-items: flex-start;
        gap: 40px;
        list-style: none;

        li {
          cursor: pointer;

          a {
            padding: 0px 0px 10px;
            text-decoration: none;
            color: inherit;

            border-bottom: 3px solid transparent;

            transition: 600ms all;

            &:hover,
            &:focus {
              outline: none;
              padding: 0px 0px 3px;

              border-bottom: 3px solid #fff;
            }
          }
        }
      }
    }

    .action {
      width: 110px;
    }

    .mobile-menu {
      display: none;
    }
  }

  @media (max-width: 695px) {
    padding: 10px 0px;

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;

    color: #fff;
    font-weight: 600;

    animation: fadeInNavbar 400ms ease-in-out;
    -o-animation: fadeInNavbar 400ms ease-in-out;
    -moz-animation: fadeInNavbar 400ms ease-in-out;
    -webkit-animation: fadeInNavbar 400ms ease-in-out;
    will-change: margin-top, opacity;

    & > .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 100;

      .nav {
        position: absolute;
        top: 0;
        left: 0;

        margin: 0px;

        width: 100%;
        height: 100vh;

        ul {
          padding: 10px 16px;
          height: 100vh;

          flex-direction: column;
          justify-content: center;
          align-items: center;

          font-size: 1.5rem;

          li {
            a {
              &:hover,
              &:focus {
                padding: 0px 0px 10px;

                border-bottom: 3px solid #fff;
              }
            }
          }
        }

        display: none;

        &.open {
          display: block;

          animation: animatedOpenMenu 1400ms ease-in-out;
          -o-animation: animatedOpenMenu 1400ms ease-in-out;
          -moz-animation: animatedOpenMenu 1400ms ease-in-out;
          -webkit-animation: animatedOpenMenu 1400ms ease-in-out;
          will-change: opacity;
        }

        &.close {
          display: block;
          animation: animatedCloseMenuItems 200ms ease-in-out forwards;
          -o-animation: animatedCloseMenuItems 200ms ease-in-out forwards;
          -moz-animation: animatedCloseMenuItems 200ms ease-in-out forwards;
          -webkit-animation: animatedCloseMenuItems 200ms ease-in-out forwards;
          will-change: left, transform, scale, opacity, display;
        }
      }

      .mobile-menu {
        cursor: pointer;
        display: block;
        position: relative;

        width: 35px;
        height: 24px;

        span {
          position: absolute;
          width: 100%;
          border: 2px solid rgba(226, 226, 226, 0.555);
          transition: 0.6s;

          &:nth-of-type(1) {
            left: 0px;
          }

          &:nth-of-type(2) {
            top: 10px;
          }

          &:nth-of-type(3) {
            top: 20px;
            right: 0px;
          }

          &:nth-of-type(4) {
            top: -200px;
            left: -120px;

            width: 35px;
            transform: rotate(50deg);
            transition: 0.3s ease-in;
          }
        }

        &.On {
          span:nth-of-type(1) {
            left: -60px;
          }

          span:nth-of-type(2) {
            transform: rotate(-50deg);
          }

          span:nth-of-type(3) {
            right: -200vw;
          }

          span:nth-of-type(4) {
            top: 10px;
            left: 0px;
          }
        }
      }
    }

    .menubar-modal {
      content: '';
      position: fixed;
      top: 0;
      left: 0;

      &.open {
        width: 100%;
        height: 100vh;
        background: #141e30;
        background: -webkit-linear-gradient(to right, #243b55, #141e30);
        background: linear-gradient(to right, #243b55, #141e30);

        animation: animatedOpenMenu 1000ms ease-in-out;
        -o-animation: animatedOpenMenu 1000ms ease-in-out;
        -moz-animation: animatedOpenMenu 1000ms ease-in-out;
        -webkit-animation: animatedOpenMenu 1000ms ease-in-out;
        will-change: opacity;
      }

      &.close {
        animation: animatedCloseMenu 1000ms ease-in-out forwards;
        -o-animation: animatedCloseMenu 1000ms ease-in-out forwards;
        -moz-animation: animatedCloseMenu 1000ms ease-in-out forwards;
        -webkit-animation: animatedCloseMenu 1000ms ease-in-out forwards;
        will-change: width, height, background, opacity, display;
      }
    }
  }

  /* ANIMATIONS */
  @keyframes fadeInNavbar {
    from {
      margin-top: -50px;
      opacity: 0;
    }

    to {
      margin-top: 0px;
      opacity: 1;
    }
  }

  @keyframes animatedOpenMenu {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes animatedCloseMenu {
    from {
      width: 100vw;
      height: 100vh;
      background: #141e30;
      background: -webkit-linear-gradient(to right, #243b55, #141e30);
      background: linear-gradient(to right, #243b55, #141e30);
      opacity: 1;
    }

    to {
      opacity: 0;
      display: none;
    }
  }

  @keyframes animatedCloseMenuItems {
    0% {
      opacity: 1;
    }

    99% {
      left: 0px;
      transform: scale(10);
      opacity: 0;
      display: none;
    }

    100% {
      left: -1000px;
      transform: scale(0);
      opacity: 0;
      display: none;
    }
  }
`