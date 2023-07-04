package luji.demo.os01.dto.common;

import lombok.Data;
import lombok.Getter;

public @Data class ResponseBasic {
    private int code;
    private String message;
    private Object data;
}
