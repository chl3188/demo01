package luji.demo.os01.service.homepage.Board;

import luji.demo.os01.dao.board.PostMapper;
import luji.demo.os01.dto.board.PostDTO;
import luji.demo.os01.dto.common.ResponseBasic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static luji.demo.os01.Const.*;

@Service
public class PostService {

    private final PostMapper postMapper;

    @Autowired
    public PostService(  PostMapper postMapper) {
        this.postMapper = postMapper;
    }

    public ResponseBasic getPostDetail(int postId) {
        ResponseBasic responseBasic = null;

        try {
            postMapper.updateViewCount(postId);
            PostDTO post = postMapper.getPost(postId);
            if(post != null ) {
                return new ResponseBasic(RES_CODE_SUCCESS, RES_MSG_SUCCESS, post);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseBasic(RES_CODE_ERROR, RES_MSG_ERROR);
        }
        return new ResponseBasic(RES_CODE_NODATA, RES_MSG_NODATA);
    }

    public ResponseBasic getPostList(int boardId) {
        ResponseBasic responseBasic = null;

        List<PostDTO> postList =  postMapper.getBoardPostList(boardId);
        if(postList.size() > 0) {
            return new ResponseBasic(RES_CODE_SUCCESS, RES_MSG_SUCCESS, postList);
        }

        return new ResponseBasic(RES_CODE_NODATA, RES_MSG_NODATA);
    }
}
