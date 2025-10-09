

export class ServicePrincipalMetadata {
    private 'service_principal'?: string;
    private 'service_catalog'?: string;
    private 'display_name'?: string;
    public description?: string;
    public constructor(servicePrincipal?: string, serviceCatalog?: string, displayName?: string, description?: string) { 
        this['service_principal'] = servicePrincipal;
        this['service_catalog'] = serviceCatalog;
        this['display_name'] = displayName;
        this['description'] = description;
    }
    public withServicePrincipal(servicePrincipal: string): ServicePrincipalMetadata {
        this['service_principal'] = servicePrincipal;
        return this;
    }
    public set servicePrincipal(servicePrincipal: string  | undefined) {
        this['service_principal'] = servicePrincipal;
    }
    public get servicePrincipal(): string | undefined {
        return this['service_principal'];
    }
    public withServiceCatalog(serviceCatalog: string): ServicePrincipalMetadata {
        this['service_catalog'] = serviceCatalog;
        return this;
    }
    public set serviceCatalog(serviceCatalog: string  | undefined) {
        this['service_catalog'] = serviceCatalog;
    }
    public get serviceCatalog(): string | undefined {
        return this['service_catalog'];
    }
    public withDisplayName(displayName: string): ServicePrincipalMetadata {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDescription(description: string): ServicePrincipalMetadata {
        this['description'] = description;
        return this;
    }
}