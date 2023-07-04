package luji.demo.os01.dto.board;

import lombok.Data;

import java.sql.Timestamp;


public @Data class BoardCategoryDTO {
    private int id;
    private String category;
    private int tinyint;
    private int publish;
    private Timestamp datetime;
    private Timestamp deletedAt;
}
