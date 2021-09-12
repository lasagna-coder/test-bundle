import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {

  getData():Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('success')
    })
  }

}
