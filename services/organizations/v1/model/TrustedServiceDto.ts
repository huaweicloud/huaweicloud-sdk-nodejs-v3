

export class TrustedServiceDto {
    private 'service_principal'?: string;
    private 'enabled_at'?: Date;
    public constructor(servicePrincipal?: string, enabledAt?: Date) { 
        this['service_principal'] = servicePrincipal;
        this['enabled_at'] = enabledAt;
    }
    public withServicePrincipal(servicePrincipal: string): TrustedServiceDto {
        this['service_principal'] = servicePrincipal;
        return this;
    }
    public set servicePrincipal(servicePrincipal: string  | undefined) {
        this['service_principal'] = servicePrincipal;
    }
    public get servicePrincipal(): string | undefined {
        return this['service_principal'];
    }
    public withEnabledAt(enabledAt: Date): TrustedServiceDto {
        this['enabled_at'] = enabledAt;
        return this;
    }
    public set enabledAt(enabledAt: Date  | undefined) {
        this['enabled_at'] = enabledAt;
    }
    public get enabledAt(): Date | undefined {
        return this['enabled_at'];
    }
}