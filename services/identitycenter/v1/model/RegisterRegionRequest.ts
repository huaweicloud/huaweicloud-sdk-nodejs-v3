import { RegisterRegionReqBody } from './RegisterRegionReqBody';


export class RegisterRegionRequest {
    private 'X-Security-Token'?: string;
    public body?: RegisterRegionReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): RegisterRegionRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: RegisterRegionReqBody): RegisterRegionRequest {
        this['body'] = body;
        return this;
    }
}