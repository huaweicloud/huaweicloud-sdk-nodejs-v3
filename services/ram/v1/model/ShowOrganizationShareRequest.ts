

export class ShowOrganizationShareRequest {
    private 'X-Security-Token'?: string;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ShowOrganizationShareRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
}