create table notes (
    id serial primary key,
    priority integer not null,
    note varchar(200) not null
);
