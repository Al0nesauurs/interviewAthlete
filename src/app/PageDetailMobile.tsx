"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useMemo, useState } from "react";
import PlusPurple from "../../public/plusPurple.svg";
import PlusLight from "../../public/plusLight.svg";
import RecBackPurple from "../../public/recBackPurple.svg";

export default function PageDetail() {
  const [page, setPage] = useState(0);
  const [pageBot, setPageBot] = useState(0);

  const renderPage = useMemo(() => {
    switch (page) {
      case 0:
        return (
          <div className={styles.greyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>01</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/Rectangle.svg"
                      width={19}
                      height={5}
                      objectFit="contain"
                      alt={"Missing Footballer"}
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
        );
      case 1:
        return (
          <div className={styles.greyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>02</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/Rectangle.svg"
                      width={19}
                      height={5}
                      objectFit="contain"
                      alt={"Missing Footballer"}
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
        );
      case 2:
        return (
          <div className={styles.greyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>03</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/Rectangle.svg"
                      width={19}
                      height={5}
                      objectFit="contain"
                      alt={"Missing Footballer"}
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
        );
    }
  }, [page]);

  const renderPageBot = useMemo(() => {
    switch (pageBot) {
      case 0:
        return (
          <div className={styles.greyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>01</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/Rectangle.svg"
                      width={19}
                      height={5}
                      objectFit="contain"
                      alt={"Missing Footballer"}
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
        );
      case 1:
        return (
          <div className={styles.greyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeader}>02</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/Rectangle.svg"
                      width={19}
                      height={5}
                      objectFit="contain"
                      alt={"Missing Footballer"}
                    />
                  </div>
                </div>
                <div className={styles.mobileDetailHeader}>COLLABORATION</div>
              </div>
              <div className={styles.mobileDetailFont}>
                Work with recruiter to increase your chance of finding talented
                athlete.
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.greyContainer}>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileDetailContainer}>
                <div className={styles.mobileCountContiner}>
                  <div className={styles.mobileNumberHeaderPurple}>03</div>
                  <div className={styles.mobileRectangleContainer}>
                    <Image
                      src="/Rectangle.svg"
                      width={19}
                      height={5}
                      objectFit="contain"
                      alt={"Missing Footballer"}
                    />
                  </div>
                </div>
                <div className={styles.mobileDetailHeader}>GROWTH</div>
              </div>
              <div className={styles.mobileDetailFont}>
                Save your time, recruit proper athletes for your team.
              </div>
            </div>
          </div>
        );
    }
  }, [pageBot]);

  return (
    <>
      <div className={styles.mobile}>
        <div>
          <div className={styles.mainHeader}>ATHLETS</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.mobileFootballer}>
              <Image
                style={{ zIndex: 2 }}
                src="/footballerPC.png"
                layout="fill"
                objectFit="contain"
                alt={"Missing Footballer"}
              />
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    zIndex: 1,
                    position: "absolute",
                    top: "8%",
                    left: "26%",
                  }}
                >
                  <div className={styles.plusContainer}>
                    <Image
                      src={PlusPurple}
                      layout="fill"
                      objectFit="contain"
                      alt={"Missing Footballer"}
                    />
                  </div>
                </div>
                <div
                  style={{
                    zIndex: 1,
                    position: "absolute",
                    top: "5%",
                    left: "20%",
                  }}
                >
                  <div className={styles.plusContainer}>
                    <Image
                      src={PlusLight}
                      layout="fill"
                      objectFit="contain"
                      alt={"Missing Footballer"}
                    />
                  </div>
                </div>
                <div
                  style={{
                    zIndex: 1,
                    position: "absolute",
                    top: "6%",
                  }}
                >
                  <div className={styles.rectangleBackMobileContainer}>
                    <Image
                      src={RecBackPurple}
                      layout="fill"
                      objectFit="contain"
                      alt={"Missing Footballer"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            {renderPage}
            <div className={styles.dotContainer}>
              <div className={styles.dot}>
                <div
                  style={{
                    borderRadius: "50%",
                    background: page === 0 ? "#5e3db3" : "#C2C2C2",
                    width: "10px",
                    height: "10px",
                  }}
                  onClick={() => {
                    setPage(0);
                  }}
                />

                <div
                  style={{
                    borderRadius: "50%",
                    background: page === 1 ? "#5e3db3" : "#C2C2C2",
                    width: "10px",
                    height: "10px",
                  }}
                  onClick={() => {
                    setPage(1);
                  }}
                />
                <div
                  style={{
                    borderRadius: "50%",
                    background: page === 2 ? "#5e3db3" : "#C2C2C2",
                    width: "10px",
                    height: "10px",
                  }}
                  onClick={() => {
                    setPage(2);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ position: "relative", paddingTop: "2rem" }}>
            <div>
              <div className={styles.mainHeader}>PLAYERS</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.mobileFootballer}>
                  <Image
                    style={{ zIndex: 2 }}
                    src="/basketball.png"
                    layout="fill"
                    objectFit="contain"
                    alt={"Missing Footballer"}
                  />
                  <div
                    style={{
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        zIndex: 1,
                        position: "absolute",
                        top: "8%",
                        left: "26%",
                      }}
                    >
                      <div className={styles.plusContainer}>
                        <Image
                          src={PlusPurple}
                          layout="fill"
                          objectFit="contain"
                          alt={"Missing Footballer"}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        zIndex: 1,
                        position: "absolute",
                        top: "5%",
                        left: "20%",
                      }}
                    >
                      <div className={styles.plusContainer}>
                        <Image
                          src={PlusLight}
                          layout="fill"
                          objectFit="contain"
                          alt={"Missing Footballer"}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        zIndex: 1,
                        position: "absolute",
                        top: "55%",
                        right: "8%",
                      }}
                    >
                      <div className={styles.plusContainer}>
                        <Image
                          src={PlusPurple}
                          layout="fill"
                          objectFit="contain"
                          alt={"Missing Footballer"}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        zIndex: 1,
                        position: "absolute",
                        top: "48%",
                        left:'14%'
                      }}
                    >
                      <div className={styles.rectangleBackMobile2Container}>
                        <Image
                          src={RecBackPurple}
                          layout="fill"
                          objectFit="contain"
                          alt={"Missing Footballer"}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        zIndex: 1,
                        position: "absolute",
                        top: "11%",
                        right:'10%'
                      }}
                    >
                      <div className={styles.rectangleBackMobile3Container}>
                        <Image
                          src={RecBackPurple}
                          layout="fill"
                          objectFit="contain"
                          alt={"Missing Footballer"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ position: "relative" }}>
                {renderPageBot}
                <div className={styles.dotContainer}>
                  <div className={styles.dot}>
                    <div
                      style={{
                        borderRadius: "50%",
                        background: pageBot === 0 ? "#5e3db3" : "#C2C2C2",
                        width: "10px",
                        height: "10px",
                      }}
                      onClick={() => {
                        setPageBot(0);
                      }}
                    />

                    <div
                      style={{
                        borderRadius: "50%",
                        background: pageBot === 1 ? "#5e3db3" : "#C2C2C2",
                        width: "10px",
                        height: "10px",
                      }}
                      onClick={() => {
                        setPageBot(1);
                      }}
                    />
                    <div
                      style={{
                        borderRadius: "50%",
                        background: pageBot === 2 ? "#5e3db3" : "#C2C2C2",
                        width: "10px",
                        height: "10px",
                      }}
                      onClick={() => {
                        setPageBot(2);
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
  );
}
