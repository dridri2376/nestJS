import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import User from 'interfaces/User.interface';
import { AppService } from './app.service';

@Controller( 'users' )
export class AppController
{
  listOfUsers: Array<any>;
  constructor ( private readonly appService: AppService ) { }

  @Get()
  findAll ()
  {
    return this.appService.findAll()
  }


  @Get( ':id' )
  findOne ( @Param( 'id' ) id: number )
  {
    return this.appService.findOne( id );
  }

  @Post()
  addOne ( @Body() newUser: User )
  {
    return this.appService.addOne( newUser );
  }

  @Delete( ":id" )
  deleteOne ( @Param( 'id' ) id: number )
  {
    return this.appService.deleteOne( id );
  }
}
