import { TrustedServiceReqBody } from './TrustedServiceReqBody';


export class EnableTrustedServiceRequest {
    private 'X-Security-Token'?: string;
    public body?: TrustedServiceReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): EnableTrustedServiceRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: TrustedServiceReqBody): EnableTrustedServiceRequest {
        this['body'] = body;
        return this;
    }
}