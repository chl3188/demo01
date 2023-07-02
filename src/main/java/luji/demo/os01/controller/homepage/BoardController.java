package luji.demo.os01.controller.homepage;

import luji.demo.os01.service.homepage.Board.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/board")
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/")
    public String getBoardList() {
        return boardService.text();
    }

    @GetMapping("/list")
    public String getBoardDetail() {
        return "";
    }
}
