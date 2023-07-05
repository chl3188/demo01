package luji.demo.os01.service.homepage.Board;

import luji.demo.os01.dao.board.BoardMapper;
import luji.demo.os01.dto.board.BoardDTO;
import luji.demo.os01.dto.board.PostDTO;
import luji.demo.os01.dto.common.ResponseBasic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static luji.demo.os01.Const.*;

@Service
public class BoardService {

    private final BoardMapper boardMapper;

    @Autowired
    public BoardService(BoardMapper boardMapper) {
        this.boardMapper = boardMapper;
    }

    public ResponseBasic getPostList(int category) {
        ResponseBasic responseBasic = new ResponseBasic();

        List<PostDTO> categoryList = boardMapper.getPostList(category);

        if(categoryList.size() > 0) {
            responseBasic.setCode(RES_CODE_SUCCESS);
            responseBasic.setMessage(RES_MSG_SUCCESS);
            responseBasic.setData(categoryList);
        } else {
            responseBasic.setCode(RES_CODE_NODATA);
            responseBasic.setMessage(RES_MSG_NODATA);
        }

        return responseBasic;
    }

    public ResponseBasic getBoardList() {
        ResponseBasic responseBasic = new ResponseBasic();

        List<BoardDTO> categoryList = boardMapper.getBoardList();

        if(categoryList.size() > 0) {
            responseBasic.setCode(RES_CODE_SUCCESS);
            responseBasic.setMessage(RES_MSG_SUCCESS);
            responseBasic.setData(categoryList);
        } else {
            responseBasic.setCode(RES_CODE_NODATA);
            responseBasic.setMessage(RES_MSG_NODATA);
        }

        return responseBasic;
    }
}
