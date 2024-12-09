import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';

@Module({
  
  controllers: [],
  providers: [],
  imports:[
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345qwert',
      database: 'Users',
      models: [User],
     autoLoadModels: true,
    
   // synchronize:true,
    
    
    }),
    UsersModule
  ]
})
export class AppModule {}
