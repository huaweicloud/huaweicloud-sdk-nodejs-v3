

export class InstanceOverviewDTO {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'external_address'?: string;
    private 'intranet_address'?: string;
    private 'intranet_address_ipv6'?: string;
    private 'public_zone_id'?: string;
    private 'public_zone_name'?: string;
    private 'private_zone_id'?: string;
    private 'private_zone_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'current_namespace_publish_api_num'?: number;
    private 'all_namespace_publish_api_num'?: number;
    private 'api_publishable_num'?: number;
    public deletable?: boolean;
    private 'charge_status'?: string;
    private 'order_id'?: string;
    public constructor() { 
    }
    public withId(id: string): InstanceOverviewDTO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstanceOverviewDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InstanceOverviewDTO {
        this['description'] = description;
        return this;
    }
    public withExternalAddress(externalAddress: string): InstanceOverviewDTO {
        this['external_address'] = externalAddress;
        return this;
    }
    public set externalAddress(externalAddress: string  | undefined) {
        this['external_address'] = externalAddress;
    }
    public get externalAddress(): string | undefined {
        return this['external_address'];
    }
    public withIntranetAddress(intranetAddress: string): InstanceOverviewDTO {
        this['intranet_address'] = intranetAddress;
        return this;
    }
    public set intranetAddress(intranetAddress: string  | undefined) {
        this['intranet_address'] = intranetAddress;
    }
    public get intranetAddress(): string | undefined {
        return this['intranet_address'];
    }
    public withIntranetAddressIpv6(intranetAddressIpv6: string): InstanceOverviewDTO {
        this['intranet_address_ipv6'] = intranetAddressIpv6;
        return this;
    }
    public set intranetAddressIpv6(intranetAddressIpv6: string  | undefined) {
        this['intranet_address_ipv6'] = intranetAddressIpv6;
    }
    public get intranetAddressIpv6(): string | undefined {
        return this['intranet_address_ipv6'];
    }
    public withPublicZoneId(publicZoneId: string): InstanceOverviewDTO {
        this['public_zone_id'] = publicZoneId;
        return this;
    }
    public set publicZoneId(publicZoneId: string  | undefined) {
        this['public_zone_id'] = publicZoneId;
    }
    public get publicZoneId(): string | undefined {
        return this['public_zone_id'];
    }
    public withPublicZoneName(publicZoneName: string): InstanceOverviewDTO {
        this['public_zone_name'] = publicZoneName;
        return this;
    }
    public set publicZoneName(publicZoneName: string  | undefined) {
        this['public_zone_name'] = publicZoneName;
    }
    public get publicZoneName(): string | undefined {
        return this['public_zone_name'];
    }
    public withPrivateZoneId(privateZoneId: string): InstanceOverviewDTO {
        this['private_zone_id'] = privateZoneId;
        return this;
    }
    public set privateZoneId(privateZoneId: string  | undefined) {
        this['private_zone_id'] = privateZoneId;
    }
    public get privateZoneId(): string | undefined {
        return this['private_zone_id'];
    }
    public withPrivateZoneName(privateZoneName: string): InstanceOverviewDTO {
        this['private_zone_name'] = privateZoneName;
        return this;
    }
    public set privateZoneName(privateZoneName: string  | undefined) {
        this['private_zone_name'] = privateZoneName;
    }
    public get privateZoneName(): string | undefined {
        return this['private_zone_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceOverviewDTO {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreateTime(createTime: number): InstanceOverviewDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): InstanceOverviewDTO {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCurrentNamespacePublishApiNum(currentNamespacePublishApiNum: number): InstanceOverviewDTO {
        this['current_namespace_publish_api_num'] = currentNamespacePublishApiNum;
        return this;
    }
    public set currentNamespacePublishApiNum(currentNamespacePublishApiNum: number  | undefined) {
        this['current_namespace_publish_api_num'] = currentNamespacePublishApiNum;
    }
    public get currentNamespacePublishApiNum(): number | undefined {
        return this['current_namespace_publish_api_num'];
    }
    public withAllNamespacePublishApiNum(allNamespacePublishApiNum: number): InstanceOverviewDTO {
        this['all_namespace_publish_api_num'] = allNamespacePublishApiNum;
        return this;
    }
    public set allNamespacePublishApiNum(allNamespacePublishApiNum: number  | undefined) {
        this['all_namespace_publish_api_num'] = allNamespacePublishApiNum;
    }
    public get allNamespacePublishApiNum(): number | undefined {
        return this['all_namespace_publish_api_num'];
    }
    public withApiPublishableNum(apiPublishableNum: number): InstanceOverviewDTO {
        this['api_publishable_num'] = apiPublishableNum;
        return this;
    }
    public set apiPublishableNum(apiPublishableNum: number  | undefined) {
        this['api_publishable_num'] = apiPublishableNum;
    }
    public get apiPublishableNum(): number | undefined {
        return this['api_publishable_num'];
    }
    public withDeletable(deletable: boolean): InstanceOverviewDTO {
        this['deletable'] = deletable;
        return this;
    }
    public withChargeStatus(chargeStatus: string): InstanceOverviewDTO {
        this['charge_status'] = chargeStatus;
        return this;
    }
    public set chargeStatus(chargeStatus: string  | undefined) {
        this['charge_status'] = chargeStatus;
    }
    public get chargeStatus(): string | undefined {
        return this['charge_status'];
    }
    public withOrderId(orderId: string): InstanceOverviewDTO {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}