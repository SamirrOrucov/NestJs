import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginRequestDto } from './dto/request/LoginRequest.dto';
import { LoginResponseDto } from './dto/response/LoginResponse.dto';
import { Response } from 'express';
import { BaseResponse } from 'src/_base/response/base.response';
import { ResponseMessages } from 'src/_common/enums/ResponseMessages.enum';

@Controller('auth')
export class AuthController {
    @Post('login')
    login(@Body() body:LoginRequestDto,@Res() res:Response<LoginResponseDto>):void{
       const data= {accessToken:'',refreshToken:'',user:{lastname:'',name:'',salary:1000}}
        res.json(new BaseResponse(data,ResponseMessages.SUCCESS,201,true))
    }
    
    @Post('register')
    register(){}
    
    @Post('logout')
    logout(){}
    
    @Post('refresh-token')
    refreshToken(){}

}
