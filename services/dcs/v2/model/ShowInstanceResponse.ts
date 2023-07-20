import { BandwidthInfo } from './BandwidthInfo';
import { DomainNameInfo } from './DomainNameInfo';
import { Features } from './Features';
import { InstanceBackupPolicy } from './InstanceBackupPolicy';
import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceResponse extends SdkResponse {
    private 'vpc_name'?: string;
    private 'charging_mode'?: number;
    private 'vpc_id'?: string;
    private 'user_name'?: string;
    private 'created_at'?: string;
    public description?: string;
    private 'security_group_id'?: string;
    private 'security_group_name'?: string;
    private 'max_memory'?: number;
    private 'used_memory'?: number;
    public capacity?: number;
    private 'capacity_minor'?: string;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    public engine?: string;
    private 'no_password_access'?: string;
    public ip?: string;
    private 'instance_backup_policy'?: InstanceBackupPolicy;
    private 'az_codes'?: Array<string>;
    private 'access_user'?: string;
    private 'instance_id'?: string;
    public port?: number;
    private 'user_id'?: string;
    public name?: string;
    private 'spec_code'?: string;
    private 'subnet_id'?: string;
    private 'subnet_name'?: string;
    private 'subnet_cidr'?: string;
    private 'engine_version'?: string;
    private 'order_id'?: string;
    public status?: string;
    private 'domain_name'?: string;
    private 'readonly_domain_name'?: string;
    private 'enable_publicip'?: boolean;
    private 'publicip_id'?: string;
    private 'publicip_address'?: string;
    private 'enable_ssl'?: boolean;
    private 'service_upgrade'?: boolean;
    private 'service_task_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'backend_addrs'?: string;
    public features?: Features;
    private 'domain_name_info'?: DomainNameInfo;
    private 'transparent_client_ip_enable'?: boolean;
    private 'sub_status'?: string;
    public tags?: Array<ResourceTag>;
    private 'cpu_type'?: string;
    private 'enterprise_project_name'?: string;
    private 'update_at'?: string;
    private 'product_type'?: ShowInstanceResponseProductTypeEnum | string;
    private 'storage_type'?: ShowInstanceResponseStorageTypeEnum | string;
    private 'launched_at'?: string;
    private 'cache_mode'?: ShowInstanceResponseCacheModeEnum | string;
    private 'support_slow_log_flag'?: string;
    private 'db_number'?: number;
    private 'replica_count'?: number;
    private 'sharding_count'?: number;
    private 'bandwidth_info'?: BandwidthInfo;
    public constructor() { 
        super();
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
    public withDescription(description: string): ShowInstanceResponse {
        this['description'] = description;
        return this;
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
    public withMaxMemory(maxMemory: number): ShowInstanceResponse {
        this['max_memory'] = maxMemory;
        return this;
    }
    public set maxMemory(maxMemory: number  | undefined) {
        this['max_memory'] = maxMemory;
    }
    public get maxMemory(): number | undefined {
        return this['max_memory'];
    }
    public withUsedMemory(usedMemory: number): ShowInstanceResponse {
        this['used_memory'] = usedMemory;
        return this;
    }
    public set usedMemory(usedMemory: number  | undefined) {
        this['used_memory'] = usedMemory;
    }
    public get usedMemory(): number | undefined {
        return this['used_memory'];
    }
    public withCapacity(capacity: number): ShowInstanceResponse {
        this['capacity'] = capacity;
        return this;
    }
    public withCapacityMinor(capacityMinor: string): ShowInstanceResponse {
        this['capacity_minor'] = capacityMinor;
        return this;
    }
    public set capacityMinor(capacityMinor: string  | undefined) {
        this['capacity_minor'] = capacityMinor;
    }
    public get capacityMinor(): string | undefined {
        return this['capacity_minor'];
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
    public withEngine(engine: string): ShowInstanceResponse {
        this['engine'] = engine;
        return this;
    }
    public withNoPasswordAccess(noPasswordAccess: string): ShowInstanceResponse {
        this['no_password_access'] = noPasswordAccess;
        return this;
    }
    public set noPasswordAccess(noPasswordAccess: string  | undefined) {
        this['no_password_access'] = noPasswordAccess;
    }
    public get noPasswordAccess(): string | undefined {
        return this['no_password_access'];
    }
    public withIp(ip: string): ShowInstanceResponse {
        this['ip'] = ip;
        return this;
    }
    public withInstanceBackupPolicy(instanceBackupPolicy: InstanceBackupPolicy): ShowInstanceResponse {
        this['instance_backup_policy'] = instanceBackupPolicy;
        return this;
    }
    public set instanceBackupPolicy(instanceBackupPolicy: InstanceBackupPolicy  | undefined) {
        this['instance_backup_policy'] = instanceBackupPolicy;
    }
    public get instanceBackupPolicy(): InstanceBackupPolicy | undefined {
        return this['instance_backup_policy'];
    }
    public withAzCodes(azCodes: Array<string>): ShowInstanceResponse {
        this['az_codes'] = azCodes;
        return this;
    }
    public set azCodes(azCodes: Array<string>  | undefined) {
        this['az_codes'] = azCodes;
    }
    public get azCodes(): Array<string> | undefined {
        return this['az_codes'];
    }
    public withAccessUser(accessUser: string): ShowInstanceResponse {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string  | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser(): string | undefined {
        return this['access_user'];
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
    public withPort(port: number): ShowInstanceResponse {
        this['port'] = port;
        return this;
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
    public withName(name: string): ShowInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withSpecCode(specCode: string): ShowInstanceResponse {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
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
    public withOrderId(orderId: string): ShowInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withStatus(status: string): ShowInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withDomainName(domainName: string): ShowInstanceResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withReadonlyDomainName(readonlyDomainName: string): ShowInstanceResponse {
        this['readonly_domain_name'] = readonlyDomainName;
        return this;
    }
    public set readonlyDomainName(readonlyDomainName: string  | undefined) {
        this['readonly_domain_name'] = readonlyDomainName;
    }
    public get readonlyDomainName(): string | undefined {
        return this['readonly_domain_name'];
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
    public withEnableSsl(enableSsl: boolean): ShowInstanceResponse {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withServiceUpgrade(serviceUpgrade: boolean): ShowInstanceResponse {
        this['service_upgrade'] = serviceUpgrade;
        return this;
    }
    public set serviceUpgrade(serviceUpgrade: boolean  | undefined) {
        this['service_upgrade'] = serviceUpgrade;
    }
    public get serviceUpgrade(): boolean | undefined {
        return this['service_upgrade'];
    }
    public withServiceTaskId(serviceTaskId: string): ShowInstanceResponse {
        this['service_task_id'] = serviceTaskId;
        return this;
    }
    public set serviceTaskId(serviceTaskId: string  | undefined) {
        this['service_task_id'] = serviceTaskId;
    }
    public get serviceTaskId(): string | undefined {
        return this['service_task_id'];
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
    public withBackendAddrs(backendAddrs: string): ShowInstanceResponse {
        this['backend_addrs'] = backendAddrs;
        return this;
    }
    public set backendAddrs(backendAddrs: string  | undefined) {
        this['backend_addrs'] = backendAddrs;
    }
    public get backendAddrs(): string | undefined {
        return this['backend_addrs'];
    }
    public withFeatures(features: Features): ShowInstanceResponse {
        this['features'] = features;
        return this;
    }
    public withDomainNameInfo(domainNameInfo: DomainNameInfo): ShowInstanceResponse {
        this['domain_name_info'] = domainNameInfo;
        return this;
    }
    public set domainNameInfo(domainNameInfo: DomainNameInfo  | undefined) {
        this['domain_name_info'] = domainNameInfo;
    }
    public get domainNameInfo(): DomainNameInfo | undefined {
        return this['domain_name_info'];
    }
    public withTransparentClientIpEnable(transparentClientIpEnable: boolean): ShowInstanceResponse {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
        return this;
    }
    public set transparentClientIpEnable(transparentClientIpEnable: boolean  | undefined) {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
    }
    public get transparentClientIpEnable(): boolean | undefined {
        return this['transparent_client_ip_enable'];
    }
    public withSubStatus(subStatus: string): ShowInstanceResponse {
        this['sub_status'] = subStatus;
        return this;
    }
    public set subStatus(subStatus: string  | undefined) {
        this['sub_status'] = subStatus;
    }
    public get subStatus(): string | undefined {
        return this['sub_status'];
    }
    public withTags(tags: Array<ResourceTag>): ShowInstanceResponse {
        this['tags'] = tags;
        return this;
    }
    public withCpuType(cpuType: string): ShowInstanceResponse {
        this['cpu_type'] = cpuType;
        return this;
    }
    public set cpuType(cpuType: string  | undefined) {
        this['cpu_type'] = cpuType;
    }
    public get cpuType(): string | undefined {
        return this['cpu_type'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ShowInstanceResponse {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withUpdateAt(updateAt: string): ShowInstanceResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withProductType(productType: ShowInstanceResponseProductTypeEnum | string): ShowInstanceResponse {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: ShowInstanceResponseProductTypeEnum | string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): ShowInstanceResponseProductTypeEnum | string | undefined {
        return this['product_type'];
    }
    public withStorageType(storageType: ShowInstanceResponseStorageTypeEnum | string): ShowInstanceResponse {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: ShowInstanceResponseStorageTypeEnum | string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): ShowInstanceResponseStorageTypeEnum | string | undefined {
        return this['storage_type'];
    }
    public withLaunchedAt(launchedAt: string): ShowInstanceResponse {
        this['launched_at'] = launchedAt;
        return this;
    }
    public set launchedAt(launchedAt: string  | undefined) {
        this['launched_at'] = launchedAt;
    }
    public get launchedAt(): string | undefined {
        return this['launched_at'];
    }
    public withCacheMode(cacheMode: ShowInstanceResponseCacheModeEnum | string): ShowInstanceResponse {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: ShowInstanceResponseCacheModeEnum | string  | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode(): ShowInstanceResponseCacheModeEnum | string | undefined {
        return this['cache_mode'];
    }
    public withSupportSlowLogFlag(supportSlowLogFlag: string): ShowInstanceResponse {
        this['support_slow_log_flag'] = supportSlowLogFlag;
        return this;
    }
    public set supportSlowLogFlag(supportSlowLogFlag: string  | undefined) {
        this['support_slow_log_flag'] = supportSlowLogFlag;
    }
    public get supportSlowLogFlag(): string | undefined {
        return this['support_slow_log_flag'];
    }
    public withDbNumber(dbNumber: number): ShowInstanceResponse {
        this['db_number'] = dbNumber;
        return this;
    }
    public set dbNumber(dbNumber: number  | undefined) {
        this['db_number'] = dbNumber;
    }
    public get dbNumber(): number | undefined {
        return this['db_number'];
    }
    public withReplicaCount(replicaCount: number): ShowInstanceResponse {
        this['replica_count'] = replicaCount;
        return this;
    }
    public set replicaCount(replicaCount: number  | undefined) {
        this['replica_count'] = replicaCount;
    }
    public get replicaCount(): number | undefined {
        return this['replica_count'];
    }
    public withShardingCount(shardingCount: number): ShowInstanceResponse {
        this['sharding_count'] = shardingCount;
        return this;
    }
    public set shardingCount(shardingCount: number  | undefined) {
        this['sharding_count'] = shardingCount;
    }
    public get shardingCount(): number | undefined {
        return this['sharding_count'];
    }
    public withBandwidthInfo(bandwidthInfo: BandwidthInfo): ShowInstanceResponse {
        this['bandwidth_info'] = bandwidthInfo;
        return this;
    }
    public set bandwidthInfo(bandwidthInfo: BandwidthInfo  | undefined) {
        this['bandwidth_info'] = bandwidthInfo;
    }
    public get bandwidthInfo(): BandwidthInfo | undefined {
        return this['bandwidth_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceResponseProductTypeEnum {
    GENERIC = 'generic',
    ENTERPRISE = 'enterprise'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceResponseStorageTypeEnum {
    DRAM = 'DRAM'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceResponseCacheModeEnum {
    SINGLE = 'single',
    HA = 'ha',
    HA_RW_SPLIT = 'ha_rw_split',
    PROXY = 'proxy',
    CLUSTER = 'cluster'
}
