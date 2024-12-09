import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'
import { UserDto } from './dto/user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel : typeof User,
      ){}

      findOne(filter: {
        where: { id?: number|string; username?: string; email?: string; phone?: string; };
      }): Promise<User> {
        return this.userModel.findOne({ ...filter });
      }
    
      findAll(): Promise<User[]> {
        return this.userModel.findAll();
      }

      async create(
        createUserDto: CreateUserDto
    ): Promise<User| string>{
        const user = new User();
        
        const existingUserByEmail = await this.findOne({
            where: {email : createUserDto.email}
        });
        
        if(existingUserByEmail){
            throw new Error('Пользователь с таким email уже существует')
           
        }

        const existingUserByUsername = await this.findOne({
            where: {username : createUserDto.username}
        });
        
        if(existingUserByUsername){
            throw new Error('Пользователь с таким именем уже существует')
            
        }
        
        const existingUserByPhone = await this.findOne({
            where: {phone : createUserDto.phone}
        });
        
        if(existingUserByPhone){
            throw new Error('Пользователь с таким номером телефона уже существует')
            
        }
        

        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

        user.username = createUserDto.username;
        user.email = createUserDto.email;
        user.password = hashedPassword;
        user.phone = createUserDto.phone;
        user.admin = createUserDto.admin;

        return user.save();
        

    }

    async getUser(id:number):Promise<CreateUserDto|string>{
        const user = await this.findOne({where:{id}});
        if(!user){
            throw new Error("Такой пользователь не найден")
            
        }
        return user;
    }

    async login(
        userDto: UserDto
    ): Promise<User| string>{
        const existingUserByEmail = await this.findOne({
            where: {email: userDto.email}
        });
        if(!existingUserByEmail){
            throw new Error("Пользователь с такой почтой не найден")
        }
        const passwordValid = await bcrypt.compare(userDto.password, existingUserByEmail.password);
        
        if(!passwordValid){
            throw new Error("Пользователь с таким паролем не найден")
        } 
        return existingUserByEmail;
    }

    
    
}
    
    