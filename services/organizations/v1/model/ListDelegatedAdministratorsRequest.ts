

export class ListDelegatedAdministratorsRequest {
    private 'X-Security-Token'?: string;
    private 'service_principal'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ListDelegatedAdministratorsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withServicePrincipal(servicePrincipal: string): ListDelegatedAdministratorsRequest {
        this['service_principal'] = servicePrincipal;
        return this;
    }
    public set servicePrincipal(servicePrincipal: string  | undefined) {
        this['service_principal'] = servicePrincipal;
    }
    public get servicePrincipal(): string | undefined {
        return this['service_principal'];
    }
    public withLimit(limit: number): ListDelegatedAdministratorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDelegatedAdministratorsRequest {
        this['marker'] = marker;
        return this;
    }
}