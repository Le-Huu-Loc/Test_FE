import React from 'react';
import './Footer.scss'
import snsicon3 from '../../images/snsicon-03.png'
import snsicon2 from '../../images/snsicon-02.png'
import snsicon1 from '../../images/snsicon-01.png'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer--left">
                    <span>what happened</span>
                    <span>[공지] 개인 정보 처리 방침 변경 사전 안내
                        [공지] 29CM 강남 스토어 영업 종료
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                        [공지] iOS 10 이하 버전 지원 중단 안내
                        [공지] 개인 정보 처리 방침 변경 사전 안내</span>
                </div>
                <div className="footer--right">
                    <div className="item">
                        <span>about us</span>
                        <span>회사 소개
                            인재 채용
                            상시 할인 혜택</span>
                    </div>
                    <div className="item">
                        <span>my order</span>
                        <span>내 주문
                            주문 배송
                            취소 / 교환 / 반품 내역
                            상품 리뷰 내역
                            증빙 서류 발급</span>
                    </div>
                    <div className="item">
                        <span>my account</span>
                        <span>회원 정보 수정
                            회원 등급
                            마일리지 현황
                            쿠폰</span>
                    </div>
                    <div className="item">
                        <span>help</span>
                        <span>1 : 1 상담 내역
                            상품 Q & A 내역
                            공지 사항
                            자주하는 질문
                            고객의 소리</span>
                    </div>
                </div>
            </div>
            <div className="contact">
                <span>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                    서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</span>
                <div className="icon">
                    <img src={snsicon1} alt="snsicon-1" />
                    <img src={snsicon2} alt="snsicon-2" />
                    <img src={snsicon3} alt="snsicon-3" />
                </div>
            </div>
        </div>
    );
}

export default Footer;