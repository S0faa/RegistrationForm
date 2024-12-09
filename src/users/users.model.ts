
import {  Model, Column, DataType, Table} from "sequelize-typescript";

import { ApiProperty } from "@nestjs/swagger";


@Table
export class User extends Model{

    @ApiProperty({example: "1", description: "Уникальный индентификатор пользователя"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "Sofia", description: "Имя пользователя"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username:string;

    @ApiProperty({example: "P@ssw0rd", description: "Пароль"})
    @Column({type: DataType.STRING, allowNull: false})
    password:string;

    @ApiProperty({example: "+79185466039", description: "Номер телефона"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    phone:string;

    @ApiProperty({example: "testing@mail.ru", description: "Почта"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email:string;

    @ApiProperty({example: "false", description: "Админ? (true - админ, false - не админ)"})
    @Column({type: DataType.BOOLEAN, allowNull:false})
    admin:boolean;


}