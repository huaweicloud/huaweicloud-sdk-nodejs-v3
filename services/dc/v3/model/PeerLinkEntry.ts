import { BandWidthInfo } from './BandWidthInfo';
import { PeerLinkStatus } from './PeerLinkStatus';
import { PeerSite } from './PeerSite';


export class PeerLinkEntry {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    public reason?: string;
    private 'global_dc_gateway_id'?: string;
    private 'bandwidth_info'?: BandWidthInfo;
    private 'peer_site'?: PeerSite;
    public status?: PeerLinkStatus;
    private 'created_time'?: Date;
    private 'updated_time'?: Date;
    private 'create_owner'?: Date;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withId(id: string): PeerLinkEntry {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): PeerLinkEntry {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): PeerLinkEntry {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PeerLinkEntry {
        this['description'] = description;
        return this;
    }
    public withReason(reason: string): PeerLinkEntry {
        this['reason'] = reason;
        return this;
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): PeerLinkEntry {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withBandwidthInfo(bandwidthInfo: BandWidthInfo): PeerLinkEntry {
        this['bandwidth_info'] = bandwidthInfo;
        return this;
    }
    public set bandwidthInfo(bandwidthInfo: BandWidthInfo  | undefined) {
        this['bandwidth_info'] = bandwidthInfo;
    }
    public get bandwidthInfo(): BandWidthInfo | undefined {
        return this['bandwidth_info'];
    }
    public withPeerSite(peerSite: PeerSite): PeerLinkEntry {
        this['peer_site'] = peerSite;
        return this;
    }
    public set peerSite(peerSite: PeerSite  | undefined) {
        this['peer_site'] = peerSite;
    }
    public get peerSite(): PeerSite | undefined {
        return this['peer_site'];
    }
    public withStatus(status: PeerLinkStatus): PeerLinkEntry {
        this['status'] = status;
        return this;
    }
    public withCreatedTime(createdTime: Date): PeerLinkEntry {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): Date | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: Date): PeerLinkEntry {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: Date  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): Date | undefined {
        return this['updated_time'];
    }
    public withCreateOwner(createOwner: Date): PeerLinkEntry {
        this['create_owner'] = createOwner;
        return this;
    }
    public set createOwner(createOwner: Date  | undefined) {
        this['create_owner'] = createOwner;
    }
    public get createOwner(): Date | undefined {
        return this['create_owner'];
    }
    public withInstanceId(instanceId: string): PeerLinkEntry {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}