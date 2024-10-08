import { ResponseMessages } from "src/_common/enums/ResponseMessages.enum"

export class BaseResponse<T>{
    data:T
    success:boolean
    status:number
    message:string
    constructor(data:T,message:string,status:number,success:boolean){
        this.data=data
        this.message=message
        this.status=status
        this.success=success
    }
}