import styled from "styled-components";

const FooterLayout: React.FC = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterGroup>
          <FootInfo>
            <Titlte>(주)토리</Titlte>
            <Address>
              <AddressInfo>
                경기도 안산시 단원구 한양대학로 204(고잔동, 신세계빌딩)
                <span />
                대표번호 : 1577-9111
                <span />
                팩스번호 : 031-408-6763
              </AddressInfo>
              <AddressInfo>
                통신판매번호 : 제 2022-경기안산-1074호
                <span />
                사업자등록번호 : 140-81-55476
              </AddressInfo>
            </Address>
            <PersonalInfoTerm href="#">개인정보처리방침</PersonalInfoTerm>
            <CompanyCopyright>
              Copyright (C) Tory ALL RIGHTS RESERVED.
            </CompanyCopyright>
          </FootInfo>
          <FootLogo>
            <Logo>
              <LogoImg src="https://toryhair.com/images/common/foot-logo.png"></LogoImg>
            </Logo>
            <SocialList>
              <SocialItem>
                <a href="https://www.youtube.com/channel/UCjlwJnfDiDZin7fyJ6BuxOw">
                  <img src="https://toryhair.com/images/common/foot-youtube.png"></img>
                </a>
              </SocialItem>
              <SocialItem>
                <a href="https://www.youtube.com/channel/UCjlwJnfDiDZin7fyJ6BuxOw">
                  <img src="https://toryhair.com/images/common/foot-blog.png"></img>
                </a>
              </SocialItem>
              <SocialItem>
                <a href="https://www.youtube.com/channel/UCjlwJnfDiDZin7fyJ6BuxOw">
                  <img src="https://toryhair.com/images/common/foot-facebook.png"></img>
                </a>
              </SocialItem>
              <SocialItem>
                <a href="https://www.youtube.com/channel/UCjlwJnfDiDZin7fyJ6BuxOw">
                  <img src="https://toryhair.com/images/common/foot-insta.png"></img>
                </a>
              </SocialItem>
            </SocialList>
          </FootLogo>
        </FooterGroup>
      </FooterSection>
    </FooterContainer>
  );
};

export default FooterLayout;

const FooterContainer = styled.div`
  display: block;
  background: #fafafa;
  padding: 50px 0;
  border-top: 1px solid #dfdfdf;
  font-family: "Pretendard", "Open Sans", AppleGothic, helvetica, sans-serif;
`;

const FooterSection = styled.div`
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  letter-spacing: -0.04em;
`;

const FooterGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FootInfo = styled.div`
  display: block;
`;

const FootLogo = styled.div`
  display: block;
`;

const Titlte = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #2c2c2c;
  margin-bottom: 20px;
  line-height: 1.3em;
`;

const Address = styled.div`
  display: block;
`;

const AddressInfo = styled.p`
  display: block;
`;

const CompanyCopyright = styled.p`
  font-size: 12px;
  font-family: "Josefin Sans";
  font-weight: 300;
`;

const PersonalInfoTerm = styled.a`
  display: block;
  margin-top: 26px;
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: 300;
  color: #505050;
  padding-left: 21px;
  position: relative;
`;

const Logo = styled.div`
  margin-bottom: 30px;
`;

const LogoImg = styled.img`
  border: 0;
  max-width: 100%;
  vertical-align: top;
`;

const SocialList = styled.ul`
  display: flex;
  margin: 0 -10px;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  font-family: "Pretendard", "Open Sans", AppleGothic, helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.75em;
  color: #000;
  word-break: keep-all;
  -webkit-text-size-adjust: none;
`;

const SocialItem = styled.ul`
  padding: 0 10px;
  margin: 0;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
  font-family: "Pretendard", "Open Sans", AppleGothic, helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.75em;
  color: #000;
  word-break: keep-all;
  -webkit-text-size-adjust: none;
`;
