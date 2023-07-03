package luji.demo.os01.dto.account;

import java.sql.Timestamp;

public class AccountDTO {
    private int id;
    private String login_id;
    private String password;
    private String name;
    private int privilege;
    private Timestamp recent_login;
    private Timestamp createdAt;
    private Timestamp deletedAt;
}
