import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateStudentsRequestDto } from './request/CreateStudent.request.dto';

@Controller('students')
export class StudentsController {
    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() body:CreateStudentsRequestDto){

    }
}
