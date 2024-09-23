import { DelegatedAdministratorReqBody } from './DelegatedAdministratorReqBody';


export class DeregisterDelegatedAdministratorRequest {
    private 'X-Security-Token'?: string;
    public body?: DelegatedAdministratorReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): DeregisterDelegatedAdministratorRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: DelegatedAdministratorReqBody): DeregisterDelegatedAdministratorRequest {
        this['body'] = body;
        return this;
    }
}