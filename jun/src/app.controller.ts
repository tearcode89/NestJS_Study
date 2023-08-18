import { Controller, Get, Req, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ragdoll/:id')
  getHello(
    @Req() req: Request,
    @Body() body: any,
    @Param() param: any,
  ): string {
    console.log(req);
    console.log(body);
    console.log(param);
    return '술끊기';
    //return this.appService.getHello();
  }
}
