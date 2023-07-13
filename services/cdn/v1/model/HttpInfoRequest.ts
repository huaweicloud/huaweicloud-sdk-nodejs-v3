import { HttpInfoRequestBody } from './HttpInfoRequestBody';


export class HttpInfoRequest {
    public https: HttpInfoRequestBody;
    public constructor(https?: any) { 
        this['https'] = https;
    }
    public withHttps(https: HttpInfoRequestBody): HttpInfoRequest {
        this['https'] = https;
        return this;
    }
}