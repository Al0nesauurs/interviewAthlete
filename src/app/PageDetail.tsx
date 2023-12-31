'use client'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './page.module.css'

import PageDetailMobile from './PageDetailMobile'

export default function PageDetail() {
  const [screenWidth, setScreenWidth] = useState<number>(0)

  const handleResize = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    if (!window) return
    window.addEventListener('resize', handleResize)
    setScreenWidth(window.innerWidth)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isTablet = useMemo(
    () => screenWidth >= 768 && screenWidth <= 1440,
    [screenWidth]
  )

  const isMobile = useMemo(() => screenWidth < 768, [screenWidth])

  if (screenWidth === 0) return <></>

  return isMobile ? (
    <PageDetailMobile />
  ) : (
    <>
      <div className={styles.root}>
        <div>
          {/* TOP Container */}

          <div style={{ position: 'relative' }}>
            <div className={styles.footballer}>
              <div
                className={isTablet ? styles.imageContainerTablet : undefined}
              >
                <Image
                  fill
                  style={{ zIndex: 2, objectFit: 'contain' }}
                  src="/footballerPC.png"
                  alt={'Missing Footballer'}
                />
                <div style={{ position: 'relative', height: '100%' }}>
                  <div
                    style={{
                      display: isTablet ? 'block' : 'none',
                      zIndex: 1,
                      position: 'absolute',
                      top: 0,
                      left: '43%',
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
                      display: isTablet ? 'block' : 'none',
                      zIndex: 1,
                      position: 'absolute',
                      top: '-1%',
                      left: '39%',
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
                      display: isTablet ? 'block' : 'none',
                      zIndex: 1,
                      position: 'absolute',
                      top: '3%',
                      right: '17%',
                    }}
                  >
                    <div className={styles.rectangleBackContainer}>
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
            <div>
              <div className={styles.headContainer}>
                <div className={styles.insideContainer}>
                  <div className={styles.mainHeader}>ATHLETS</div>
                </div>
              </div>
              <div className={styles.whiteContainer}>
                <div className={styles.insideContainer}>
                  <div>
                    <div className={styles.detailContainer}>
                      <div className={styles.countContiner}>
                        <div className={styles.numberHeader}>01</div>
                        <div className={styles.rectangleContainer}>
                          <Image
                            src="/rectangle.svg"
                            width={19}
                            height={5}
                            style={{ objectFit: 'contain' }}
                            alt={'Missing rectangle'}
                          />
                        </div>
                      </div>
                      <div className={styles.detailHeader}>CONNECTION</div>
                    </div>
                    <div className={styles.detailFont}>
                      Connect with coaches directly, you can ping coaches to
                      view profile.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.greyContainer}>
                <div className={styles.insideContainer}>
                  <div>
                    <div className={styles.detailContainer}>
                      <div className={styles.countContiner}>
                        <div className={styles.numberHeader}>02</div>
                        <div className={styles.rectangleContainer}>
                          <Image
                            src="/rectangle.svg"
                            width={19}
                            height={5}
                            style={{ objectFit: 'contain' }}
                            alt={'Missing rectangle'}
                          />
                        </div>
                      </div>
                      <div className={styles.detailHeader}>COLLABORATION</div>
                    </div>
                    <div className={styles.detailFont}>
                      Work with other student athletes to increase visability.
                      When you share and like other players videos it will
                      increase your visability as a player. This is the team
                      work aspect to Surface 1.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.purpleContiner}>
                <div className={styles.insideContainer}>
                  <div>
                    <div className={styles.detailContainer}>
                      <div className={styles.countContiner}>
                        <div className={styles.numberHeader}>03</div>
                        <div className={styles.rectangleContainer}>
                          <Image
                            src="/rectangleWhite.svg"
                            width={19}
                            height={5}
                            style={{ objectFit: 'contain' }}
                            alt={'Missing rectangleWhite'}
                          />
                        </div>
                      </div>
                      <div className={styles.detailHeader}>GROWTH</div>
                    </div>
                    <div className={styles.detailFontWhite}>
                      Resources and tools for you to get better as a student
                      Athelte. Access to training classes, tutor sessions, etc
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div className={styles.basketBaller}>
              <div
                className={
                  isTablet ? styles.imageContainerTabletBas : undefined
                }
              >
                <Image
                  fill
                  style={{ zIndex: 2, objectFit: 'contain' }}
                  src={'/basketball.png'}
                  alt={'Missing basketball'}
                />
                <div>
                  <div
                    style={{
                      zIndex: 1,
                      position: 'absolute',
                      bottom: isTablet ? '85%' : '82%',
                      right: isTablet ? '69%' : '65%',
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
                      bottom: isTablet ? '82%' : '79%',
                      right: isTablet ? '66%' : '64%',
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
                      // for tablet it's unable to see
                      zIndex: 1,
                      position: 'absolute',
                      bottom: '51%',
                      right: '21%',
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
                      bottom: isTablet ? '18%' : '25%',
                      right: isTablet ? '46%' : '53%',
                    }}
                  >
                    <div className={styles.rectangleBackContainer}>
                      <Image
                        fill
                        src="/recBackPurple.svg"
                        style={{ objectFit: 'contain' }}
                        alt={'Missing recBackPurple'}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      zIndex: 1,
                      position: 'absolute',
                      bottom: '49%',
                      right: isTablet ? '23%' : '11%',
                    }}
                  >
                    <div className={styles.rectangleBackContainer}>
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
            {/* BOT Container */}

            <div className={styles.containerBot}>
              <div>
                <div className={styles.headContainerBot}>
                  <div className={styles.insideContainerBot}>
                    <div className={styles.mainHeaderBot}>PLAYERS</div>
                  </div>
                </div>
                <div className={styles.whiteContainerBot}>
                  <div className={styles.insideContainerBot}>
                    <div>
                      <div className={styles.detailContainer}>
                        <div className={styles.countContiner}>
                          <div className={styles.numberHeader}>01</div>
                          <div className={styles.rectangleContainer}>
                            <Image
                              src="/rectangle.svg"
                              width={19}
                              height={5}
                              style={{ objectFit: 'contain' }}
                              alt={'Missing rectangle'}
                            />
                          </div>
                        </div>
                        <div className={styles.detailHeader}>CONNECTION</div>
                      </div>
                      <div className={styles.detailFont}>
                        Connect with talented thlete directly, you can watch
                        their skills through video showreels directly from
                        Surface 1.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.greyContainerBot}>
                  <div className={styles.insideContainerBot}>
                    <div>
                      <div className={styles.detailContainer}>
                        <div className={styles.countContiner}>
                          <div className={styles.numberHeader}>02</div>
                          <div className={styles.rectangleContainer}>
                            <Image
                              src="/rectangle.svg"
                              width={19}
                              height={5}
                              style={{ objectFit: 'contain' }}
                              alt={'Missing rectangle'}
                            />
                          </div>
                        </div>
                        <div className={styles.detailHeader}>COLLABORATION</div>
                      </div>
                      <div className={styles.detailFont}>
                        Work with recruiter to increase your chance of finding
                        talented athlete.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.blueContiner}>
                  <div className={styles.insideContainerBot}>
                    <div>
                      <div className={styles.detailContainer}>
                        <div className={styles.countContiner}>
                          <div className={styles.numberHeaderPurple}>03</div>
                          <div className={styles.rectangleContainer}>
                            <Image
                              src="/rectangleWhite.svg"
                              width={19}
                              height={5}
                              style={{ objectFit: 'contain' }}
                              alt={'Missing rectangleWhite'}
                            />
                          </div>
                        </div>
                        <div className={styles.detailHeader}>GROWTH</div>
                      </div>
                      <div className={styles.detailFontWhite}>
                        Save your time, recruit proper athletes for your team.
                      </div>
                    </div>
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
