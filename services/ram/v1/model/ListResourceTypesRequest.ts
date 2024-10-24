

export class ListResourceTypesRequest {
    private 'X-Security-Token'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ListResourceTypesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withLimit(limit: number): ListResourceTypesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourceTypesRequest {
        this['marker'] = marker;
        return this;
    }
}