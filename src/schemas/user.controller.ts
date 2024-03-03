import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: any) {
    const { firstName, lastName, email } = body;
    return this.userService.createUser(firstName, lastName, email);
  }
}
