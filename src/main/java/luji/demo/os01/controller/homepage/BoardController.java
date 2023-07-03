package luji.demo.os01.controller.homepage;

import luji.demo.os01.dto.common.ResponseBasic;
import luji.demo.os01.service.homepage.Board.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@RestController()
@RequestMapping("/os01/api/board")
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/category/list")
    public ResponseBasic getBoardList() {
        return boardService.getBoardCategoryList();
    }

    @GetMapping("/list")
    public String getBoardDetail() {
        return "";
    }
}
