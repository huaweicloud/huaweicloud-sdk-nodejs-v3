

export class DelegatedServiceDto {
    private 'service_principal'?: string;
    private 'delegation_enabled_at'?: Date;
    public constructor(servicePrincipal?: string, delegationEnabledAt?: Date) { 
        this['service_principal'] = servicePrincipal;
        this['delegation_enabled_at'] = delegationEnabledAt;
    }
    public withServicePrincipal(servicePrincipal: string): DelegatedServiceDto {
        this['service_principal'] = servicePrincipal;
        return this;
    }
    public set servicePrincipal(servicePrincipal: string  | undefined) {
        this['service_principal'] = servicePrincipal;
    }
    public get servicePrincipal(): string | undefined {
        return this['service_principal'];
    }
    public withDelegationEnabledAt(delegationEnabledAt: Date): DelegatedServiceDto {
        this['delegation_enabled_at'] = delegationEnabledAt;
        return this;
    }
    public set delegationEnabledAt(delegationEnabledAt: Date  | undefined) {
        this['delegation_enabled_at'] = delegationEnabledAt;
    }
    public get delegationEnabledAt(): Date | undefined {
        return this['delegation_enabled_at'];
    }
}