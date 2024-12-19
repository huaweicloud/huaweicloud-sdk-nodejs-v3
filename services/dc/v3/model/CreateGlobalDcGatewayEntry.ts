import { GlobalDcGatewayStatus } from './GlobalDcGatewayStatus';
import { Tag } from './Tag';


export class CreateGlobalDcGatewayEntry {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'global_center_network_id'?: string;
    private 'bgp_asn'?: number;
    private 'region_id'?: string;
    private 'location_name'?: string;
    private 'current_peer_link_count'?: string;
    private 'available_peer_link_count'?: string;
    public tags?: Array<Tag>;
    private 'admin_state_up'?: boolean;
    public status?: GlobalDcGatewayStatus;
    private 'created_time'?: Date;
    private 'address_family'?: CreateGlobalDcGatewayEntryAddressFamilyEnum | string;
    public constructor() { 
    }
    public withId(id: string): CreateGlobalDcGatewayEntry {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): CreateGlobalDcGatewayEntry {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): CreateGlobalDcGatewayEntry {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateGlobalDcGatewayEntry {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateGlobalDcGatewayEntry {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalCenterNetworkId(globalCenterNetworkId: string): CreateGlobalDcGatewayEntry {
        this['global_center_network_id'] = globalCenterNetworkId;
        return this;
    }
    public set globalCenterNetworkId(globalCenterNetworkId: string  | undefined) {
        this['global_center_network_id'] = globalCenterNetworkId;
    }
    public get globalCenterNetworkId(): string | undefined {
        return this['global_center_network_id'];
    }
    public withBgpAsn(bgpAsn: number): CreateGlobalDcGatewayEntry {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withRegionId(regionId: string): CreateGlobalDcGatewayEntry {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withLocationName(locationName: string): CreateGlobalDcGatewayEntry {
        this['location_name'] = locationName;
        return this;
    }
    public set locationName(locationName: string  | undefined) {
        this['location_name'] = locationName;
    }
    public get locationName(): string | undefined {
        return this['location_name'];
    }
    public withCurrentPeerLinkCount(currentPeerLinkCount: string): CreateGlobalDcGatewayEntry {
        this['current_peer_link_count'] = currentPeerLinkCount;
        return this;
    }
    public set currentPeerLinkCount(currentPeerLinkCount: string  | undefined) {
        this['current_peer_link_count'] = currentPeerLinkCount;
    }
    public get currentPeerLinkCount(): string | undefined {
        return this['current_peer_link_count'];
    }
    public withAvailablePeerLinkCount(availablePeerLinkCount: string): CreateGlobalDcGatewayEntry {
        this['available_peer_link_count'] = availablePeerLinkCount;
        return this;
    }
    public set availablePeerLinkCount(availablePeerLinkCount: string  | undefined) {
        this['available_peer_link_count'] = availablePeerLinkCount;
    }
    public get availablePeerLinkCount(): string | undefined {
        return this['available_peer_link_count'];
    }
    public withTags(tags: Array<Tag>): CreateGlobalDcGatewayEntry {
        this['tags'] = tags;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateGlobalDcGatewayEntry {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withStatus(status: GlobalDcGatewayStatus): CreateGlobalDcGatewayEntry {
        this['status'] = status;
        return this;
    }
    public withCreatedTime(createdTime: Date): CreateGlobalDcGatewayEntry {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): Date | undefined {
        return this['created_time'];
    }
    public withAddressFamily(addressFamily: CreateGlobalDcGatewayEntryAddressFamilyEnum | string): CreateGlobalDcGatewayEntry {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: CreateGlobalDcGatewayEntryAddressFamilyEnum | string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): CreateGlobalDcGatewayEntryAddressFamilyEnum | string | undefined {
        return this['address_family'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateGlobalDcGatewayEntryAddressFamilyEnum {
    IPV4 = 'ipv4',
    DUAL = 'dual'
}
