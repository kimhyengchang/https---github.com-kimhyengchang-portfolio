import React, { useEffect } from "react";
import './main.css'
import AOS from "aos";
import "aos/dist/aos.css";
import myProfile from "../assets/myBlog.jpeg"
import front from "../assets/Front.png"
export default function(){
    useEffect(() => {
        AOS.init();
      })
      const line2_1 = {
        0: `전주 이젠컴퓨터 학원 등록\n 2021-05`,
        1: `2021-12 \n 전주 이젠컴퓨터 학원 수료`,
        2: `전주 (주)VigeoTech 입사\n 2021-12`,
        3: `2022.01\n 식자재 유통 시스템 프로젝트 참여`,
        4: `안전상비약 부작용 신고 프로젝트 참여 \n 2022.03`,
        5: `2022.05 \n 연구과제 폐비닐재활용 프로젝트 참여`,
        6: `스마트 학습관리 시스템  프로젝트 참여\n 2022.07`,
        7: `2022.09 \n PMS시스템 프로젝트 참여`,
        8: ` (주)VigeoTech 퇴사 \n 2023.01 `,
    }
    return(
        <div>
            <section className="section_1">
                <div className="container">
                    <p className="letter letter-H">K</p>
                    <div className="moon">
                    <div className="orbit">
                        <p>H</p>
                    </div>  
                    </div>
                    <p className="letter letter-C">C</p>
                </div>
                <div className="BtnContainer">
                    <a href="#section_2" className="nextBtn">nextBtn
                    <span>&#8594;</span>
                    </a>
                </div>
            </section>

            <section className="section_2" id="section_2">
                <div className="mainProfile">
                    <img src={myProfile} data-aos="fade-right" className="myImage" ></img>
                    <div data-aos="fade-left" className="myProfile">About Me
                        <div className="line"></div>
                        <div>Name : <span>김형창</span></div>
                        <div>BirthDate : <span>1996년 5월 5일</span></div>
                        <div>Address : <span>대전광역시 유성구 도룡동</span></div>
                        <div>Phone : <span>010-8887-3520</span></div>
                        <div>Email : <span>woesf21@gmail.com</span></div>
                        <div>Education : <span>전주 비전대학교 자동화기계과 졸업</span></div>
                    </div>
                </div>
                <div className="mainProfile">
                    <div data-aos="fade-left" className="mySkill">Skill
                        <div className="line"></div>
                        <div>FrontEnd : <span>HTML,CSS,JS,JQury,BootStrap,React</span></div>
                        <div>BackEnd : <span>Java, Kotlin</span></div>
                        <div>Mobile : <span>Android Studio</span></div>
                        <div>Database : <span>MariaDB</span></div>
                        <div>Server : <span>Docker,Google Cloud,Naver Cloud</span></div>
                    </div>
                    <div class="slider">
                        <a href="#slide-1">1</a>
                        <a href="#slide-2">2</a>
                        <a href="#slide-3">3</a>
                        <div class="slides">
                            <div id="slide-1" className="slide-1" style={ {backgroundImage:'url(/assets/Front.png)', backgroundSize: 'cover'} }>
                            </div>
                            <div id="slide-2" className="slide-2" style={ {backgroundImage:'url(/assets/back.jpg)', backgroundSize: 'cover'} }>
                            </div>
                            <div id="slide-3" className="slide-3" style={ {backgroundImage:'url(/assets/server.jpg)', backgroundSize: 'cover'} }>
                            </div>
                        </div>
                        </div>
                </div>
            </section>
            <section className="section_3" id="section_3">
                <div data-aos="fade-left" className="myCAREER">CAREER
                    <div className="line"></div>
                </div>
                <div className="careerM" data-aos="fade-down-right">
                <div className="line2"></div>
                <div className="line2-1">{line2_1[0]}</div>
                <div className="line3"></div>
                <div className="line3-1">{line2_1[1]}</div>
                <div className="line4"></div>
                <div className="line4-1">{line2_1[2]}</div>
                <div className="line5"></div>
                <div className="line5-1">{line2_1[3]}</div>
                <div className="line6"></div>
                <div className="line6-1">{line2_1[4]}</div>
                <div className="line7"></div>
                <div className="line7-1">{line2_1[5]}</div>
                <div className="line8"></div>
                <div className="line8-1">{line2_1[6]}</div>
                <div className="line9"></div>
                <div className="line9-1">{line2_1[7]}</div>
                <div className="line10"></div>
                <div className="line10-1">{line2_1[8]}</div>
                <div className="line1"></div>
                </div>
                <div class="endMain">
                    <h2 data-text="백앤드 개발자로 입문 했지만.">
                    백앤드 개발자로 입문했지만
                    </h2> 
                    <h2 data-text="풀스택을 꿈꾸는 개발자입니다">
                    풀스택을 꿈꾸는 개발자입니다
                    </h2>
                    <h2 data-text="봐주셔서 감사합니다.">
                    봐주셔서 감사합니다.
                    </h2>      
                </div>
            </section>
                
        </div>
    )
}