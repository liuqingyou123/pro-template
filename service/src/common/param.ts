import { ApiProperty } from "@nestjs/swagger"

export class TokenResponse {
    @ApiProperty({
        description: '用户的token'
    })
    token: string
}