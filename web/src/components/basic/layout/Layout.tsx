import React from "react";
import styled from "styled-components";

interface Props {
  Head?: React.ReactElement;
  Header?: React.ReactElement;
}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({
  Head,
  Header,
  children,
}) => {
  return (
    <>
      {Head}
      <LayoutBlock>
        <Container>
          {Header}
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Container>
      </LayoutBlock>
    </>
  );
};

export default Layout;

const LayoutBlock = styled.main`
  background-color: ${(props) => props.theme.colors.bodyBackground};
`;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: ${(props) => props.theme.content.width}px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const ChildrenWrapper = styled.div``;
