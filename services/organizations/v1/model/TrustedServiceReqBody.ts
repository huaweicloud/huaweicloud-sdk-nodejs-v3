

export class TrustedServiceReqBody {
    private 'service_principal'?: string;
    public constructor(servicePrincipal?: string) { 
        this['service_principal'] = servicePrincipal;
    }
    public withServicePrincipal(servicePrincipal: string): TrustedServiceReqBody {
        this['service_principal'] = servicePrincipal;
        return this;
    }
    public set servicePrincipal(servicePrincipal: string  | undefined) {
        this['service_principal'] = servicePrincipal;
    }
    public get servicePrincipal(): string | undefined {
        return this['service_principal'];
    }
}