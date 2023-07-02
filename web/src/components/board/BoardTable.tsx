import React from "react";
import styled from "styled-components";

const Board: React.FC = () => {
  return (
    <BoardContainer>
      <BoardWrapper>
        <BoardContents>
          <BoardSearch>
            <BoardSearchWrapper>
              <BoardSearchTotal>전체 1</BoardSearchTotal>
              <BoardSearchSection>
                <BoardSearchSectionInput placeholder="검색어"></BoardSearchSectionInput>
                <BoardSearchSectionButton>검색하기</BoardSearchSectionButton>
              </BoardSearchSection>
            </BoardSearchWrapper>
          </BoardSearch>
          <BoardList>
            <BoardListTable>
              <BoardListTableCaption>공지사항 목록</BoardListTableCaption>
              <BoardListTableColgroup>
                <BoardListTableCol width={"85px"} />
                <BoardListTableCol width={"0"} />
                <BoardListTableCol width={"120px"} />
                <BoardListTableCol width={"140px"} />
                <BoardListTableCol width={"85px"} />
              </BoardListTableColgroup>
              <BoardListTableHead>
                <BoardListTableTr>
                  <BoardListTableTh scope="col">번호</BoardListTableTh>
                  <BoardListTableTh scope="col">제목</BoardListTableTh>
                  <BoardListTableTh scope="col">작성자</BoardListTableTh>
                  <BoardListTableTh scope="col">등록일</BoardListTableTh>
                  <BoardListTableTh scope="col">조회</BoardListTableTh>
                </BoardListTableTr>
              </BoardListTableHead>
              <BoardListTableBody>
                <BoardListTableTr>
                  <BoardListTableItemTh>1</BoardListTableItemTh>
                  <BoardListTableItemTh>상호변경안내</BoardListTableItemTh>
                  <BoardListTableItemTh>토리헤어</BoardListTableItemTh>
                  <BoardListTableItemTh>2023-06-28</BoardListTableItemTh>
                  <BoardListTableItemTh>64</BoardListTableItemTh>
                </BoardListTableTr>
              </BoardListTableBody>
            </BoardListTable>
          </BoardList>
          <Pagination></Pagination>
        </BoardContents>
      </BoardWrapper>
    </BoardContainer>
  );
};
export default Board;

const BoardContainer = styled.div`
  flex: 1;
  min-height: 460px;
`;

const BoardWrapper = styled.div`
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  letter-spacing: -0.04em;
`;

const BoardContents = styled.div`
  letter-spacing: -0.04em;
  margin: 100px 0;
`;

const BoardSearch = styled.div`
  display: block;
  margin-bottom: 20px;
  letter-spacing: -0.04em;

  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const BoardSearchWrapper = styled.div`
  display: block;
  margin: 0;
  padding: 0;
`;

const BoardSearchTotal = styled.div`
  display: block;
  float: left;
  color: #686868;
  font-size: 15px;
  line-height: 44px;
`;

const BoardSearchSection = styled.div`
  display: block;
  float: right;
`;

const BoardSearchSectionInput = styled.input`
  width: 300px;
  height: 44px;
  padding: 6px 16px;
  color: #505050;
  font-size: 15px;
  line-height: 1.5em;
  border: 1px solid #ddd;
  vertical-align: middle;
  background: #fff;
  margin: 0;
  text-rendering: auto;
  color: fieldtext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  background-color: field;
`;

const BoardSearchSectionButton = styled.button`
  height: 44px;
  padding: 0 20px;
  line-height: 43px;
  font-size: 16px;
  background: #555555;
  border: 1px solid #555555;
  color: #fff;
  display: inline-block;
  overflow: visible;
  position: relative;
  margin: 0;
  text-align: center;
  text-decoration: none !important;
  vertical-align: top;
  white-space: nowrap;
  word-break: keep-all;
  -webkit-text-size-adjust: none;
`;

const BoardList = styled.div`
  letter-spacing: -0.04em;
  margin: 100px 0;
`;

const BoardListTable = styled.table`
  margin: 0;
  padding: 0;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  border-top: 2px solid #868686;
  font-family: "Pretendard", "Open Sans", AppleGothic, helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.75em;
  color: #000;
  word-break: keep-all;
  -webkit-text-size-adjust: none;
  text-indent: initial;
  border-color: gray;
`;

const BoardListTableCaption = styled.caption`
  display: table-caption;
  text-align: -webkit-center;
  overflow: hidden;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  font-size: 0;
  line-height: 0;
  text-indent: -999em;
`;

const BoardListTableColgroup = styled.colgroup`
  display: table-column-group;
  border-collapse: collapse;
  border-spacing: 0px;
`;

const BoardListTableCol = styled.col<{ width?: string }>`
  display: table-column;
  width: ${(props) => props.width};
`;

const BoardListTableHead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

const BoardListTableTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const BoardListTableTh = styled.th`
  display: table-cell;
  vertical-align: inherit;
  text-align: -internal-center;
  height: 53px;
  padding: 9px 5px;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
  background: #fafafa;
  border-bottom: 1px solid #ddd;
`;

const BoardListTableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const BoardListTableItemTh = styled.th`
  display: table-cell;
  vertical-align: inherit;
  margin: 0;
  height: 53px;
  padding: 9px 5px;
  color: #505050;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5em;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const Pagination = styled.div`
  letter-spacing: -0.04em;
  margin: 100px 0;
`;
