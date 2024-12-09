import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto{
   
    @ApiProperty({example: "testing@mail.ru", description: "Почта"})
    readonly email: string;

    @ApiProperty({example: "P@ssw0rd", description: "Пароль"})
    readonly password: string;

    @ApiProperty({example: "1", description: "Уникальный индентификатор пользователя"})
    readonly id: number;

    @ApiProperty({example: "Sofia", description: "Имя пользователя"})
    readonly username:string;

    @ApiProperty({example: "+79185466039", description: "Номер телефона"})
    readonly phone:string;

    @ApiProperty({example: "false", description: "Админ? (true - админ, false - не админ)"})
    readonly admin:boolean;

}