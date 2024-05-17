/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import style from "./index.module.less";
import prev from "../../icon/prev.png";
import back from "../../icon/back.png";
import start from "../../icon/start.png";
import startHalf from "../../icon/starthalf.png";
import avatar from "../../image/avatar.png";
const assessListData = [
  {
    currentPage: 1,
    totalPages: 5,
    pageSize: 4,
    data: [
      {
        title: "Great app!",
        content:
          "I have used the Token 13 wallet many times and have mixed it up, but it is more compatible and easier to use than many wallets. It is protected by a more secure system than other wallets. I have recommended it to other crypto enthusiast friends I know.",
        avatar: start,
        name: "Wade Warren",
        email: "@Nellie Davis",
      },
      {
        title: "Great app!",
        content:
          "I have used the Token 13 wallet many times and have mixed it up, but it is more compatible and easier to use than many wallets. It is protected by a more secure system than other wallets. I have recommended it to other crypto enthusiast friends I know.",
        avatar: start,
        name: "Wade Warren",
        email: "@Nellie Davis",
      },
      {
        title: "Great app!",
        content:
          "I have used the Token 13 wallet many times and have mixed it up, but it is more compatible and easier to use than many wallets. It is protected by a more secure system than other wallets. I have recommended it to other crypto enthusiast friends I know.",
        avatar: start,
        name: "Wade Warren",
        email: "@Nellie Davis",
      },
    ],
  },
  {
    currentPage: 2,
    totalPages: 5,
    pageSize: 4,
    data: [
      {
        title: "Great app!",
        content:
          "I have used the Token 13 wallet many times and have mixed it up, but it is more compatible and easier to use than many wallets. It is protected by a more secure system than other wallets. I have recommended it to other crypto enthusiast friends I know.",
        avatar: start,
        name: "Wade Warren",
        email: "@Nellie Davis",
      },
      {
        title: "Great app!",
        content:
          "I have used the Token 13 wallet many times and have mixed it up, but it is more compatible and easier to use than many wallets. It is protected by a more secure system than other wallets. I have recommended it to other crypto enthusiast friends I know.",
        avatar: start,
        name: "Wade Warren",
        email: "@Nellie Davis",
      },
      {
        title: "Great app!",
        content:
          "I have used the Token 13 wallet many times and have mixed it up, but it is more compatible and easier to use than many wallets. It is protected by a more secure system than other wallets. I have recommended it to other crypto enthusiast friends I know.",
        avatar: start,
        name: "Wade Warren",
        email: "@Nellie Davis",
      },
    ],
  },
  {
    currentPage: 3,
    totalPages: 5,
    pageSize: 4,
    data: [
      {
        title: "Great app!",
        content:
          "I have used the Token 13 wallet many times and have mixed it up, but it is more compatible and easier to use than many wallets. It is protected by a more secure system than other wallets. I have recommended it to other crypto enthusiast friends I know.",
        avatar: start,
        name: "Wade Warren",
        email: "@Nellie Davis",
      },
    ],
  },
];
const starIcons = [start, start, start, start, startHalf];

export function AssessItem({ data }) {
  const { t } = useTranslation();

  return (
    <div className={style.assessBox}>
      {data.map((item, index) => (
        <div className={style.boxItem} key={index}>
          <div className={style.iconList}>
            {starIcons.map((item, index) => (
              <div key={index} className={style.starIcon}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
          <div className={style.assessContent}>
            <header>{t(item.title)}</header>
            <p>{t(item.content)}</p>
          </div>
          <div className={style.userInfo}>
            {/* 头像 */}
            <div>
              <img src={avatar} alt="" />
            </div>
            <div className={style.info}>
              <span>{item.name}</span>
              <span className={style.emailStyle}>{item.email}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Assess() {
  const [page, setPage] = useState(1);
  const carouselRef = useRef(null);
  const { t } = useTranslation();

  const onPrev = () => {
    carouselRef.current.prev();
    if (page === 1) {
      return setPage(1);
    }
    setPage(page - 1);
  };
  const onNext = () => {
    carouselRef.current.next();
    if (page === 3) {
      return setPage(3);
    }
    setPage(page + 1);
  };

  return (
    <div className={style.assessContainer}>
      <header>
        <div className={style.assessTitle}>
          {t("What Our Customers Say About US")}
        </div>
        <div className={style.titleDescrip}>
          {t(
            "I have used the Token 13 wallet many times and have mixed it up, but it is more compatible and easier to use than many wallets. It is protected by a more secure system than other wallets. I have recommended it to other crypto enthusiast friends I know.",
          )}
        </div>
      </header>

      {/* 评价列表 */}
      <Carousel ref={carouselRef} infinite={false} dots={false}>
        {assessListData.map((item, index) => (
          <AssessItem key={index} data={item.data}></AssessItem>
        ))}
      </Carousel>
      <div className={style.paginGroup}>
        <div className={style.pagin}>
          <span>0{page}</span> of 10
        </div>
        <div className={style.switch}>
          <div className={style.move} onClick={onPrev}>
            <img src={prev} alt="" />
          </div>
          <div className={style.move} onClick={onNext}>
            <img src={back} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}