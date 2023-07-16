package luji.demo.os01.controller.homepage;

import luji.demo.os01.dto.common.ResponseBasic;
import luji.demo.os01.service.homepage.Board.BoardService;
import luji.demo.os01.service.homepage.Board.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/os01/api/homepage/post")
public class PostController {
    private final BoardService boardService;
    private final PostService postService;

    @Autowired
    public PostController(BoardService boardService, PostService postService) {
        this.boardService = boardService;
        this.postService = postService;
    }

    @GetMapping("/detail/{id}")
    public ResponseBasic getPostDetail(@PathVariable("id") int postId) {
        return postService.getPostDetail(postId);
    }
}
