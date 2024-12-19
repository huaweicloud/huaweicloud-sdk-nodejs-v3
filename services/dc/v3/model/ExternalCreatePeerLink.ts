import { BandwidthInfoExternal } from './BandwidthInfoExternal';
import { PeerSiteExternal } from './PeerSiteExternal';


export class ExternalCreatePeerLink {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'global_dc_gateway_id'?: string;
    private 'bandwidth_info'?: BandwidthInfoExternal;
    private 'peer_site'?: PeerSiteExternal;
    public status?: string;
    public reason?: string;
    private 'created_time'?: Date;
    private 'updated_time'?: Date;
    public constructor(name?: string, peerSite?: PeerSiteExternal) { 
        this['name'] = name;
        this['peer_site'] = peerSite;
    }
    public withId(id: string): ExternalCreatePeerLink {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ExternalCreatePeerLink {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): ExternalCreatePeerLink {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ExternalCreatePeerLink {
        this['description'] = description;
        return this;
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): ExternalCreatePeerLink {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withBandwidthInfo(bandwidthInfo: BandwidthInfoExternal): ExternalCreatePeerLink {
        this['bandwidth_info'] = bandwidthInfo;
        return this;
    }
    public set bandwidthInfo(bandwidthInfo: BandwidthInfoExternal  | undefined) {
        this['bandwidth_info'] = bandwidthInfo;
    }
    public get bandwidthInfo(): BandwidthInfoExternal | undefined {
        return this['bandwidth_info'];
    }
    public withPeerSite(peerSite: PeerSiteExternal): ExternalCreatePeerLink {
        this['peer_site'] = peerSite;
        return this;
    }
    public set peerSite(peerSite: PeerSiteExternal  | undefined) {
        this['peer_site'] = peerSite;
    }
    public get peerSite(): PeerSiteExternal | undefined {
        return this['peer_site'];
    }
    public withStatus(status: string): ExternalCreatePeerLink {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): ExternalCreatePeerLink {
        this['reason'] = reason;
        return this;
    }
    public withCreatedTime(createdTime: Date): ExternalCreatePeerLink {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): Date | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: Date): ExternalCreatePeerLink {
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