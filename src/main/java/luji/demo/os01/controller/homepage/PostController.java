package luji.demo.os01.controller.homepage;

import luji.demo.os01.dto.common.ResponseBasic;
import luji.demo.os01.service.homepage.Board.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/os01/api/homepage/post")
public class PostController {
    private final BoardService boardService;

    @Autowired
    public PostController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/list")
    public ResponseBasic getPostList(@RequestParam("boardId") int boardId) {
        return boardService.getPostList(boardId);
    }
}
