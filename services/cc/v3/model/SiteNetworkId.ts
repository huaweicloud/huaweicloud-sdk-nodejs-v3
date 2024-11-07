

export class SiteNetworkId {
    private 'site_network_id'?: string;
    public constructor(siteNetworkId?: string) { 
        this['site_network_id'] = siteNetworkId;
    }
    public withSiteNetworkId(siteNetworkId: string): SiteNetworkId {
        this['site_network_id'] = siteNetworkId;
        return this;
    }
    public set siteNetworkId(siteNetworkId: string  | undefined) {
        this['site_network_id'] = siteNetworkId;
    }
    public get siteNetworkId(): string | undefined {
        return this['site_network_id'];
    }
}