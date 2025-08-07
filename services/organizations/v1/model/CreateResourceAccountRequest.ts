import { CreateResourceAccountReqBody } from './CreateResourceAccountReqBody';


export class CreateResourceAccountRequest {
    private 'X-Security-Token'?: string;
    public body?: CreateResourceAccountReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): CreateResourceAccountRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: CreateResourceAccountReqBody): CreateResourceAccountRequest {
        this['body'] = body;
        return this;
    }
}