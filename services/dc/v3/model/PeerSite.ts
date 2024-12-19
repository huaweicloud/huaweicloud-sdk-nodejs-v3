

export class PeerSite {
    private 'gateway_id'?: string;
    private 'link_id'?: string;
    private 'region_id'?: string;
    private 'site_code'?: string;
    private 'project_id'?: string;
    public type?: PeerSiteTypeEnum | string;
    public constructor() { 
    }
    public withGatewayId(gatewayId: string): PeerSite {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withLinkId(linkId: string): PeerSite {
        this['link_id'] = linkId;
        return this;
    }
    public set linkId(linkId: string  | undefined) {
        this['link_id'] = linkId;
    }
    public get linkId(): string | undefined {
        return this['link_id'];
    }
    public withRegionId(regionId: string): PeerSite {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSiteCode(siteCode: string): PeerSite {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
    public withProjectId(projectId: string): PeerSite {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withType(type: PeerSiteTypeEnum | string): PeerSite {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PeerSiteTypeEnum {
    ER = 'ER',
    GDGW = 'GDGW'
}
