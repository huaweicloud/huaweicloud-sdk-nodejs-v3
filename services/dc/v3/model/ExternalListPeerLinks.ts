import { BandwidthInfoExternal } from './BandwidthInfoExternal';
import { PeerSiteExternal } from './PeerSiteExternal';


export class ExternalListPeerLinks {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'global_dc_gateway_id'?: string;
    private 'instance_id'?: string;
    private 'create_owner'?: string;
    private 'bandwidth_info'?: BandwidthInfoExternal;
    private 'peer_site'?: PeerSiteExternal;
    public status?: string;
    public reason?: string;
    private 'created_time'?: Date;
    private 'updated_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): ExternalListPeerLinks {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ExternalListPeerLinks {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): ExternalListPeerLinks {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ExternalListPeerLinks {
        this['description'] = description;
        return this;
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): ExternalListPeerLinks {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withInstanceId(instanceId: string): ExternalListPeerLinks {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCreateOwner(createOwner: string): ExternalListPeerLinks {
        this['create_owner'] = createOwner;
        return this;
    }
    public set createOwner(createOwner: string  | undefined) {
        this['create_owner'] = createOwner;
    }
    public get createOwner(): string | undefined {
        return this['create_owner'];
    }
    public withBandwidthInfo(bandwidthInfo: BandwidthInfoExternal): ExternalListPeerLinks {
        this['bandwidth_info'] = bandwidthInfo;
        return this;
    }
    public set bandwidthInfo(bandwidthInfo: BandwidthInfoExternal  | undefined) {
        this['bandwidth_info'] = bandwidthInfo;
    }
    public get bandwidthInfo(): BandwidthInfoExternal | undefined {
        return this['bandwidth_info'];
    }
    public withPeerSite(peerSite: PeerSiteExternal): ExternalListPeerLinks {
        this['peer_site'] = peerSite;
        return this;
    }
    public set peerSite(peerSite: PeerSiteExternal  | undefined) {
        this['peer_site'] = peerSite;
    }
    public get peerSite(): PeerSiteExternal | undefined {
        return this['peer_site'];
    }
    public withStatus(status: string): ExternalListPeerLinks {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): ExternalListPeerLinks {
        this['reason'] = reason;
        return this;
    }
    public withCreatedTime(createdTime: Date): ExternalListPeerLinks {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): Date | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: Date): ExternalListPeerLinks {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: Date  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): Date | undefined {
        return this['updated_time'];
    }
}