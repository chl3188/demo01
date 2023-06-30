import styled from "styled-components";

const FooterLayout: React.FC = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Row>
          <TitleWrapper>
            <LogoTitleImg src="http://ecudemo233728.cafe24.com/_images/logo.png"></LogoTitleImg>
            <CompanyCopyright>ⓒ BODYWORKS & ONEDESIGN, LLC</CompanyCopyright>
            <PersonalInfoTerm>개인정보처리방침</PersonalInfoTerm>
          </TitleWrapper>
        </Row>
        <InfoWrapper></InfoWrapper>
      </FooterSection>
    </FooterContainer>
  );
};

export default FooterLayout;

const FooterContainer = styled.div`
  background: #f8f8f8;
  position: relative;
  margin-top: 100px;
`;

const FooterSection = styled.div`
  padding: 130px 0;
  width: 80%;
  min-width: 1400px;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const TitleWrapper = styled.div`
  display: table;
  width: 100%;
`;

const InfoWrapper = styled.div`
  display: table;
  width: 100%;
`;

const Row = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0;
  padding: 0;
`;

const LogoTitleImg = styled.img`
  font-size: 24px;
  max-height: 18px;
  border: none;
  vertical-align: top;
  margin: 0;
  padding: 0;
  padding-right: 20px;
`;

const CompanyCopyright = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 11px;
  color: #b1b1b1;
  letter-spacing: 0.5px;
  line-height: 30px;
`;

const PersonalInfoTerm = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #777777;
  font-weight: 400;
  font-size: 11px;
  padding-left: 25px;
  letter-spacing: 0;
  line-height: 18px;
  margin-top: -2px;
  line-height: 30px;

  &::before {
    content: "";
    position: absolute;
    left: 11px;
    top: 9px;
    width: 1px;
    height: 11px;
    background: #aaa;
  }
`;
