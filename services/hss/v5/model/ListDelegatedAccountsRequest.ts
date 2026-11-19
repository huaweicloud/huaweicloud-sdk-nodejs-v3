

export class ListDelegatedAccountsRequest {
    private 'X-Security-Token'?: string;
    public region?: string;
    public refresh?: boolean;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ListDelegatedAccountsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withRegion(region: string): ListDelegatedAccountsRequest {
        this['region'] = region;
        return this;
    }
    public withRefresh(refresh: boolean): ListDelegatedAccountsRequest {
        this['refresh'] = refresh;
        return this;
    }
}