import { Controller, Post, Query} from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

class LoginDto {
    @ApiProperty({
        description: '账号'
    })
    username: string

    @ApiProperty({
        description: '密码'
    })
    password: string
}

@ApiTags('用户信息接口')
@Controller('user')
export class UserController {

    @Post('/login')
    login(
        @Query() param: LoginDto)
    {
        console.log(param)
        return '成功'
    }

}
