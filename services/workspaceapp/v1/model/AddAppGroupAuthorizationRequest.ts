import { AppGroupAuthorizeReq } from './AppGroupAuthorizeReq';


export class AddAppGroupAuthorizationRequest {
    private 'X-Language'?: string;
    public body?: AppGroupAuthorizeReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): AddAppGroupAuthorizationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: AppGroupAuthorizeReq): AddAppGroupAuthorizationRequest {
        this['body'] = body;
        return this;
    }
}