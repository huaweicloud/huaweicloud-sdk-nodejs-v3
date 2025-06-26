import { ResendAuthorizationMailReq } from './ResendAuthorizationMailReq';


export class SendAuthorizationMailRequest {
    private 'X-Language'?: string;
    public body?: ResendAuthorizationMailReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): SendAuthorizationMailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ResendAuthorizationMailReq): SendAuthorizationMailRequest {
        this['body'] = body;
        return this;
    }
}