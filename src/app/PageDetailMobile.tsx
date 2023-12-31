'use client'
import Image from 'next/image'
import React, { useMemo, useState, useEffect } from 'react'
import styles from './page.module.css'

export default function PageDetail() {
  const [page, setPage] = useState(0)
  const [pageBot, setPageBot] = useState(0)

  const [pageTmp, setPageTmp] = useState(0)
  const [pageBotTmp, setPageBotTmp] = useState(0)

  useEffect(() => {
    function checkDirection(
      isTop: boolean,
      touchendX: number,
      touchstartX: number
    ): void {
      if (isTop) {
        if (touchendX < touchstartX) {
          if (pageTmp === 2) {
            setPage(() => 0)
          } else {
            setPage(() => pageTmp + 1)
          }
        }
        if (touchendX > touchstartX) {
          if (pageTmp === 0) {
            setPage(() => 2)
          } else {
            setPage(() => pageTmp - 1)
          }
        }
      } else {
        if (touchendX < touchstartX) {
          if (pageBotTmp === 2) {
            setPageBot(() => 0)
          } else {
            setPageBot(() => pageBotTmp + 1)
          }
        }
        if (touchendX > touchstartX) {
          if (pageBotTmp === 0) {
            setPageBot(() => 2)
          } else {
            setPageBot(() => pageBotTmp - 1)
          }
        }
      }
    }
    let touchstartX = 0
    let touchendX = 0

    document
      ?.getElementById('renderTop')
      ?.addEventListener('touchstart', (e) => {
        touchstartX = e.changedTouches[0].screenX
      })

    document?.getElementById('renderTop')?.addEventListener('touchend', (e) => {
      touchendX = e.changedTouches[0].screenX
      checkDirection(true, touchendX, touchstartX)
    })

    document
      ?.getElementById('renderBot')
      ?.addEventListener('touchstart', (e) => {
        touchstartX = e.changedTouches[0].screenX
      })

    document?.getElementById('renderBot')?.addEventListener('touchend', (e) => {
      touchendX = e.changedTouches[0].screenX
      checkDirection(false, touchendX, touchstartX)
    })
  }, [pageTmp, pageBotTmp])

  useEffect(() => {
    // prevent infinite
    if (pageTmp === page && pageBotTmp === pageBot) return
    setPageTmp(page)
    setPageBotTmp(pageBot)
  }, [page, pageBot, pageBotTmp, pageTmp])

  const renderPage = useMemo(() => {
    switch (page) {
      case 0:
        return (
          <div className={styles.mobileGreyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>01</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/rectangle.svg"
                      width={19}
                      height={5}
                      style={{ objectFit: 'contain' }}
                      alt={'Missing Rectangle'}
                    />
                  </div>
                </div>
                <div className={styles.mobileDetailHeader}>CONNECTION</div>
              </div>
              <div className={styles.mobileDetailFont}>
                Connect with coaches directly, you can ping coaches to view
                profile.
              </div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className={styles.mobileGreyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>02</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/rectangle.svg"
                      width={19}
                      height={5}
                      style={{ objectFit: 'contain' }}
                      alt={'Missing Rectangle'}
                    />
                  </div>
                </div>
                <div className={styles.mobileDetailHeader}>COLLABORATION</div>
              </div>
              <div className={styles.mobileDetailFont}>
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className={styles.mobileGreyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>03</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/rectangle.svg"
                      width={19}
                      height={5}
                      style={{ objectFit: 'contain' }}
                      alt={'Missing Rectangle'}
                    />
                  </div>
                </div>
                <div className={styles.mobileDetailHeader}>GROWTH</div>
              </div>
              <div className={styles.mobileDetailFont}>
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc
              </div>
            </div>
          </div>
        )
    }
  }, [page])

  const renderPageBot = useMemo(() => {
    switch (pageBot) {
      case 0:
        return (
          <div className={styles.mobileGreyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>01</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/rectangle.svg"
                      width={19}
                      height={5}
                      style={{ objectFit: 'contain' }}
                      alt={'Missing Rectangle'}
                    />
                  </div>
                </div>
                <div className={styles.mobileDetailHeader}>CONNECTION</div>
              </div>
              <div className={styles.mobileDetailFont}>
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className={styles.mobileGreyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>02</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/rectangle.svg"
                      width={19}
                      height={5}
                      style={{ objectFit: 'contain' }}
                      alt={'Missing Rectangle'}
                    />
                  </div>
                </div>
                <div className={styles.mobileDetailHeader}>COLLABORATION</div>
              </div>
              <div className={styles.mobileDetailFont}>
                Work with recruiter to increase your chances of finding talented
                athlete.
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className={styles.mobileGreyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>03</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/rectangle.svg"
                      width={19}
                      height={5}
                      style={{ objectFit: 'contain' }}
                      alt={'Missing Rectangle'}
                    />
                  </div>
                </div>
                <div className={styles.mobileDetailHeader}>GROWTH</div>
              </div>
              <div className={styles.mobileDetailFont}>
                Save your time, recruit proper athlets for your team.
              </div>
            </div>
          </div>
        )
    }
  }, [pageBot])

  return (
    <>
      <div className={styles.mobile}>
        <div>
          <div className={styles.mobileMainHeader}>ATHLETS</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.mobileFootballer}>
              <Image
                fill
                style={{ zIndex: 2, objectFit: 'contain' }}
                src="/footballerPC.png"
                alt={'Missing footballerPC'}
              />
              <div
                style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '8%',
                    left: '26%',
                  }}
                >
                  <div className={styles.plusContainer}>
                    <Image
                      fill
                      src="/plusPurple.svg"
                      style={{ objectFit: 'contain' }}
                      alt={'Missing plusPurple'}
                    />
                  </div>
                </div>
                <div
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '5%',
                    left: '20%',
                  }}
                >
                  <div className={styles.plusContainer}>
                    <Image
                      fill
                      src="/plusLight.svg"
                      style={{ objectFit: 'contain' }}
                      alt={'Missing plusLight'}
                    />
                  </div>
                </div>
                <div
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '6%',
                  }}
                >
                  <div className={styles.rectangleBackMobileContainer}>
                    <Image
                      fill
                      src="/recBackPurple.svg"
                      style={{ objectFit: 'contain' }}
                      alt={'Missing recBackPurple'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="renderTop" style={{ position: 'relative' }}>
            {renderPage}
            <div className={styles.dotContainer}>
              <div className={styles.dot}>
                <div
                  style={{
                    borderRadius: '50%',
                    background: page === 0 ? '#5e3db3' : '#C2C2C2',
                    width: '10px',
                    height: '10px',
                  }}
                  onClick={() => {
                    setPage(0)
                  }}
                />

                <div
                  style={{
                    borderRadius: '50%',
                    background: page === 1 ? '#5e3db3' : '#C2C2C2',
                    width: '10px',
                    height: '10px',
                  }}
                  onClick={() => {
                    setPage(1)
                  }}
                />
                <div
                  style={{
                    borderRadius: '50%',
                    background: page === 2 ? '#5e3db3' : '#C2C2C2',
                    width: '10px',
                    height: '10px',
                  }}
                  onClick={() => {
                    setPage(2)
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ position: 'relative' }}>
            <div>
              <div className={styles.mobileMainHeader}>PLAYERS</div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={styles.mobileFootballer}>
                  <Image
                    fill
                    style={{ zIndex: 2, objectFit: 'contain' }}
                    src="/basketball.png"
                    alt={'Missing Footballer'}
                  />
                  <div
                    style={{
                      position: 'relative',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        zIndex: 1,
                        position: 'absolute',
                        top: '8%',
                        left: '26%',
                      }}
                    >
                      <div className={styles.plusContainer}>
                        <Image
                          fill
                          src="/plusPurple.svg"
                          style={{ objectFit: 'contain' }}
                          alt={'Missing Footballer'}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        zIndex: 1,
                        position: 'absolute',
                        top: '5%',
                        left: '20%',
                      }}
                    >
                      <div className={styles.plusContainer}>
                        <Image
                          fill
                          src="/plusLight.svg"
                          style={{ objectFit: 'contain' }}
                          alt={'Missing Footballer'}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        zIndex: 1,
                        position: 'absolute',
                        top: '55%',
                        right: '8%',
                      }}
                    >
                      <div className={styles.plusContainer}>
                        <Image
                          fill
                          src="/plusPurple.svg"
                          style={{ objectFit: 'contain' }}
                          alt={'Missing Footballer'}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        zIndex: 1,
                        position: 'absolute',
                        top: '48%',
                        left: '14%',
                      }}
                    >
                      <div className={styles.rectangleBackMobile2Container}>
                        <Image
                          fill
                          src="/recBackPurple.svg"
                          style={{ objectFit: 'contain' }}
                          alt={'Missing Footballer'}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        zIndex: 1,
                        position: 'absolute',
                        top: '11%',
                        right: '10%',
                      }}
                    >
                      <div className={styles.rectangleBackMobile3Container}>
                        <Image
                          fill
                          src="/recBackPurple.svg"
                          style={{ objectFit: 'contain' }}
                          alt={'Missing Footballer'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="renderBot" style={{ position: 'relative' }}>
                {renderPageBot}
                <div className={styles.dotContainer}>
                  <div className={styles.dot}>
                    <div
                      style={{
                        borderRadius: '50%',
                        background: pageBot === 0 ? '#5e3db3' : '#C2C2C2',
                        width: '10px',
                        height: '10px',
                      }}
                      onClick={() => {
                        setPageBot(0)
                      }}
                    />

                    <div
                      style={{
                        borderRadius: '50%',
                        background: pageBot === 1 ? '#5e3db3' : '#C2C2C2',
                        width: '10px',
                        height: '10px',
                      }}
                      onClick={() => {
                        setPageBot(1)
                      }}
                    />
                    <div
                      style={{
                        borderRadius: '50%',
                        background: pageBot === 2 ? '#5e3db3' : '#C2C2C2',
                        width: '10px',
                        height: '10px',
                      }}
                      onClick={() => {
                        setPageBot(2)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
