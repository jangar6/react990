import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';

// 내부 컴포넌트
function AboutText({title, desc, image, image2x}){
    return (
        <div>
            <div className="aiLeft">
                <img src={image} srcSet={image2x} alt={title}></img>
            </div>
            <div className="aiRight">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

const aboutMe = [
    {
        id: 1,
        title: '등가교환의 법칙',
        desc: '무언가를 얻고자 할 때는 댓가를 치뤄야 한다는 말입니다. 노력도 하지 않고 바라기만 하는 나태한 사람이 아닌 원하는 것을 얻고자 하면 그에 상응하는 노력을 해야 한다 생각합니다.',
        image: '../img/about_cont1.jpg',
        image2x: '../img/about_cont1@2.jpg 2x, ../img/about_cont1@3.jpg 3x',
    },
    {
        id: 2,
        title: '작은 호기심이 키운 ‘꿈’',
        desc: '처음 코딩을 알게된건 15살이라는 나이의 중학생때였습니다. 수업으로 짧게나마 배운 코딩은 인상적이였습니다. 누가 만들었는지 관심도 없었던 편리한 사이트를 만드는 것에 대한 호기심을 그때 처음 갖게 되었습니다. 당시에는 짧게 일었던 호기심이 나중에서야 커지게 되었습니다. 적당히 공부하고 적당한 학교에 입학하여 적당히 졸업하고 나서, 꿈이 필요하다는 시점에서 우연히 알게된 국비지원 프로그램을 통해 ‘웹 퍼블리셔’라는 직업을 알게 되었습니다. 배울수록 매력적으로 느끼게 하였고 이 작은 호기심이 결국 저에게 웹 퍼블리셔라는 꿈을 갖게 하였습니다.',
        image: '../img/about_cont2.jpg',
        image2x: '../img/about_cont2@2.jpg 2x, ../img/about_cont2@3.jpg 3x',
    },
    {
        id: 3,
        title: '모든게 부족하고 한 발 느린 ‘나’',
        desc: '대부분의 사람들은 학원이든, 학교든 조금이나마 수업을 받고 왔다고 알고있습니다. 하지만 저는 호텔경영이라는 전혀 웹 퍼블리셔와 상관없는 과를 졸업하여 아주 작고 작은 기초밖에 모르는 사람이였습니다. 뒤늦게 시작하여 모든게 부족하고 느리게 느껴졌지만 원하는 것을 이루기 우해서는 그만한 노력을 해야했습니다. 항상 맞춘 시간보다 10~ 20분 일찍 도착하여 부족한 부분을 공부하고, 쉬는날에도 힘들더라도 한 번 더 보려 하였습니다. 이 작은 노력이 모이고 모여 조금 느릴지라도 포기하지 않고 버틴것 같습니다.',
        image: '../img/about_cont3.jpg',
        image2x: '../img/about_cont3@2.jpg 2x, ../img/about_cont3@3.jpg 3x',
    }
]

function About(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aboutCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['about','me','about me']} />
                        </div>
                        <div className="aboutCont">
                            {aboutMe.map((txt) => (
                                 <AboutText key={txt.id} title={txt.title} desc={txt.desc} image={txt.image} image2x={txt.image2x} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default About;