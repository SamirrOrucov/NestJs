import { IsNotEmpty, MaxLength } from "class-validator";
import { DtoPrefix, getValidationMessage, ValidationType } from "src/_common/enums/ValidationMessages.enum";

export class CreateStudentsRequestDto{
    @MaxLength(25,{message:getValidationMessage(DtoPrefix.NAME,ValidationType.MAX_LENTGH,25)})
    @IsNotEmpty({message:getValidationMessage(DtoPrefix.NAME,ValidationType.IS_NOT_EMPTY)})
    name:string;
    @IsNotEmpty({message:getValidationMessage(DtoPrefix.LASTNAME,ValidationType.IS_NOT_EMPTY)})
    lastname:string;
    @IsNotEmpty({message:getValidationMessage(DtoPrefix.İDENTİTY_NUMBER,ValidationType.IS_NOT_EMPTY)})
    identityNumber:number

}