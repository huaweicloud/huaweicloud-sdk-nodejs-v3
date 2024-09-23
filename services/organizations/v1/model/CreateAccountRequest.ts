import { CreateAccountReqBody } from './CreateAccountReqBody';


export class CreateAccountRequest {
    private 'X-Security-Token'?: string;
    public body?: CreateAccountReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): CreateAccountRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: CreateAccountReqBody): CreateAccountRequest {
        this['body'] = body;
        return this;
    }
}