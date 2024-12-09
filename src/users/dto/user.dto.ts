import { ApiProperty } from "@nestjs/swagger";

export class UserDto{

    @ApiProperty({example: "testing@mail.ru", description: "Почта"})
    readonly email:string;

    @ApiProperty({example: "P@ssw0rd", description: "Пароль"})
    readonly password:string;
}