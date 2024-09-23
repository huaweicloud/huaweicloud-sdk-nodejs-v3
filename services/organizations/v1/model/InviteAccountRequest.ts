import { InviteAccountReqBody } from './InviteAccountReqBody';


export class InviteAccountRequest {
    private 'X-Security-Token'?: string;
    public body?: InviteAccountReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): InviteAccountRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: InviteAccountReqBody): InviteAccountRequest {
        this['body'] = body;
        return this;
    }
}