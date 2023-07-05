package luji.demo.os01.dto.board;

import lombok.Data;

import java.sql.Timestamp;

public @Data class PostDTO {
    private int id;
    private int board_id;
    private int user_id;
    private String title;
    private String userName;
    private Object content;
    private int viewCount;
    private Timestamp createdAt;
    private Timestamp deletedAt;
}
