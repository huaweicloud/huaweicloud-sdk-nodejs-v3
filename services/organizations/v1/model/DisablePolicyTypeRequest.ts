import { PolicyTypeReqBody } from './PolicyTypeReqBody';


export class DisablePolicyTypeRequest {
    private 'X-Security-Token'?: string;
    public body?: PolicyTypeReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): DisablePolicyTypeRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: PolicyTypeReqBody): DisablePolicyTypeRequest {
        this['body'] = body;
        return this;
    }
}