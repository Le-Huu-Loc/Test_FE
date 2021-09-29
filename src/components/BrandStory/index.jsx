import React from 'react';
import './BrandStory.scss'
import windown from '../../images/window.png'
import object6 from '../../images/object-06.png'
import object7 from '../../images/object-07.png'
import object1 from '../../images/object-01.png'
import object2 from '../../images/object-02.png'
import object3 from '../../images/object-03.png'
import object4 from '../../images/object-04.png'
import object5 from '../../images/object-05.png'




function BrandStory() {

    return (
        <div className="brand-story">

            <img src={object1} alt="object-1" className="object-1" />
            <div className="title">
                <span>
                    BRAND STORY
                </span>
                <span>
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </span>
            </div>
            <img src={object2} alt="object-2" className="object-2" />
            <img src={object3} alt="object-3" className="object-3" />

            <div className="window">
                <div className="container">
                    <img src={object6} alt="object-6" className="object-6" />
                    <img src={object7} alt="object-7" className="object-7" />
                    <img src={windown} alt="window" className="windowimg" />
                    <div>
                        <span className="title">
                            What Happened’s Brand story
                        </span>
                        <span className="description">청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                            봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                            긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                            인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                            아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. </span>

                        <div className="see-more">
                            SEE MORE
                        </div>
                    </div>
                    <img src={object5} alt="object-5" className="object-5" />
                    <img src={object4} alt="object-4" className="object-4" />
                </div>
            </div>
        </div>
    );
}

export default BrandStory;