import { TagEntity } from './TagEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceResponse extends SdkResponse {
    public name?: string;
    public engine?: string;
    public status?: string;
    public description?: string;
    public type?: ShowInstanceResponseTypeEnum | string;
    public specification?: string;
    private 'engine_version'?: string;
    private 'instance_id'?: string;
    private 'charging_mode'?: number;
    private 'vpc_id'?: string;
    private 'vpc_name'?: string;
    private 'created_at'?: string;
    private 'product_id'?: string;
    private 'security_group_id'?: string;
    private 'security_group_name'?: string;
    private 'subnet_id'?: string;
    private 'subnet_name'?: string;
    private 'subnet_cidr'?: string;
    private 'available_zones'?: Array<string>;
    private 'available_zone_names'?: Array<string>;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    private 'enable_log_collection'?: boolean;
    private 'storage_space'?: number;
    private 'used_storage_space'?: number;
    private 'enable_publicip'?: boolean;
    private 'publicip_id'?: string;
    private 'publicip_address'?: string;
    private 'ssl_enable'?: boolean;
    private 'cross_vpc_info'?: string;
    private 'storage_resource_id'?: string;
    private 'storage_spec_code'?: string;
    private 'service_type'?: string;
    private 'storage_type'?: string;
    private 'extend_times'?: number;
    private 'ipv6_enable'?: boolean;
    private 'support_features'?: string;
    private 'disk_encrypted'?: boolean;
    private 'ces_version'?: string;
    private 'node_num'?: number;
    private 'new_spec_billing_enable'?: boolean;
    private 'enable_acl'?: boolean;
    private 'broker_num'?: number;
    private 'namesrv_address'?: string;
    private 'broker_address'?: string;
    private 'public_namesrv_address'?: string;
    private 'public_broker_address'?: string;
    private 'grpc_address'?: string;
    private 'public_grpc_address'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<TagEntity>;
    private 'total_storage_space'?: number;
    private 'resource_spec_code'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withEngine(engine: string): ShowInstanceResponse {
        this['engine'] = engine;
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
    public withType(type: ShowInstanceResponseTypeEnum | string): ShowInstanceResponse {
        this['type'] = type;
        return this;
    }
    public withSpecification(specification: string): ShowInstanceResponse {
        this['specification'] = specification;
        return this;
    }
    public withEngineVersion(engineVersion: string): ShowInstanceResponse {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withInstanceId(instanceId: string): ShowInstanceResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withChargingMode(chargingMode: number): ShowInstanceResponse {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withVpcId(vpcId: string): ShowInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): ShowInstanceResponse {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withCreatedAt(createdAt: string): ShowInstanceResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withProductId(productId: string): ShowInstanceResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ShowInstanceResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSecurityGroupName(securityGroupName: string): ShowInstanceResponse {
        this['security_group_name'] = securityGroupName;
        return this;
    }
    public set securityGroupName(securityGroupName: string  | undefined) {
        this['security_group_name'] = securityGroupName;
    }
    public get securityGroupName(): string | undefined {
        return this['security_group_name'];
    }
    public withSubnetId(subnetId: string): ShowInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): ShowInstanceResponse {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withSubnetCidr(subnetCidr: string): ShowInstanceResponse {
        this['subnet_cidr'] = subnetCidr;
        return this;
    }
    public set subnetCidr(subnetCidr: string  | undefined) {
        this['subnet_cidr'] = subnetCidr;
    }
    public get subnetCidr(): string | undefined {
        return this['subnet_cidr'];
    }
    public withAvailableZones(availableZones: Array<string>): ShowInstanceResponse {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withAvailableZoneNames(availableZoneNames: Array<string>): ShowInstanceResponse {
        this['available_zone_names'] = availableZoneNames;
        return this;
    }
    public set availableZoneNames(availableZoneNames: Array<string>  | undefined) {
        this['available_zone_names'] = availableZoneNames;
    }
    public get availableZoneNames(): Array<string> | undefined {
        return this['available_zone_names'];
    }
    public withUserId(userId: string): ShowInstanceResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ShowInstanceResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withMaintainBegin(maintainBegin: string): ShowInstanceResponse {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): ShowInstanceResponse {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
        return this['maintain_end'];
    }
    public withEnableLogCollection(enableLogCollection: boolean): ShowInstanceResponse {
        this['enable_log_collection'] = enableLogCollection;
        return this;
    }
    public set enableLogCollection(enableLogCollection: boolean  | undefined) {
        this['enable_log_collection'] = enableLogCollection;
    }
    public get enableLogCollection(): boolean | undefined {
        return this['enable_log_collection'];
    }
    public withStorageSpace(storageSpace: number): ShowInstanceResponse {
        this['storage_space'] = storageSpace;
        return this;
    }
    public set storageSpace(storageSpace: number  | undefined) {
        this['storage_space'] = storageSpace;
    }
    public get storageSpace(): number | undefined {
        return this['storage_space'];
    }
    public withUsedStorageSpace(usedStorageSpace: number): ShowInstanceResponse {
        this['used_storage_space'] = usedStorageSpace;
        return this;
    }
    public set usedStorageSpace(usedStorageSpace: number  | undefined) {
        this['used_storage_space'] = usedStorageSpace;
    }
    public get usedStorageSpace(): number | undefined {
        return this['used_storage_space'];
    }
    public withEnablePublicip(enablePublicip: boolean): ShowInstanceResponse {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean  | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip(): boolean | undefined {
        return this['enable_publicip'];
    }
    public withPublicipId(publicipId: string): ShowInstanceResponse {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withPublicipAddress(publicipAddress: string): ShowInstanceResponse {
        this['publicip_address'] = publicipAddress;
        return this;
    }
    public set publicipAddress(publicipAddress: string  | undefined) {
        this['publicip_address'] = publicipAddress;
    }
    public get publicipAddress(): string | undefined {
        return this['publicip_address'];
    }
    public withSslEnable(sslEnable: boolean): ShowInstanceResponse {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withCrossVpcInfo(crossVpcInfo: string): ShowInstanceResponse {
        this['cross_vpc_info'] = crossVpcInfo;
        return this;
    }
    public set crossVpcInfo(crossVpcInfo: string  | undefined) {
        this['cross_vpc_info'] = crossVpcInfo;
    }
    public get crossVpcInfo(): string | undefined {
        return this['cross_vpc_info'];
    }
    public withStorageResourceId(storageResourceId: string): ShowInstanceResponse {
        this['storage_resource_id'] = storageResourceId;
        return this;
    }
    public set storageResourceId(storageResourceId: string  | undefined) {
        this['storage_resource_id'] = storageResourceId;
    }
    public get storageResourceId(): string | undefined {
        return this['storage_resource_id'];
    }
    public withStorageSpecCode(storageSpecCode: string): ShowInstanceResponse {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: string  | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode(): string | undefined {
        return this['storage_spec_code'];
    }
    public withServiceType(serviceType: string): ShowInstanceResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withStorageType(storageType: string): ShowInstanceResponse {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): string | undefined {
        return this['storage_type'];
    }
    public withExtendTimes(extendTimes: number): ShowInstanceResponse {
        this['extend_times'] = extendTimes;
        return this;
    }
    public set extendTimes(extendTimes: number  | undefined) {
        this['extend_times'] = extendTimes;
    }
    public get extendTimes(): number | undefined {
        return this['extend_times'];
    }
    public withIpv6Enable(ipv6Enable: boolean): ShowInstanceResponse {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withSupportFeatures(supportFeatures: string): ShowInstanceResponse {
        this['support_features'] = supportFeatures;
        return this;
    }
    public set supportFeatures(supportFeatures: string  | undefined) {
        this['support_features'] = supportFeatures;
    }
    public get supportFeatures(): string | undefined {
        return this['support_features'];
    }
    public withDiskEncrypted(diskEncrypted: boolean): ShowInstanceResponse {
        this['disk_encrypted'] = diskEncrypted;
        return this;
    }
    public set diskEncrypted(diskEncrypted: boolean  | undefined) {
        this['disk_encrypted'] = diskEncrypted;
    }
    public get diskEncrypted(): boolean | undefined {
        return this['disk_encrypted'];
    }
    public withCesVersion(cesVersion: string): ShowInstanceResponse {
        this['ces_version'] = cesVersion;
        return this;
    }
    public set cesVersion(cesVersion: string  | undefined) {
        this['ces_version'] = cesVersion;
    }
    public get cesVersion(): string | undefined {
        return this['ces_version'];
    }
    public withNodeNum(nodeNum: number): ShowInstanceResponse {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withNewSpecBillingEnable(newSpecBillingEnable: boolean): ShowInstanceResponse {
        this['new_spec_billing_enable'] = newSpecBillingEnable;
        return this;
    }
    public set newSpecBillingEnable(newSpecBillingEnable: boolean  | undefined) {
        this['new_spec_billing_enable'] = newSpecBillingEnable;
    }
    public get newSpecBillingEnable(): boolean | undefined {
        return this['new_spec_billing_enable'];
    }
    public withEnableAcl(enableAcl: boolean): ShowInstanceResponse {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean  | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl(): boolean | undefined {
        return this['enable_acl'];
    }
    public withBrokerNum(brokerNum: number): ShowInstanceResponse {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: number  | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum(): number | undefined {
        return this['broker_num'];
    }
    public withNamesrvAddress(namesrvAddress: string): ShowInstanceResponse {
        this['namesrv_address'] = namesrvAddress;
        return this;
    }
    public set namesrvAddress(namesrvAddress: string  | undefined) {
        this['namesrv_address'] = namesrvAddress;
    }
    public get namesrvAddress(): string | undefined {
        return this['namesrv_address'];
    }
    public withBrokerAddress(brokerAddress: string): ShowInstanceResponse {
        this['broker_address'] = brokerAddress;
        return this;
    }
    public set brokerAddress(brokerAddress: string  | undefined) {
        this['broker_address'] = brokerAddress;
    }
    public get brokerAddress(): string | undefined {
        return this['broker_address'];
    }
    public withPublicNamesrvAddress(publicNamesrvAddress: string): ShowInstanceResponse {
        this['public_namesrv_address'] = publicNamesrvAddress;
        return this;
    }
    public set publicNamesrvAddress(publicNamesrvAddress: string  | undefined) {
        this['public_namesrv_address'] = publicNamesrvAddress;
    }
    public get publicNamesrvAddress(): string | undefined {
        return this['public_namesrv_address'];
    }
    public withPublicBrokerAddress(publicBrokerAddress: string): ShowInstanceResponse {
        this['public_broker_address'] = publicBrokerAddress;
        return this;
    }
    public set publicBrokerAddress(publicBrokerAddress: string  | undefined) {
        this['public_broker_address'] = publicBrokerAddress;
    }
    public get publicBrokerAddress(): string | undefined {
        return this['public_broker_address'];
    }
    public withGrpcAddress(grpcAddress: string): ShowInstanceResponse {
        this['grpc_address'] = grpcAddress;
        return this;
    }
    public set grpcAddress(grpcAddress: string  | undefined) {
        this['grpc_address'] = grpcAddress;
    }
    public get grpcAddress(): string | undefined {
        return this['grpc_address'];
    }
    public withPublicGrpcAddress(publicGrpcAddress: string): ShowInstanceResponse {
        this['public_grpc_address'] = publicGrpcAddress;
        return this;
    }
    public set publicGrpcAddress(publicGrpcAddress: string  | undefined) {
        this['public_grpc_address'] = publicGrpcAddress;
    }
    public get publicGrpcAddress(): string | undefined {
        return this['public_grpc_address'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowInstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<TagEntity>): ShowInstanceResponse {
        this['tags'] = tags;
        return this;
    }
    public withTotalStorageSpace(totalStorageSpace: number): ShowInstanceResponse {
        this['total_storage_space'] = totalStorageSpace;
        return this;
    }
    public set totalStorageSpace(totalStorageSpace: number  | undefined) {
        this['total_storage_space'] = totalStorageSpace;
    }
    public get totalStorageSpace(): number | undefined {
        return this['total_storage_space'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ShowInstanceResponse {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceResponseTypeEnum {
    SINGLE = 'single',
    CLUSTER = 'cluster'
}
