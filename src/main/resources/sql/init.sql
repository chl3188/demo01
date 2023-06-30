create schema demo;

create table demo.account (
    id int auto_increment primary key,
    login_id varchar(256) not null,
    password varchar(256) not null,
    name varchar(256) not null,
    privilege int not null,
    recent_login datetime,
    createdAt datetime,
    deletedAt datetime
);
