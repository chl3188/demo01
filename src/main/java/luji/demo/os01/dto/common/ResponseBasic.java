package luji.demo.os01.dto.common;

import lombok.Data;

@Data
public class ResponseBasic {
    private int code;
    private String message;
    private Object data;
}
