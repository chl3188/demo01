package luji.demo.os01.controller.homepage;

import luji.demo.os01.dto.common.ResponseBasic;
import luji.demo.os01.service.homepage.Board.BoardService;
import luji.demo.os01.service.homepage.Board.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/os01/api/homepage/post")
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/detail/{id}")
    public ResponseBasic getPostDetail(@PathVariable("id") int postId) {
        return postService.getPostDetail(postId);
    }

    @GetMapping("/list")
    public ResponseBasic getPostList(@RequestParam("boardId") int boardId) {
        return postService.getPostList(boardId);
    }
}
