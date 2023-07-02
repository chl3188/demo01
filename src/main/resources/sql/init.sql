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

create table demo.boardCategory (
    id int auto_increment primary key,
    category varchar(256) not null,
    type tinyint,
    publish tinyint,
    createdAt datetime,
    deletedAt datetime
);

insert into demo.boardCategory(category, type, publish, createdAt) value ('공지사항', 1, 1, now());
insert into demo.boardCategory(category, type, publish, createdAt) value ('신규매장오픈', 2, 1, now());
insert into demo.boardCategory(category, type, publish, createdAt) value ('이벤트', 3, 1, now());
select  * from demo.boardCategory;

create table demo.board (
    id int auto_increment primary key,
    board_id int not null,
    user_id int not null,
    title varchar(256) not null,
    user_name int not null,
    content clob,
    view_count int,
    createdAt datetime,
    deletedAt datetime
);