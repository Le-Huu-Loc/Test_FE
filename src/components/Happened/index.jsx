import React from 'react';
import './Happened.scss'
import news from '../../images/news-img-01.png'
import newsobj3 from '../../images/news-object-03.png'
import newsobj4 from '../../images/news-object-04.png'
import newsobj003 from '../../images/news-object-003.png'
import newsobj5 from '../../images/news-object-05.png'
import newsobj2 from '../../images/news-object-02.png'
import nike from '../../images/nike.jpg'
import levis from '../../images/levis.PNG'
import locc from '../../images/locc.PNG'
import dyson from '../../images/dyson.PNG'


function Happened() {
    return (
        <div className="happened">
            <span className="title">Happened’s issue</span>
            <span className="description">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</span>
            <div className="see-more"> See More</div>
            <div className="banner-happened">
                <ul>
                    <li>
                        <div className="item-1">
                            <span>whpn issue</span>
                            <img src={news} alt="news" />
                        </div>
                    </li>
                    <li>
                        <div className="item-2">
                            <span>b brand</span>
                            <img src={nike} alt="nike" className="nike" />
                            <img src={newsobj4} alt="new-object-4" className="news-obj-4" />
                            <img src={newsobj3} alt="new-object-3" className="news-obj-3" />
                        </div>
                    </li>
                    <li>
                        <div className="item-3">
                            <span>C brand</span>
                            <img src={levis} alt="levis" className="levis" />
                        </div>
                    </li>
                    <li>
                        <div className="item-4">
                            <span>D brand</span>
                            <img src={dyson} alt="dyson" className="dyson" />
                        </div>
                    </li>
                    <li>
                        <div className="item-5">
                            <img src={newsobj2} alt="new-obj-2" className="news-obj-2" />
                            <img src={newsobj003} alt="new-obj-3" className="news-obj-003" />
                            <span>E brand</span>
                            <img src={locc} alt="loccitane" className="locc" />
                            <img src={newsobj5} alt="new-obj-5" className="news-obj-5" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Happened;