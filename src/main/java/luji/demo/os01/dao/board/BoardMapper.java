package luji.demo.os01.dao.board;

import luji.demo.os01.dto.board.BoardDTO;
import luji.demo.os01.dto.board.PostDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

    List<PostDTO> getPostList(int category);
    List<BoardDTO> getBoardList();
}
