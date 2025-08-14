

export class ListApplicationProvidersRequest {
    public limit?: number;
    public marker?: string;
    private 'X-Security-Token'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListApplicationProvidersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListApplicationProvidersRequest {
        this['marker'] = marker;
        return this;
    }
    public withXSecurityToken(xSecurityToken: string): ListApplicationProvidersRequest {
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