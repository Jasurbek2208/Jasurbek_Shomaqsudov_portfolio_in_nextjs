import { useEffect, useState } from 'react'
import styled from 'styled-components'

// Firebase
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

// Types
import { IWorks } from 'types'

export default function Works() {
  const [data, setData] = useState<IWorks[] | null>(null)

  // Get Clients data
  async function getWorks() {
    let list: any = []

    try {
      const querySnapshot = await getDocs(collection(db, 'works'))
      querySnapshot?.forEach((doc: any) => {
        list?.push(doc?.data())
      })

      setData(list)
    } catch {}
  }

  // Get Works data when it comes into view
  useEffect(() => {
    if (!data || data?.length === 0) getWorks()
  }, [])

  return (
    <StyledWorks id='works'>
      <div className='container'>
        <main>
          <h2>Works</h2>

          {data && data?.length > 0 && (
            <div className='clients_slider'>
              {data?.map((item: IWorks) => (
                <div className='client-slider' tabIndex={-1} key={item?.id}>
                  <a href={item?.link} target='_blank' rel='noopener noreferrer'>
                    <div style={{ background: `url(${item?.image})` }}></div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </StyledWorks>
  )
}

const StyledWorks = styled.section`
  .container > main {
    padding: 80px 0px;
    color: #fff;

    h2 {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`