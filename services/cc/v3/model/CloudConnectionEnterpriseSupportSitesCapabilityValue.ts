

export class CloudConnectionEnterpriseSupportSitesCapabilityValue {
    private 'support_sites'?: Array<string>;
    public constructor(supportSites?: Array<string>) { 
        this['support_sites'] = supportSites;
    }
    public withSupportSites(supportSites: Array<string>): CloudConnectionEnterpriseSupportSitesCapabilityValue {
        this['support_sites'] = supportSites;
        return this;
    }
    public set supportSites(supportSites: Array<string>  | undefined) {
        this['support_sites'] = supportSites;
    }
    public get supportSites(): Array<string> | undefined {
        return this['support_sites'];
    }
}