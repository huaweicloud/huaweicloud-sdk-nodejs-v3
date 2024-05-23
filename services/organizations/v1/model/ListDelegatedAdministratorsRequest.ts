

export class ListDelegatedAdministratorsRequest {
    private 'service_principal'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
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