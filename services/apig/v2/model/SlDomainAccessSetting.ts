

export class SlDomainAccessSetting {
    private 'sl_domain_access_enabled'?: boolean;
    public constructor(slDomainAccessEnabled?: boolean) { 
        this['sl_domain_access_enabled'] = slDomainAccessEnabled;
    }
    public withSlDomainAccessEnabled(slDomainAccessEnabled: boolean): SlDomainAccessSetting {
        this['sl_domain_access_enabled'] = slDomainAccessEnabled;
        return this;
    }
    public set slDomainAccessEnabled(slDomainAccessEnabled: boolean  | undefined) {
        this['sl_domain_access_enabled'] = slDomainAccessEnabled;
    }
    public get slDomainAccessEnabled(): boolean | undefined {
        return this['sl_domain_access_enabled'];
    }
}