package luji.demo.os01.dao.board;

import luji.demo.os01.dto.board.BoardCategoryDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

    List<BoardCategoryDTO> getBoardCategory();
}
