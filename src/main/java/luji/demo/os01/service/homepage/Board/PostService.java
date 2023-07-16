package luji.demo.os01.service.homepage.Board;

import luji.demo.os01.Const;
import luji.demo.os01.dao.board.BoardMapper;
import luji.demo.os01.dao.board.PostMapper;
import luji.demo.os01.dto.board.BoardDTO;
import luji.demo.os01.dto.board.PostDTO;
import luji.demo.os01.dto.common.ResponseBasic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static luji.demo.os01.Const.*;

@Service
public class PostService {

    private final BoardMapper boardMapper;

    private final PostMapper postMapper;

    @Autowired
    public PostService(BoardMapper boardMapper, PostMapper postMapper) {
        this.boardMapper = boardMapper;
        this.postMapper = postMapper;
    }

    public ResponseBasic getPostDetail(int postId) {
        ResponseBasic responseBasic = null;

        PostDTO post =  postMapper.getPost(postId);
        if(post != null ) {
            return new ResponseBasic(RES_CODE_SUCCESS, RES_MSG_SUCCESS, post);
        }

        return new ResponseBasic(RES_CODE_NODATA, RES_MSG_NODATA);
    }
}
