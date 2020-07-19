import { ApiProperty } from "@nestjs/swagger"
import { HttpException, HttpStatus } from "@nestjs/common"

export class AbnormalResponse {
    @ApiProperty({
        description: '状态码'
    })
    statusCode: number
    @ApiProperty({
        description: '错误消息'
    })
    message: string

    @ApiProperty({
        description: '错误的数据信息',
        required: false,
    })
    data?: string
}

export class ResponseException extends HttpException {
    constructor(response: string | Record<string, any>){
        super(response, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}