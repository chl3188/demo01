package luji.demo.os01.service.homepage.Board;

import luji.demo.os01.dao.board.BoardMapper;
import luji.demo.os01.dto.board.BoardCategoryDTO;
import luji.demo.os01.dto.common.ResponseBasic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    private final BoardMapper boardMapper;

    @Autowired
    public BoardService(BoardMapper boardMapper) {
        this.boardMapper = boardMapper;
    }

    public ResponseBasic getBoardCategoryList() {
        ResponseBasic responseBasic = new ResponseBasic();

        List<BoardCategoryDTO> categoryList = boardMapper.getBoardCategory();

        if(categoryList.size() > 0) {
            responseBasic.setCode(200);
            responseBasic.setMessage("Success");
            responseBasic.setData(categoryList);
        } else {
            responseBasic.setCode(1004);
            responseBasic.setMessage("NoData");
        }

        return responseBasic;
    }
}
