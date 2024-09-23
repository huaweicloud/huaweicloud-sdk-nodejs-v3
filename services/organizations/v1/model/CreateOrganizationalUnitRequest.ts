import { CreateOrganizationalUnitReqBody } from './CreateOrganizationalUnitReqBody';


export class CreateOrganizationalUnitRequest {
    private 'X-Security-Token'?: string;
    public body?: CreateOrganizationalUnitReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): CreateOrganizationalUnitRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: CreateOrganizationalUnitReqBody): CreateOrganizationalUnitRequest {
        this['body'] = body;
        return this;
    }
}