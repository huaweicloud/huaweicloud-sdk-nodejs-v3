

export class ValidateAdminRequest {
    private 'X-Security-Token'?: string;
    public region?: string;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ValidateAdminRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withRegion(region: string): ValidateAdminRequest {
        this['region'] = region;
        return this;
    }
}