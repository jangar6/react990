import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function AniInfo({title, source, source2 , source3}) {
    return(
        <div className="ani">
            <div>
                <iframe className="view" scrolling="no" title={title} src={source}></iframe>
            </div>
            <div>
                <iframe className="view" scrolling="no" title={title} src={source2}></iframe>
            </div>
            <div>
                <iframe className="wide" scrolling="no" title={title} src={source3}></iframe>
            </div>
        </div>
    )
}

const AniData = [
    {
        id: '1',
        title: 'Bar Animation',
        source: "https://jangar6.github.io/dothome1/effect/portfolio/animation01.html",
        source2: "https://jangar6.github.io/dothome1/effect/portfolio/animation02.html",
        source3: "https://jangar6.github.io/dothome1/effect/portfolio/animation08.html",
    
    },
    {
        id: '2',
        title: 'Circle Animation',
        source: "https://jangar6.github.io/dothome1/effect/portfolio/animation03.html",
        source2: "https://jangar6.github.io/dothome1/effect/portfolio/animation04.html",
        source3: "https://jangar6.github.io/dothome1/effect/portfolio/animation05.html",
    },
    {
        id: '3',
        title: 'Tentacle Animation',
        source: "https://jangar6.github.io/dothome1/effect/portfolio/animation06.html",
        source2: "https://jangar6.github.io/dothome1/effect/portfolio/animation07.html",
        source3: "https://jangar6.github.io/dothome1/effect/portfolio/animation09.html",
    },
]

function Ani(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aniCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['Animation','book','Animation book']} />
                        </div>
                        <div className="aniCont">
                            {AniData.map((site)=>{
                                return <AniInfo
                                    key={site.id}
                                    title={site.title}
                                    source={site.source}
                                    source2={site.source2}
                                    source3={site.source3}
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
export default Ani;