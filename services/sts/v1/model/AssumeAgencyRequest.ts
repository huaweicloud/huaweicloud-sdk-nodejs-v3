import { AssumeAgencyReqBody } from './AssumeAgencyReqBody';


export class AssumeAgencyRequest {
    private 'X-Security-Token'?: string;
    public body?: AssumeAgencyReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): AssumeAgencyRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: AssumeAgencyReqBody): AssumeAgencyRequest {
        this['body'] = body;
        return this;
    }
}