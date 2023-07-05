package luji.demo.os01.dto.board;

import lombok.Data;

import java.sql.Timestamp;


public @Data class BoardDTO {
    private int id;
    private String category;
    private int type;
    private int publish;
    private Timestamp datetime;
    private Timestamp deletedAt;
}
