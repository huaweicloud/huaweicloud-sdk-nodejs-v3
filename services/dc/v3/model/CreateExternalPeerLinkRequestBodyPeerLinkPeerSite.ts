

export class CreateExternalPeerLinkRequestBodyPeerLinkPeerSite {
    private 'gateway_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    public constructor(gatewayId?: string, projectId?: string, regionId?: string) { 
        this['gateway_id'] = gatewayId;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
    }
    public withGatewayId(gatewayId: string): CreateExternalPeerLinkRequestBodyPeerLinkPeerSite {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withProjectId(projectId: string): CreateExternalPeerLinkRequestBodyPeerLinkPeerSite {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): CreateExternalPeerLinkRequestBodyPeerLinkPeerSite {
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