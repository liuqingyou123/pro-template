import { ApiProperty } from "@nestjs/swagger"

export class TokenRequest {
    @ApiProperty({
        description: '用户的token'
    })
    token: string
}