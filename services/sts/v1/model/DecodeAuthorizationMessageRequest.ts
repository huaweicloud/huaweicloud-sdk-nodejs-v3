import { DecodeAuthorizationMessageReq } from './DecodeAuthorizationMessageReq';


export class DecodeAuthorizationMessageRequest {
    private 'X-Security-Token'?: string;
    public body?: DecodeAuthorizationMessageReq;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): DecodeAuthorizationMessageRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: DecodeAuthorizationMessageReq): DecodeAuthorizationMessageRequest {
        this['body'] = body;
        return this;
    }
}