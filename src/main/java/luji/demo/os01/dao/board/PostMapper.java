package luji.demo.os01.dao.board;

import luji.demo.os01.dto.board.BoardDTO;
import luji.demo.os01.dto.board.PostDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PostMapper {

    PostDTO getPost(int postId);
    List<PostDTO> getBoardPostList(int boardId);
    int updateViewCount(int postId);


}
