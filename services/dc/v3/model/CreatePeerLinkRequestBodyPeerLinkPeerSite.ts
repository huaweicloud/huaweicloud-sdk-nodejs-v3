

export class CreatePeerLinkRequestBodyPeerLinkPeerSite {
    public type?: CreatePeerLinkRequestBodyPeerLinkPeerSiteTypeEnum | string;
    private 'gateway_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    public constructor(gatewayId?: string, projectId?: string, regionId?: string) { 
        this['gateway_id'] = gatewayId;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
    }
    public withType(type: CreatePeerLinkRequestBodyPeerLinkPeerSiteTypeEnum | string): CreatePeerLinkRequestBodyPeerLinkPeerSite {
        this['type'] = type;
        return this;
    }
    public withGatewayId(gatewayId: string): CreatePeerLinkRequestBodyPeerLinkPeerSite {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withProjectId(projectId: string): CreatePeerLinkRequestBodyPeerLinkPeerSite {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): CreatePeerLinkRequestBodyPeerLinkPeerSite {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePeerLinkRequestBodyPeerLinkPeerSiteTypeEnum {
    ER = 'ER'
}
