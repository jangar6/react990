import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function ScriptInfo({title, source}){
    return(
        <div className="script">
            <div className="script-left">
                <h3>{title}</h3>
            </div>
            <div className="script-right">
                <div className="view">
                    <iframe title={title} src={source}></iframe>
                </div>
                <div className="num">
                    <ul>
                        <li className="active"><span>1</span></li>
                        <li><span>2</span></li>
                        <li><span>3</span></li>
                        <li><span>4</span></li>
                        <li><span>5</span></li>
                        <li><span>6</span></li>
                        <li><span>7</span></li>
                        <li><span>8</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

// 정보 객체 만들기
const siteData = [
    {
        id: '1',
        title: '마우스 이펙트 스크립트',
        source: [
            "https://jangar6.github.io/dothome1/effect/portfolio/mouseEffect01-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/mouseEffect01-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/mouseEffect03-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/mouseEffect04-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/mouseEffect05-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/mouseEffect06-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/mouseEffect07-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/mouseEffect08-react.html",
        ]
    },
    {
        id: '2',
        title: '패랠랙스 이펙트 스크립트',
        source: [
            "https://jangar6.github.io/dothome1/effect/portfolio/parallax01-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/parallax02-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/parallax03-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/parallax04-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/parallax05-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/parallax06-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/parallax07-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/parallax08-react.html",
        ]
    },
    {
        id: '3',
        title: '슬라이드 이펙트 스크립트',
        source: [
            "https://jangar6.github.io/dothome1/effect/portfolio/sliderEffect01-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/sliderEffect02-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/sliderEffect03-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/sliderEffect04-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/sliderEffect05-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/sliderEffect06-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/sliderEffect07-react.html",
            "https://jangar6.github.io/dothome1/effect/portfolio/sliderEffect08-react.html",
        ]
    }
]

function Script(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="scriptCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['Script Reference','Book','Script Reference Book']} />
                        </div>
                        <div className="scriptCont">
                            {siteData.map((site)=>{
                                return <ScriptInfo
                                    key={site.id}
                                    title={site.title}
                                    source={site.source[1]}
                                />
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Script;