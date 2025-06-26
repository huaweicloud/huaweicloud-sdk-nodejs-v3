import { ResendAuthorizedMailReq } from './ResendAuthorizedMailReq';


export class SendAuthorizedMailRequest {
    private 'X-Language'?: string;
    public body?: ResendAuthorizedMailReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): SendAuthorizedMailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ResendAuthorizedMailReq): SendAuthorizedMailRequest {
        this['body'] = body;
        return this;
    }
}