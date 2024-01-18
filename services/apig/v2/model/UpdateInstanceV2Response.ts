import { CbcOperationLock } from './CbcOperationLock';
import { EndpointService } from './EndpointService';
import { IpDetails } from './IpDetails';
import { NodeIps } from './NodeIps';
import { RespInstanceBase } from './RespInstanceBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceV2Response extends SdkResponse {
    public id?: string;
    private 'project_id'?: string;
    private 'instance_name'?: string;
    public status?: UpdateInstanceV2ResponseStatusEnum | string;
    private 'instance_status'?: UpdateInstanceV2ResponseInstanceStatusEnum | number;
    public type?: string;
    public spec?: UpdateInstanceV2ResponseSpecEnum | string;
    private 'create_time'?: number;
    private 'enterprise_project_id'?: string;
    private 'eip_address'?: string;
    private 'charging_mode'?: UpdateInstanceV2ResponseChargingModeEnum | number;
    private 'cbc_metadata'?: string;
    private 'loadbalancer_provider'?: UpdateInstanceV2ResponseLoadbalancerProviderEnum | string;
    private 'cbc_operation_locks'?: Array<CbcOperationLock>;
    public description?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    private 'ingress_ip'?: string;
    private 'ingress_ip_v6'?: string;
    private 'user_id'?: string;
    private 'nat_eip_ipv6_cidr'?: string;
    private 'eip_ipv6_address'?: string;
    private 'nat_eip_address'?: string;
    private 'bandwidth_size'?: number;
    private 'bandwidth_charging_mode'?: string;
    private 'available_zone_ids'?: string;
    private 'instance_version'?: string;
    private 'virsubnet_id'?: string;
    private 'roma_eip_address'?: string;
    public listeners?: object;
    private 'supported_features'?: Array<string>;
    private 'endpoint_service'?: EndpointService;
    private 'endpoint_services'?: Array<EndpointService>;
    private 'node_ips'?: NodeIps;
    public publicips?: Array<IpDetails>;
    public privateips?: Array<IpDetails>;
    private 'is_releasable'?: boolean;
    private 'ingress_bandwidth_charging_mode'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateInstanceV2Response {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): UpdateInstanceV2Response {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceName(instanceName: string): UpdateInstanceV2Response {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withStatus(status: UpdateInstanceV2ResponseStatusEnum | string): UpdateInstanceV2Response {
        this['status'] = status;
        return this;
    }
    public withInstanceStatus(instanceStatus: UpdateInstanceV2ResponseInstanceStatusEnum | number): UpdateInstanceV2Response {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: UpdateInstanceV2ResponseInstanceStatusEnum | number  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): UpdateInstanceV2ResponseInstanceStatusEnum | number | undefined {
        return this['instance_status'];
    }
    public withType(type: string): UpdateInstanceV2Response {
        this['type'] = type;
        return this;
    }
    public withSpec(spec: UpdateInstanceV2ResponseSpecEnum | string): UpdateInstanceV2Response {
        this['spec'] = spec;
        return this;
    }
    public withCreateTime(createTime: number): UpdateInstanceV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateInstanceV2Response {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEipAddress(eipAddress: string): UpdateInstanceV2Response {
        this['eip_address'] = eipAddress;
        return this;
    }
    public set eipAddress(eipAddress: string  | undefined) {
        this['eip_address'] = eipAddress;
    }
    public get eipAddress(): string | undefined {
        return this['eip_address'];
    }
    public withChargingMode(chargingMode: UpdateInstanceV2ResponseChargingModeEnum | number): UpdateInstanceV2Response {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: UpdateInstanceV2ResponseChargingModeEnum | number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): UpdateInstanceV2ResponseChargingModeEnum | number | undefined {
        return this['charging_mode'];
    }
    public withCbcMetadata(cbcMetadata: string): UpdateInstanceV2Response {
        this['cbc_metadata'] = cbcMetadata;
        return this;
    }
    public set cbcMetadata(cbcMetadata: string  | undefined) {
        this['cbc_metadata'] = cbcMetadata;
    }
    public get cbcMetadata(): string | undefined {
        return this['cbc_metadata'];
    }
    public withLoadbalancerProvider(loadbalancerProvider: UpdateInstanceV2ResponseLoadbalancerProviderEnum | string): UpdateInstanceV2Response {
        this['loadbalancer_provider'] = loadbalancerProvider;
        return this;
    }
    public set loadbalancerProvider(loadbalancerProvider: UpdateInstanceV2ResponseLoadbalancerProviderEnum | string  | undefined) {
        this['loadbalancer_provider'] = loadbalancerProvider;
    }
    public get loadbalancerProvider(): UpdateInstanceV2ResponseLoadbalancerProviderEnum | string | undefined {
        return this['loadbalancer_provider'];
    }
    public withCbcOperationLocks(cbcOperationLocks: Array<CbcOperationLock>): UpdateInstanceV2Response {
        this['cbc_operation_locks'] = cbcOperationLocks;
        return this;
    }
    public set cbcOperationLocks(cbcOperationLocks: Array<CbcOperationLock>  | undefined) {
        this['cbc_operation_locks'] = cbcOperationLocks;
    }
    public get cbcOperationLocks(): Array<CbcOperationLock> | undefined {
        return this['cbc_operation_locks'];
    }
    public withDescription(description: string): UpdateInstanceV2Response {
        this['description'] = description;
        return this;
    }
    public withVpcId(vpcId: string): UpdateInstanceV2Response {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): UpdateInstanceV2Response {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): UpdateInstanceV2Response {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withMaintainBegin(maintainBegin: string): UpdateInstanceV2Response {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): UpdateInstanceV2Response {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
        return this['maintain_end'];
    }
    public withIngressIp(ingressIp: string): UpdateInstanceV2Response {
        this['ingress_ip'] = ingressIp;
        return this;
    }
    public set ingressIp(ingressIp: string  | undefined) {
        this['ingress_ip'] = ingressIp;
    }
    public get ingressIp(): string | undefined {
        return this['ingress_ip'];
    }
    public withIngressIpV6(ingressIpV6: string): UpdateInstanceV2Response {
        this['ingress_ip_v6'] = ingressIpV6;
        return this;
    }
    public set ingressIpV6(ingressIpV6: string  | undefined) {
        this['ingress_ip_v6'] = ingressIpV6;
    }
    public get ingressIpV6(): string | undefined {
        return this['ingress_ip_v6'];
    }
    public withUserId(userId: string): UpdateInstanceV2Response {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withNatEipIpv6Cidr(natEipIpv6Cidr: string): UpdateInstanceV2Response {
        this['nat_eip_ipv6_cidr'] = natEipIpv6Cidr;
        return this;
    }
    public set natEipIpv6Cidr(natEipIpv6Cidr: string  | undefined) {
        this['nat_eip_ipv6_cidr'] = natEipIpv6Cidr;
    }
    public get natEipIpv6Cidr(): string | undefined {
        return this['nat_eip_ipv6_cidr'];
    }
    public withEipIpv6Address(eipIpv6Address: string): UpdateInstanceV2Response {
        this['eip_ipv6_address'] = eipIpv6Address;
        return this;
    }
    public set eipIpv6Address(eipIpv6Address: string  | undefined) {
        this['eip_ipv6_address'] = eipIpv6Address;
    }
    public get eipIpv6Address(): string | undefined {
        return this['eip_ipv6_address'];
    }
    public withNatEipAddress(natEipAddress: string): UpdateInstanceV2Response {
        this['nat_eip_address'] = natEipAddress;
        return this;
    }
    public set natEipAddress(natEipAddress: string  | undefined) {
        this['nat_eip_address'] = natEipAddress;
    }
    public get natEipAddress(): string | undefined {
        return this['nat_eip_address'];
    }
    public withBandwidthSize(bandwidthSize: number): UpdateInstanceV2Response {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withBandwidthChargingMode(bandwidthChargingMode: string): UpdateInstanceV2Response {
        this['bandwidth_charging_mode'] = bandwidthChargingMode;
        return this;
    }
    public set bandwidthChargingMode(bandwidthChargingMode: string  | undefined) {
        this['bandwidth_charging_mode'] = bandwidthChargingMode;
    }
    public get bandwidthChargingMode(): string | undefined {
        return this['bandwidth_charging_mode'];
    }
    public withAvailableZoneIds(availableZoneIds: string): UpdateInstanceV2Response {
        this['available_zone_ids'] = availableZoneIds;
        return this;
    }
    public set availableZoneIds(availableZoneIds: string  | undefined) {
        this['available_zone_ids'] = availableZoneIds;
    }
    public get availableZoneIds(): string | undefined {
        return this['available_zone_ids'];
    }
    public withInstanceVersion(instanceVersion: string): UpdateInstanceV2Response {
        this['instance_version'] = instanceVersion;
        return this;
    }
    public set instanceVersion(instanceVersion: string  | undefined) {
        this['instance_version'] = instanceVersion;
    }
    public get instanceVersion(): string | undefined {
        return this['instance_version'];
    }
    public withVirsubnetId(virsubnetId: string): UpdateInstanceV2Response {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withRomaEipAddress(romaEipAddress: string): UpdateInstanceV2Response {
        this['roma_eip_address'] = romaEipAddress;
        return this;
    }
    public set romaEipAddress(romaEipAddress: string  | undefined) {
        this['roma_eip_address'] = romaEipAddress;
    }
    public get romaEipAddress(): string | undefined {
        return this['roma_eip_address'];
    }
    public withListeners(listeners: object): UpdateInstanceV2Response {
        this['listeners'] = listeners;
        return this;
    }
    public withSupportedFeatures(supportedFeatures: Array<string>): UpdateInstanceV2Response {
        this['supported_features'] = supportedFeatures;
        return this;
    }
    public set supportedFeatures(supportedFeatures: Array<string>  | undefined) {
        this['supported_features'] = supportedFeatures;
    }
    public get supportedFeatures(): Array<string> | undefined {
        return this['supported_features'];
    }
    public withEndpointService(endpointService: EndpointService): UpdateInstanceV2Response {
        this['endpoint_service'] = endpointService;
        return this;
    }
    public set endpointService(endpointService: EndpointService  | undefined) {
        this['endpoint_service'] = endpointService;
    }
    public get endpointService(): EndpointService | undefined {
        return this['endpoint_service'];
    }
    public withEndpointServices(endpointServices: Array<EndpointService>): UpdateInstanceV2Response {
        this['endpoint_services'] = endpointServices;
        return this;
    }
    public set endpointServices(endpointServices: Array<EndpointService>  | undefined) {
        this['endpoint_services'] = endpointServices;
    }
    public get endpointServices(): Array<EndpointService> | undefined {
        return this['endpoint_services'];
    }
    public withNodeIps(nodeIps: NodeIps): UpdateInstanceV2Response {
        this['node_ips'] = nodeIps;
        return this;
    }
    public set nodeIps(nodeIps: NodeIps  | undefined) {
        this['node_ips'] = nodeIps;
    }
    public get nodeIps(): NodeIps | undefined {
        return this['node_ips'];
    }
    public withPublicips(publicips: Array<IpDetails>): UpdateInstanceV2Response {
        this['publicips'] = publicips;
        return this;
    }
    public withPrivateips(privateips: Array<IpDetails>): UpdateInstanceV2Response {
        this['privateips'] = privateips;
        return this;
    }
    public withIsReleasable(isReleasable: boolean): UpdateInstanceV2Response {
        this['is_releasable'] = isReleasable;
        return this;
    }
    public set isReleasable(isReleasable: boolean  | undefined) {
        this['is_releasable'] = isReleasable;
    }
    public get isReleasable(): boolean | undefined {
        return this['is_releasable'];
    }
    public withIngressBandwidthChargingMode(ingressBandwidthChargingMode: string): UpdateInstanceV2Response {
        this['ingress_bandwidth_charging_mode'] = ingressBandwidthChargingMode;
        return this;
    }
    public set ingressBandwidthChargingMode(ingressBandwidthChargingMode: string  | undefined) {
        this['ingress_bandwidth_charging_mode'] = ingressBandwidthChargingMode;
    }
    public get ingressBandwidthChargingMode(): string | undefined {
        return this['ingress_bandwidth_charging_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceV2ResponseStatusEnum {
    CREATING = 'Creating',
    CREATESUCCESS = 'CreateSuccess',
    CREATEFAIL = 'CreateFail',
    INITING = 'Initing',
    REGISTERING = 'Registering',
    RUNNING = 'Running',
    INITINGFAILED = 'InitingFailed',
    REGISTERFAILED = 'RegisterFailed',
    INSTALLING = 'Installing',
    INSTALLFAILED = 'InstallFailed',
    UPDATING = 'Updating',
    UPDATEFAILED = 'UpdateFailed',
    ROLLBACKING = 'Rollbacking',
    ROLLBACKSUCCESS = 'RollbackSuccess',
    ROLLBACKFAILED = 'RollbackFailed',
    DELETING = 'Deleting',
    DELETEFAILED = 'DeleteFailed',
    UNREGISTERING = 'Unregistering',
    UNREGISTERFAILED = 'UnRegisterFailed',
    CREATETIMEOUT = 'CreateTimeout',
    INITTIMEOUT = 'InitTimeout',
    REGISTERTIMEOUT = 'RegisterTimeout',
    INSTALLTIMEOUT = 'InstallTimeout',
    UPDATETIMEOUT = 'UpdateTimeout',
    ROLLBACKTIMEOUT = 'RollbackTimeout',
    DELETETIMEOUT = 'DeleteTimeout',
    UNREGISTERTIMEOUT = 'UnregisterTimeout',
    STARTING = 'Starting',
    FREEZING = 'Freezing',
    FROZEN = 'Frozen',
    RESTARTING = 'Restarting',
    RESTARTFAIL = 'RestartFail',
    UNHEALTHY = 'Unhealthy',
    RESTARTTIMEOUT = 'RestartTimeout',
    RESIZING = 'Resizing',
    RESIZEFAILED = 'ResizeFailed',
    RESIZETIMEOUT = 'ResizeTimeout'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceV2ResponseInstanceStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_10 = 10,
    NUMBER_11 = 11,
    NUMBER_12 = 12,
    NUMBER_13 = 13,
    NUMBER_20 = 20,
    NUMBER_21 = 21,
    NUMBER_22 = 22,
    NUMBER_23 = 23,
    NUMBER_24 = 24,
    NUMBER_25 = 25,
    NUMBER_26 = 26,
    NUMBER_27 = 27,
    NUMBER_28 = 28,
    NUMBER_29 = 29,
    NUMBER_30 = 30,
    NUMBER_31 = 31,
    NUMBER_32 = 32,
    NUMBER_33 = 33,
    NUMBER_34 = 34,
    NUMBER_35 = 35,
    NUMBER_36 = 36,
    NUMBER_37 = 37,
    NUMBER_38 = 38,
    NUMBER_39 = 39,
    NUMBER_40 = 40,
    NUMBER_41 = 41,
    NUMBER_42 = 42,
    NUMBER_43 = 43,
    NUMBER_44 = 44
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceV2ResponseSpecEnum {
    BASIC = 'BASIC',
    PROFESSIONAL = 'PROFESSIONAL',
    ENTERPRISE = 'ENTERPRISE',
    PLATINUM = 'PLATINUM',
    BASIC_IPV6 = 'BASIC_IPV6',
    PROFESSIONAL_IPV6 = 'PROFESSIONAL_IPV6',
    ENTERPRISE_IPV6 = 'ENTERPRISE_IPV6',
    PLATINUM_IPV6 = 'PLATINUM_IPV6',
    PLATINUM_X2 = 'PLATINUM_X2',
    PLATINUM_X3 = 'PLATINUM_X3',
    PLATINUM_X4 = 'PLATINUM_X4',
    PLATINUM_X5 = 'PLATINUM_X5',
    PLATINUM_X6 = 'PLATINUM_X6',
    PLATINUM_X7 = 'PLATINUM_X7',
    PLATINUM_X8 = 'PLATINUM_X8'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceV2ResponseChargingModeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceV2ResponseLoadbalancerProviderEnum {
    LVS = 'lvs',
    ELB = 'elb'
}
