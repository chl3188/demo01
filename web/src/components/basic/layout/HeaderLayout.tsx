import styled from "styled-components";

const HeaderLayout: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderSection>
        <SiteLogo>
          <SiteLogoImg href="#"></SiteLogoImg>
        </SiteLogo>
        <Menu>
          <MenuList>
            <MenuListItem>
              <MenuTitle href="#">About</MenuTitle>
            </MenuListItem>
            <MenuListItem>
              <MenuTitle href="#">News</MenuTitle>
            </MenuListItem>
            <MenuListItem>
              <MenuTitle href="#">Salon</MenuTitle>
            </MenuListItem>
            <MenuListItem>
              <MenuTitle href="#">Collection</MenuTitle>
            </MenuListItem>
            <MenuListItem>
              <MenuTitle href="#">Shop</MenuTitle>
            </MenuListItem>
            <MenuListItem>
              <MenuTitle href="#">Customer</MenuTitle>
            </MenuListItem>
          </MenuList>
        </Menu>
        <AllMenu>
          <AllMenuSpan>메뉴</AllMenuSpan>
        </AllMenu>
      </HeaderSection>
    </HeaderContainer>
  );
};

export default HeaderLayout;

const HeaderContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 90;
  letter-spacing: -0.04em;
  background: transparent;
  transition: all 1s;
  background: #fff;
`;

const HeaderSection = styled.div`
  display: block;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  letter-spacing: -0.04em;
  max-width: 1750px !important;
  z-index: 20;
`;

const SiteLogo = styled.div`
  margin: 0;
  padding: 0;
  letter-spacing: -0.04em;
`;

const SiteLogoImg = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -17px;
  left: 15px;
  z-index: 10;
  width: 266px;
  height: 34px;
  font-size: 0;
  line-height: 0;
  background-image: url(https://toryhair.com/images/common/logo.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: inherit;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  letter-spacing: -0.04em;
`;

const Menu = styled.div`
  display: block;
  letter-spacing: -0.04em;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: 300px !important;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  letter-spacing: -0.04em;
`;

const MenuListItem = styled.li`
  display: list-item;
  position: relative;
  text-align: center;
  list-style: none;
  padding: 0 45px;
  margin: 0;
  letter-spacing: -0.04em;
`;

const MenuTitle = styled.a`
  position: relative;
  display: inline-block;
  color: #2c2c2c;
  font-size: 20px;
  line-height: 100px;
  font-weight: 500;
  font-family: "Josefin Sans";
  text-decoration: none;
`;

const SubMenuList = styled.ul``;

const AllMenu = styled.a`
  display: block;
  position: absolute;
  top: 50%;
  margin-top: 0;
  right: 15px;
  width: 30px;
  height: 11px;
  text-align: center;
  text-indent: -9999em;
  z-index: 120;
  transition: all 0.5s ease-in-out;
`;

const AllMenuSpan = styled.span`
  &::before {
    top: -8px;
    transition-property: top, transform;
    content: " ";
    position: absolute;
    right: 0;
    width: 30px;
    height: 2px;
    background: #2c2c2c;
    transition-duration: 0.3s, 0.3s;
    transition-delay: 0.3s, 0s;
    -webkit-box-sizing: border-box;
  }

  &:after {
    bottom: -8px;
    transition-property: bottom, transform;
    content: " ";
    position: absolute;
    right: 0;
    width: 30px;
    height: 2px;
    transition-duration: 0.3s, 0.3s;
    transition-delay: 0.3s, 0s;
    background: transparent;
    -webkit-box-sizing: border-box;
  }
`;
