import { GlobalDcGatewayStatus } from './GlobalDcGatewayStatus';
import { LocalesBody } from './LocalesBody';
import { Tag } from './Tag';


export class GlobalDcGatewayEntry {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    public reason?: string;
    private 'enterprise_project_id'?: string;
    private 'global_center_network_id'?: string;
    private 'bgp_asn'?: number;
    private 'region_id'?: string;
    private 'location_name'?: string;
    public locales?: LocalesBody;
    private 'current_peer_link_count'?: number;
    private 'available_peer_link_count'?: number;
    public tags?: Array<Tag>;
    private 'admin_state_up'?: boolean;
    public status?: GlobalDcGatewayStatus;
    private 'created_time'?: Date;
    private 'updated_time'?: Date;
    private 'address_family'?: GlobalDcGatewayEntryAddressFamilyEnum | string;
    public constructor() { 
    }
    public withId(id: string): GlobalDcGatewayEntry {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): GlobalDcGatewayEntry {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): GlobalDcGatewayEntry {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): GlobalDcGatewayEntry {
        this['description'] = description;
        return this;
    }
    public withReason(reason: string): GlobalDcGatewayEntry {
        this['reason'] = reason;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): GlobalDcGatewayEntry {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalCenterNetworkId(globalCenterNetworkId: string): GlobalDcGatewayEntry {
        this['global_center_network_id'] = globalCenterNetworkId;
        return this;
    }
    public set globalCenterNetworkId(globalCenterNetworkId: string  | undefined) {
        this['global_center_network_id'] = globalCenterNetworkId;
    }
    public get globalCenterNetworkId(): string | undefined {
        return this['global_center_network_id'];
    }
    public withBgpAsn(bgpAsn: number): GlobalDcGatewayEntry {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withRegionId(regionId: string): GlobalDcGatewayEntry {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withLocationName(locationName: string): GlobalDcGatewayEntry {
        this['location_name'] = locationName;
        return this;
    }
    public set locationName(locationName: string  | undefined) {
        this['location_name'] = locationName;
    }
    public get locationName(): string | undefined {
        return this['location_name'];
    }
    public withLocales(locales: LocalesBody): GlobalDcGatewayEntry {
        this['locales'] = locales;
        return this;
    }
    public withCurrentPeerLinkCount(currentPeerLinkCount: number): GlobalDcGatewayEntry {
        this['current_peer_link_count'] = currentPeerLinkCount;
        return this;
    }
    public set currentPeerLinkCount(currentPeerLinkCount: number  | undefined) {
        this['current_peer_link_count'] = currentPeerLinkCount;
    }
    public get currentPeerLinkCount(): number | undefined {
        return this['current_peer_link_count'];
    }
    public withAvailablePeerLinkCount(availablePeerLinkCount: number): GlobalDcGatewayEntry {
        this['available_peer_link_count'] = availablePeerLinkCount;
        return this;
    }
    public set availablePeerLinkCount(availablePeerLinkCount: number  | undefined) {
        this['available_peer_link_count'] = availablePeerLinkCount;
    }
    public get availablePeerLinkCount(): number | undefined {
        return this['available_peer_link_count'];
    }
    public withTags(tags: Array<Tag>): GlobalDcGatewayEntry {
        this['tags'] = tags;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): GlobalDcGatewayEntry {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withStatus(status: GlobalDcGatewayStatus): GlobalDcGatewayEntry {
        this['status'] = status;
        return this;
    }
    public withCreatedTime(createdTime: Date): GlobalDcGatewayEntry {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): Date | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: Date): GlobalDcGatewayEntry {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: Date  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): Date | undefined {
        return this['updated_time'];
    }
    public withAddressFamily(addressFamily: GlobalDcGatewayEntryAddressFamilyEnum | string): GlobalDcGatewayEntry {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: GlobalDcGatewayEntryAddressFamilyEnum | string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): GlobalDcGatewayEntryAddressFamilyEnum | string | undefined {
        return this['address_family'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlobalDcGatewayEntryAddressFamilyEnum {
    IPV4 = 'ipv4',
    DUAL = 'dual'
}
