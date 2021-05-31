import { HttpService, Injectable } from '@nestjs/common';
import User from 'interfaces/User.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AppService
{
  private API_URL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor ( private readonly http: HttpService ) { }

  public findAll (): Observable<User[]>
  {
    try
    {
      let response = this.http.get( this.API_URL ).pipe( map( res => res.data ) );
      if ( response ) return response;
    }
    catch ( error )
    {
      throw new Error( "err while getting users" );
    }
  }

  public findOne ( id: number ): Observable<User>
  {
    try
    {
      let user = this.http.get( `${ this.API_URL }/${ id }` ).pipe( map( res => res.data ) );
      if ( user ) return user;
    }
    catch ( error )
    {
      throw new Error( "err while getting one user" );
    }
  }

  public addOne ( user: User ): Observable<User>
  {
    try
    {
      let newUser = this.http.post( ` ${ this.API_URL } ` ).pipe( map( res => res.data ) );
      if ( newUser ) return newUser;
    } catch ( error )
    {
      throw new Error( "err while adding one user" );
    }
  }

  public deleteOne ( id: number ): Observable<User>
  {
    try
    {
      let oldUser = this.http.get( `${ this.API_URL }/${ id }` ).pipe( map( res => res.data ) );
      if ( oldUser ) return oldUser;
    } catch ( error )
    {
      throw new Error( 'error while deleting user' );
    }

  }
}


