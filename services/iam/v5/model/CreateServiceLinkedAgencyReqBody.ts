

export class CreateServiceLinkedAgencyReqBody {
    private 'service_principal'?: string;
    public description?: string;
    public constructor(servicePrincipal?: string) { 
        this['service_principal'] = servicePrincipal;
    }
    public withServicePrincipal(servicePrincipal: string): CreateServiceLinkedAgencyReqBody {
        this['service_principal'] = servicePrincipal;
        return this;
    }
    public set servicePrincipal(servicePrincipal: string  | undefined) {
        this['service_principal'] = servicePrincipal;
    }
    public get servicePrincipal(): string | undefined {
        return this['service_principal'];
    }
    public withDescription(description: string): CreateServiceLinkedAgencyReqBody {
        this['description'] = description;
        return this;
    }
}