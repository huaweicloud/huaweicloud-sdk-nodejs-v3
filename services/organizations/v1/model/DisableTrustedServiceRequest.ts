import { TrustedServiceReqBody } from './TrustedServiceReqBody';


export class DisableTrustedServiceRequest {
    private 'X-Security-Token'?: string;
    public body?: TrustedServiceReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): DisableTrustedServiceRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: TrustedServiceReqBody): DisableTrustedServiceRequest {
        this['body'] = body;
        return this;
    }
}