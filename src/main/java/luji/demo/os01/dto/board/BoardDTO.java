package luji.demo.os01.dto.board;

import java.sql.Timestamp;

public class BoardDTO {
    private int id;
    private int board_id;
    private int user_id;
    private String title;
    private int user_name;
    private Object content;
    private int view_count;
    private Timestamp createdAt;
    private Timestamp deletedAt;
}
