import { CreateResourceShareReqBody } from './CreateResourceShareReqBody';


export class CreateResourceShareRequest {
    private 'X-Security-Token'?: string;
    public body?: CreateResourceShareReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): CreateResourceShareRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: CreateResourceShareReqBody): CreateResourceShareRequest {
        this['body'] = body;
        return this;
    }
}