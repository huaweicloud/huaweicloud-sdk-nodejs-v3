import { DelegatedAdministratorReqBody } from './DelegatedAdministratorReqBody';


export class RegisterDelegatedAdministratorRequest {
    private 'X-Security-Token'?: string;
    public body?: DelegatedAdministratorReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): RegisterDelegatedAdministratorRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: DelegatedAdministratorReqBody): RegisterDelegatedAdministratorRequest {
        this['body'] = body;
        return this;
    }
}