import { BasicInfoVo } from './BasicInfoVo';


export class ProtocolReqVo {
    public basic?: BasicInfoVo;
    public headers?: { [key: string]: string; };
    public method?: string;
    private 'request_body'?: string;
    public url?: string;
    public constructor() { 
    }
    public withBasic(basic: BasicInfoVo): ProtocolReqVo {
        this['basic'] = basic;
        return this;
    }
    public withHeaders(headers: { [key: string]: string; }): ProtocolReqVo {
        this['headers'] = headers;
        return this;
    }
    public withMethod(method: string): ProtocolReqVo {
        this['method'] = method;
        return this;
    }
    public withRequestBody(requestBody: string): ProtocolReqVo {
        this['request_body'] = requestBody;
        return this;
    }
    public set requestBody(requestBody: string  | undefined) {
        this['request_body'] = requestBody;
    }
    public get requestBody(): string | undefined {
        return this['request_body'];
    }
    public withUrl(url: string): ProtocolReqVo {
        this['url'] = url;
        return this;
    }
}