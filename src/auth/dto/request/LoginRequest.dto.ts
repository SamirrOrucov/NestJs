import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { DtoPrefix, getValidationMessage, ValidationType } from "src/_common/enums/ValidationMessages.enum";

export class LoginRequestDto{
    @MaxLength(50,{message:getValidationMessage(DtoPrefix.EMAIL_OR_PHONE,ValidationType.MAX_LENTGH,50)})
    @MinLength(6,{message:getValidationMessage(DtoPrefix.EMAIL_OR_PHONE,ValidationType.MIN_LENTGH,6)})
    @IsNotEmpty({message:getValidationMessage(DtoPrefix.EMAIL_OR_PHONE,ValidationType.IS_NOT_EMPTY)})
    emailOrPhone:string;
    @MinLength(6,{message:getValidationMessage(DtoPrefix.EMAIL_OR_PHONE,ValidationType.MIN_LENTGH,6)})
    @MaxLength(50,{message:getValidationMessage(DtoPrefix.EMAIL_OR_PHONE,ValidationType.MAX_LENTGH,50)})
    @IsNotEmpty({message:getValidationMessage(DtoPrefix.EMAIL_OR_PHONE,ValidationType.IS_NOT_EMPTY)})
 
    password:string;
}