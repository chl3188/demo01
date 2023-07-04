package luji.demo.os01.dao.board;

import luji.demo.os01.dto.board.BoardCategoryDTO;
import luji.demo.os01.dto.board.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

    List<BoardDTO> getBoard(int category);
    List<BoardCategoryDTO> getBoardCategory();
}
