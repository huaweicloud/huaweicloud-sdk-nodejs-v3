import { Locale } from './Locale';
import { Tag } from './Tag';


export class ExternalListGlobalDcGateways {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'global_center_network_id'?: string;
    private 'site_network_id'?: string;
    private 'cloud_connection_id'?: string;
    private 'bgp_asn'?: number;
    private 'region_id'?: string;
    private 'location_name'?: string;
    private 'address_family'?: string;
    public locales?: Locale;
    private 'current_peer_link_count'?: number;
    private 'available_peer_link_count'?: number;
    private 'admin_state_up'?: boolean;
    public status?: string;
    public reason?: string;
    private 'created_time'?: Date;
    private 'updated_time'?: Date;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withId(id: string): ExternalListGlobalDcGateways {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ExternalListGlobalDcGateways {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): ExternalListGlobalDcGateways {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ExternalListGlobalDcGateways {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExternalListGlobalDcGateways {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalCenterNetworkId(globalCenterNetworkId: string): ExternalListGlobalDcGateways {
        this['global_center_network_id'] = globalCenterNetworkId;
        return this;
    }
    public set globalCenterNetworkId(globalCenterNetworkId: string  | undefined) {
        this['global_center_network_id'] = globalCenterNetworkId;
    }
    public get globalCenterNetworkId(): string | undefined {
        return this['global_center_network_id'];
    }
    public withSiteNetworkId(siteNetworkId: string): ExternalListGlobalDcGateways {
        this['site_network_id'] = siteNetworkId;
        return this;
    }
    public set siteNetworkId(siteNetworkId: string  | undefined) {
        this['site_network_id'] = siteNetworkId;
    }
    public get siteNetworkId(): string | undefined {
        return this['site_network_id'];
    }
    public withCloudConnectionId(cloudConnectionId: string): ExternalListGlobalDcGateways {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withBgpAsn(bgpAsn: number): ExternalListGlobalDcGateways {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withRegionId(regionId: string): ExternalListGlobalDcGateways {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withLocationName(locationName: string): ExternalListGlobalDcGateways {
        this['location_name'] = locationName;
        return this;
    }
    public set locationName(locationName: string  | undefined) {
        this['location_name'] = locationName;
    }
    public get locationName(): string | undefined {
        return this['location_name'];
    }
    public withAddressFamily(addressFamily: string): ExternalListGlobalDcGateways {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): string | undefined {
        return this['address_family'];
    }
    public withLocales(locales: Locale): ExternalListGlobalDcGateways {
        this['locales'] = locales;
        return this;
    }
    public withCurrentPeerLinkCount(currentPeerLinkCount: number): ExternalListGlobalDcGateways {
        this['current_peer_link_count'] = currentPeerLinkCount;
        return this;
    }
    public set currentPeerLinkCount(currentPeerLinkCount: number  | undefined) {
        this['current_peer_link_count'] = currentPeerLinkCount;
    }
    public get currentPeerLinkCount(): number | undefined {
        return this['current_peer_link_count'];
    }
    public withAvailablePeerLinkCount(availablePeerLinkCount: number): ExternalListGlobalDcGateways {
        this['available_peer_link_count'] = availablePeerLinkCount;
        return this;
    }
    public set availablePeerLinkCount(availablePeerLinkCount: number  | undefined) {
        this['available_peer_link_count'] = availablePeerLinkCount;
    }
    public get availablePeerLinkCount(): number | undefined {
        return this['available_peer_link_count'];
    }
    public withAdminStateUp(adminStateUp: boolean): ExternalListGlobalDcGateways {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withStatus(status: string): ExternalListGlobalDcGateways {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): ExternalListGlobalDcGateways {
        this['reason'] = reason;
        return this;
    }
    public withCreatedTime(createdTime: Date): ExternalListGlobalDcGateways {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): Date | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: Date): ExternalListGlobalDcGateways {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: Date  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): Date | undefined {
        return this['updated_time'];
    }
    public withTags(tags: Array<Tag>): ExternalListGlobalDcGateways {
        this['tags'] = tags;
        return this;
    }
}