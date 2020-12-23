import React from 'react';
import Header from '../components/Header';
function Contact(){
    return (
        <div id="wrap">
            <Header />
            <main id="main">
                <section id="contactCont">
                    <div className="container">
                        <div className="contactCont">
                            <div>
                                <h1>Thank you for watching.</h1>
                            </div>
                            <div>
                                <p>제 포트폴리오를 봐주셔서 감사합니다.더 많은 포트폴리오와 자료를 보고싶으시다면 아래의 정보를 통해 연락해 주세요.</p>
                                <ul>
                                    <li>Tel. 010 8226 0865</li>
                                    <li>E-mail. jangar6621@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Contact;