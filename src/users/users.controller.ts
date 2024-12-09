
import { Body, Controller, Get, Post, UseGuards, Param, Patch, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags("Пользователь")
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @ApiOperation({summary: "Регистрация пользователя"})
    @ApiResponse({status:200, type: User})
    @Post('/registration')
    async create(@Body() userDto: CreateUserDto){
        try{
            const data = await this.usersService.create(userDto);
            return data
        }
        catch(error){
           
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                warningMessage: error.message,
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
     
    }

   
    @ApiOperation({summary: "Получить всех пользователей"})
    @ApiResponse({status:200, type: [User]})
    @Get('/get-all')
    getAll(){
        return this.usersService.findAll();
    }

    @ApiOperation({summary: "Получить конкретного пользователя"})
    @ApiResponse({status:200, type: User})
    @Get('/get-user/:id')
    async getUser(@Param('id') id:number){
        try{
            const data = await this.usersService.getUser(id);
            return data
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                warningMessage: error.message,
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
        
    }

    @ApiOperation({summary: "Вход для пользователя, авторизация"})
    @ApiResponse({status:200, type: User})
    @Post('/login')
    async Login(@Body() userDto: UserDto){
    
        

        try{
            const data = await this.usersService.login(userDto)
            return data
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                warningMessage: error.message,
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
    }

    
    
}