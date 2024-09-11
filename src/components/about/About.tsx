import { useEffect, useState } from 'react'
import styled from 'styled-components'

// Firebase
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

// Components
import { Button } from 'components'

// Types
import { IClient } from 'types'
import Image from 'next/image'

// About Me text
const shortText: string = `I was born in 2004 in Tashkent, Uzbekistan. I got into programming through my own interests. I enjoy working on more logically complex and interesting projects. My current goal is to
create a large open source project in the future. My formative training at Registan IT encompassed both Foundation and Frontend Development courses, each playing a pivotal role in
shaping my skills. Through the Foundation course, I acquired a robust comprehension of fundamental principles, particularly in C++ and logic. This knowledge serves as a sturdy scaffold
for my endeavors in frontend development, empowering me to craft intuitive and dynamic user interfaces. While my formal education provided a strong foundation, my journey into backend
development took a more self-directed path. Through independent study and real-world projects, I honed my skills in backend development. Immersing myself in practical experiences, I
gained valuable insights into the intricacies of backend systems, particularly in the context of internet-based applications. As I traverse my programming odyssey, I remain committed
to honing my craft and embracing challenges that foster growth. With each project undertaken, I inch closer to realizing my vision of making meaningful contributions to the global
programming community.`

export default function About() {
  const [clients, setClients] = useState<IClient[] | null>(null)
  const [skills, setSkills] = useState<IClient[] | null>(null)

  const [expanded, setExpanded] = useState<boolean>(false)
  const [displayText, setDisplayText] = useState<string>(shortText.substring(0, 550) + '...')

  const toggleExpand = () => {
    setExpanded(!expanded)
    setDisplayText(expanded ? shortText?.substring(0, 550) + '...' : shortText)
  }

  // Get Skills data
  async function getSkills() {
    let list: any = []

    try {
      const querySnapshot = await getDocs(collection(db, 'skills'))
      querySnapshot?.forEach((doc: any) => {
        list?.push(doc?.data())
      })

      setSkills(list)
    } catch {}
  }

  // Get Clients data
  async function getClients() {
    let list: any = []

    try {
      const querySnapshot = await getDocs(collection(db, 'clients'))
      querySnapshot?.forEach((doc: any) => {
        list?.push(doc?.data())
      })

      setClients(list)
    } catch {}
  }

  // Get Skills data when it comes into view
  useEffect(() => {
    if (!skills || skills?.length === 0) getSkills()
  }, [])

  // Get Clients data when it comes into view
  useEffect(() => {
    if (!clients || clients?.length === 0) getClients()
  }, [])

  return (
    <StyledAbout id='about'>
      <div className='container'>
        <main>
          {/* About block */}
          <div className='about'>
            <h2>About Me</h2>
            <p></p>
            <p>{displayText}</p>
            <Button content={expanded ? 'Show Less' : 'Learn More'} classname='not-full' onClick={toggleExpand} />
          </div>

          {/* Skills block */}
          <div className='skills'>
            <h2>Skills</h2>

            {skills && skills?.length > 0 && (
              <div className='clients_slider'>
                <div className='clients__wrapper'>
                  {skills?.map((skill: IClient) => (
                    <div className='client-slider' tabIndex={-1} key={skill?.id}>
                      <Image src={skill?.image} alt={skill?.title} width={60} height={60} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Clients block */}
          <div className='clients'>
            <h2>Happy Clients</h2>

            {clients && clients?.length > 0 && (
              <div className='clients_slider'>
                <div className='clients__wrapper'>
                  {clients
                    ?.sort((a: IClient, b: IClient) => a?.sortId - b?.sortId)
                    ?.map((client: IClient) => (
                      <div className='client-slider' tabIndex={-1} key={client?.id}>
                        <a href={client?.link} target='_blank' rel='noopener noreferrer'>
                          <Image src={client?.image} alt={client?.title} width={150} height={85} />
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  scroll-snap-align: center;

  .container > main {
    padding: 80px 0px;
    color: #fff;

    .about {
      text-align: center;
      margin-bottom: 24px;

      p {
        margin-top: 30px;
        font-size: 1rem;
        line-height: 2;
      }
    }

    .skills {
      margin-top: 160px;

      h2 {
        text-align: center;
        margin-bottom: 30px;
      }

      ul {
        margin-top: 30px;
        list-style: none;

        li {
          font-size: 0.9rem;
          margin-bottom: 8px;

          &:before {
            content: '•';
            margin-right: 10px;
            color: #fff;
          }
        }
      }
    }

    .clients {
      margin-top: 160px;

      h2 {
        text-align: center;
        margin-bottom: 30px;
      }
    }

    .skills,
    .clients {
      .clients_slider {
        height: max-content !important;
        max-width: 100dvw;
        overflow-x: auto;

        &::-webkit-scrollbar {
          scale: 0;
          width: 0px;
          height: 0px;
          opacity: 0px;
        }

        .clients__wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: max-content;

          .client-slider {
            display: flex;
            padding: 0 28px !important;
            width: max-content !important;
            height: max-content !important;

            a {
              outline: none;

              img {
                width: auto;
                height: auto;
                padding-bottom: 20px;
                border-bottom: 2px solid transparent;
                transition: 300ms ease-in-out border;
              }

              &:hover img,
              &:focus img {
                border-color: #fff;
              }
            }
          }
        }
      }
    }
  }
`