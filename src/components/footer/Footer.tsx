import styled from 'styled-components'
import logo from '/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <StyledFooter>
      <div className='container'>
        <main>
          <ul>
            <li>
              <Link href='#'>
                <Image src={logo} alt='Jasurbek Shomaqsudov - Software Engineer logo' width='60' height='60' />
              </Link>
            </li>
            <li>
              <h3>Jasurbek Shomaqsudov</h3>
              <h4>Software Engineer</h4>
            </li>
          </ul>

          <ul>
            <li>
              <Link href='https://github.com/Jasurbek2208' target='_blank' rel='noopener noreferrer'>
                Github
              </Link>
            </li>
            <li>
              <Link href='https://t.me/Joni2208' target='_blank' rel='noopener noreferrer'>
                Telegram
              </Link>
            </li>
            <li>
              <Link href='https://twitter.com/JShomaqsudov' target='_blank' rel='noopener noreferrer'>
                X (Twitter)
              </Link>
            </li>
            <li>
              <Link
                href='https://www.linkedin.com/in/jasurbek-shomaqsudov?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                target='_blank'
                rel='noopener noreferrer'>
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/jasurbek_shomaqsudov?igsh=M2l3b2FpOG42OTRl' target='_blank' rel='noopener noreferrer'>
                Instagram
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 24px 0px;
  background: #141e30;
  background: -webkit-linear-gradient(to right, #243b55, #141e30);
  background: linear-gradient(to right, #243b55, #141e30);

  .container {
    main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: 30px;
      column-gap: 120px;

      ul {
        list-style: none;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 32px;

        &:first-of-type {
          gap: 12px;
          color: #fff;
          align-items: flex-start;

          li {
            a {
              position: relative;
              margin: -6px 0px 0px -6px;
              padding: 6px;
              display: block;
              border: none !important;
              outline: none !important;

              &::before {
                content: '';
                position: absolute;
                inset: 0px;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                border: 3px solid;
                border-color: #fff transparent;
                animation: rotation 2.2s linear infinite;
                -o-animation: rotation 2.2s linear infinite;
                -moz-animation: rotation 2.2s linear infinite;
                -webkit-animation: rotation 2.2s linear infinite;
                transition: 200ms scale ease-in;
                will-change: transform, scale;
              }

              &:hover,
              &:focus {
                &::before {
                  scale: 110%;
                }
              }

              img {
                width: 60px !important;
              }
            }

            h3 {
              margin-top: 8px;
            }

            h4 {
              margin: 2px 0px 0px 8px;
              font-style: italic;
              font-size: 14px;
            }
          }
        }

        li {
          width: max-content;

          a {
            outline: none;
            color: #fff;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: 200ms border ease-in;

            &:hover,
            &:focus {
              border-bottom: 1px solid #fff;
            }
          }
        }
      }

      @media (max-width: 900px) {
        flex-direction: column;

        ul:last-of-type {
          justify-content: center;

          a {
            font-size: 14px;
          }
        }
      }

      @media (max-width: 360px) {
        ul:first-of-type {
          gap: 10px;

          li {
            a {
              img {
                width: 55px !important;
              }
            }

            h3 {
              font-size: 18px;
            }

            h4 {
              font-size: 13px;
            }
          }
        }
      }
    }
  }

  /* Animation for logo border */
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`