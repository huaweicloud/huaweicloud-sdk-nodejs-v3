import { TagEntity } from './TagEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceResponse extends SdkResponse {
    private 'access_user'?: string | undefined;
    private 'broker_num'?: ShowInstanceResponseBrokerNumEnum | undefined;
    public name?: string;
    public engine?: string;
    private 'engine_version'?: string | undefined;
    public specification?: string;
    private 'storage_space'?: number | undefined;
    private 'used_storage_space'?: number | undefined;
    private 'connect_address'?: string | undefined;
    public port?: number;
    public status?: string;
    public description?: string;
    private 'instance_id'?: string | undefined;
    private 'resource_spec_code'?: string | undefined;
    private 'charging_mode'?: number | undefined;
    private 'vpc_id'?: string | undefined;
    private 'vpc_name'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'user_id'?: string | undefined;
    private 'user_name'?: string | undefined;
    private 'order_id'?: string | undefined;
    private 'maintain_begin'?: string | undefined;
    private 'maintain_end'?: string | undefined;
    private 'enable_publicip'?: boolean | undefined;
    private 'publicip_address'?: string | undefined;
    private 'publicip_id'?: string | undefined;
    private 'management_connect_address'?: string | undefined;
    private 'ssl_enable'?: boolean | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'is_logical_volume'?: boolean | undefined;
    private 'extend_times'?: number | undefined;
    public type?: ShowInstanceResponseTypeEnum;
    private 'product_id'?: string | undefined;
    private 'security_group_id'?: string | undefined;
    private 'security_group_name'?: string | undefined;
    private 'subnet_id'?: string | undefined;
    private 'available_zones'?: Array<string> | undefined;
    private 'total_storage_space'?: number | undefined;
    private 'storage_resource_id'?: string | undefined;
    private 'storage_spec_code'?: string | undefined;
    private 'ipv6_enable'?: boolean | undefined;
    private 'ipv6_connect_addresses'?: Array<string> | undefined;
    public tags?: Array<TagEntity>;
    public constructor() { 
        super();
    }
    public withAccessUser(accessUser: string): ShowInstanceResponse {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser() {
        return this['access_user'];
    }
    public withBrokerNum(brokerNum: ShowInstanceResponseBrokerNumEnum): ShowInstanceResponse {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: ShowInstanceResponseBrokerNumEnum | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum() {
        return this['broker_num'];
    }
    public withName(name: string): ShowInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withEngine(engine: string): ShowInstanceResponse {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): ShowInstanceResponse {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withSpecification(specification: string): ShowInstanceResponse {
        this['specification'] = specification;
        return this;
    }
    public withStorageSpace(storageSpace: number): ShowInstanceResponse {
        this['storage_space'] = storageSpace;
        return this;
    }
    public set storageSpace(storageSpace: number | undefined) {
        this['storage_space'] = storageSpace;
    }
    public get storageSpace() {
        return this['storage_space'];
    }
    public withUsedStorageSpace(usedStorageSpace: number): ShowInstanceResponse {
        this['used_storage_space'] = usedStorageSpace;
        return this;
    }
    public set usedStorageSpace(usedStorageSpace: number | undefined) {
        this['used_storage_space'] = usedStorageSpace;
    }
    public get usedStorageSpace() {
        return this['used_storage_space'];
    }
    public withConnectAddress(connectAddress: string): ShowInstanceResponse {
        this['connect_address'] = connectAddress;
        return this;
    }
    public set connectAddress(connectAddress: string | undefined) {
        this['connect_address'] = connectAddress;
    }
    public get connectAddress() {
        return this['connect_address'];
    }
    public withPort(port: number): ShowInstanceResponse {
        this['port'] = port;
        return this;
    }
    public withStatus(status: string): ShowInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ShowInstanceResponse {
        this['description'] = description;
        return this;
    }
    public withInstanceId(instanceId: string): ShowInstanceResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ShowInstanceResponse {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode() {
        return this['resource_spec_code'];
    }
    public withChargingMode(chargingMode: number): ShowInstanceResponse {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withVpcId(vpcId: string): ShowInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): ShowInstanceResponse {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName() {
        return this['vpc_name'];
    }
    public withCreatedAt(createdAt: string): ShowInstanceResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUserId(userId: string): ShowInstanceResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withUserName(userName: string): ShowInstanceResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withOrderId(orderId: string): ShowInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withMaintainBegin(maintainBegin: string): ShowInstanceResponse {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin() {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): ShowInstanceResponse {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd() {
        return this['maintain_end'];
    }
    public withEnablePublicip(enablePublicip: boolean): ShowInstanceResponse {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip() {
        return this['enable_publicip'];
    }
    public withPublicipAddress(publicipAddress: string): ShowInstanceResponse {
        this['publicip_address'] = publicipAddress;
        return this;
    }
    public set publicipAddress(publicipAddress: string | undefined) {
        this['publicip_address'] = publicipAddress;
    }
    public get publicipAddress() {
        return this['publicip_address'];
    }
    public withPublicipId(publicipId: string): ShowInstanceResponse {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withManagementConnectAddress(managementConnectAddress: string): ShowInstanceResponse {
        this['management_connect_address'] = managementConnectAddress;
        return this;
    }
    public set managementConnectAddress(managementConnectAddress: string | undefined) {
        this['management_connect_address'] = managementConnectAddress;
    }
    public get managementConnectAddress() {
        return this['management_connect_address'];
    }
    public withSslEnable(sslEnable: boolean): ShowInstanceResponse {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable() {
        return this['ssl_enable'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowInstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withIsLogicalVolume(isLogicalVolume: boolean): ShowInstanceResponse {
        this['is_logical_volume'] = isLogicalVolume;
        return this;
    }
    public set isLogicalVolume(isLogicalVolume: boolean | undefined) {
        this['is_logical_volume'] = isLogicalVolume;
    }
    public get isLogicalVolume() {
        return this['is_logical_volume'];
    }
    public withExtendTimes(extendTimes: number): ShowInstanceResponse {
        this['extend_times'] = extendTimes;
        return this;
    }
    public set extendTimes(extendTimes: number | undefined) {
        this['extend_times'] = extendTimes;
    }
    public get extendTimes() {
        return this['extend_times'];
    }
    public withType(type: ShowInstanceResponseTypeEnum): ShowInstanceResponse {
        this['type'] = type;
        return this;
    }
    public withProductId(productId: string): ShowInstanceResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ShowInstanceResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withSecurityGroupName(securityGroupName: string): ShowInstanceResponse {
        this['security_group_name'] = securityGroupName;
        return this;
    }
    public set securityGroupName(securityGroupName: string | undefined) {
        this['security_group_name'] = securityGroupName;
    }
    public get securityGroupName() {
        return this['security_group_name'];
    }
    public withSubnetId(subnetId: string): ShowInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withAvailableZones(availableZones: Array<string>): ShowInstanceResponse {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withTotalStorageSpace(totalStorageSpace: number): ShowInstanceResponse {
        this['total_storage_space'] = totalStorageSpace;
        return this;
    }
    public set totalStorageSpace(totalStorageSpace: number | undefined) {
        this['total_storage_space'] = totalStorageSpace;
    }
    public get totalStorageSpace() {
        return this['total_storage_space'];
    }
    public withStorageResourceId(storageResourceId: string): ShowInstanceResponse {
        this['storage_resource_id'] = storageResourceId;
        return this;
    }
    public set storageResourceId(storageResourceId: string | undefined) {
        this['storage_resource_id'] = storageResourceId;
    }
    public get storageResourceId() {
        return this['storage_resource_id'];
    }
    public withStorageSpecCode(storageSpecCode: string): ShowInstanceResponse {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: string | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode() {
        return this['storage_spec_code'];
    }
    public withIpv6Enable(ipv6Enable: boolean): ShowInstanceResponse {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable() {
        return this['ipv6_enable'];
    }
    public withIpv6ConnectAddresses(ipv6ConnectAddresses: Array<string>): ShowInstanceResponse {
        this['ipv6_connect_addresses'] = ipv6ConnectAddresses;
        return this;
    }
    public set ipv6ConnectAddresses(ipv6ConnectAddresses: Array<string> | undefined) {
        this['ipv6_connect_addresses'] = ipv6ConnectAddresses;
    }
    public get ipv6ConnectAddresses() {
        return this['ipv6_connect_addresses'];
    }
    public withTags(tags: Array<TagEntity>): ShowInstanceResponse {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceResponseBrokerNumEnum {
    NUMBER_1 = 1,
    NUMBER_3 = 3,
    NUMBER_5 = 5,
    NUMBER_7 = 7
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceResponseTypeEnum {
    SINGLE = 'single',
    CLUSTER = 'cluster'
}
