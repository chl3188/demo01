package luji.demo.os01.dto.common;

import lombok.AllArgsConstructor;
import lombok.Data;

public @Data class ResponseBasic {
    private int code;
    private String message;
    private Object data;

    public ResponseBasic() {
    }

    public ResponseBasic(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public ResponseBasic(int code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
