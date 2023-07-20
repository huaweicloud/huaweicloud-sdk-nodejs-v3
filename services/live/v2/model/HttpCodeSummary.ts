import { HttpCode } from './HttpCode';


export class HttpCodeSummary {
    private 'http_codes'?: Array<HttpCode>;
    public time?: string;
    public constructor() { 
    }
    public withHttpCodes(httpCodes: Array<HttpCode>): HttpCodeSummary {
        this['http_codes'] = httpCodes;
        return this;
    }
    public set httpCodes(httpCodes: Array<HttpCode>  | undefined) {
        this['http_codes'] = httpCodes;
    }
    public get httpCodes(): Array<HttpCode> | undefined {
        return this['http_codes'];
    }
    public withTime(time: string): HttpCodeSummary {
        this['time'] = time;
        return this;
    }
}