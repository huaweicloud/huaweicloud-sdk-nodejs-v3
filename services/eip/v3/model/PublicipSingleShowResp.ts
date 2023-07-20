import { ProfileInfo } from './ProfileInfo';
import { PublicipBandwidthInfo } from './PublicipBandwidthInfo';
import { VnicInfo } from './VnicInfo';


export class PublicipSingleShowResp {
    public id?: string;
    private 'project_id'?: string;
    private 'ip_version'?: PublicipSingleShowRespIpVersionEnum | number;
    private 'public_ip_address'?: string;
    private 'public_ipv6_address'?: string;
    private 'network_type'?: string;
    public status?: PublicipSingleShowRespStatusEnum | string;
    public description?: string;
    private 'public_border_group'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public type?: PublicipSingleShowRespTypeEnum | string;
    public vnic?: VnicInfo;
    public bandwidth?: PublicipBandwidthInfo;
    private 'enterprise_project_id'?: string;
    private 'billing_info'?: string;
    private 'lock_status'?: string;
    private 'associate_instance_type'?: PublicipSingleShowRespAssociateInstanceTypeEnum | string;
    private 'associate_instance_id'?: string;
    private 'publicip_pool_id'?: string;
    private 'publicip_pool_name'?: string;
    public alias?: string;
    public profile?: ProfileInfo;
    private 'fake_network_type'?: boolean;
    public tags?: Array<string>;
    private 'associate_instance_metadata'?: string;
    private 'associate_mode'?: string;
    private 'allow_share_bandwidth_types'?: Array<string>;
    private 'cascade_delete_by_instance'?: boolean;
    public constructor() { 
    }
    public withId(id: string): PublicipSingleShowResp {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): PublicipSingleShowResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIpVersion(ipVersion: PublicipSingleShowRespIpVersionEnum | number): PublicipSingleShowResp {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: PublicipSingleShowRespIpVersionEnum | number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): PublicipSingleShowRespIpVersionEnum | number | undefined {
        return this['ip_version'];
    }
    public withPublicIpAddress(publicIpAddress: string): PublicipSingleShowResp {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withPublicIpv6Address(publicIpv6Address: string): PublicipSingleShowResp {
        this['public_ipv6_address'] = publicIpv6Address;
        return this;
    }
    public set publicIpv6Address(publicIpv6Address: string  | undefined) {
        this['public_ipv6_address'] = publicIpv6Address;
    }
    public get publicIpv6Address(): string | undefined {
        return this['public_ipv6_address'];
    }
    public withNetworkType(networkType: string): PublicipSingleShowResp {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withStatus(status: PublicipSingleShowRespStatusEnum | string): PublicipSingleShowResp {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): PublicipSingleShowResp {
        this['description'] = description;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): PublicipSingleShowResp {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withCreatedAt(createdAt: Date): PublicipSingleShowResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): PublicipSingleShowResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withType(type: PublicipSingleShowRespTypeEnum | string): PublicipSingleShowResp {
        this['type'] = type;
        return this;
    }
    public withVnic(vnic: VnicInfo): PublicipSingleShowResp {
        this['vnic'] = vnic;
        return this;
    }
    public withBandwidth(bandwidth: PublicipBandwidthInfo): PublicipSingleShowResp {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PublicipSingleShowResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBillingInfo(billingInfo: string): PublicipSingleShowResp {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withLockStatus(lockStatus: string): PublicipSingleShowResp {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withAssociateInstanceType(associateInstanceType: PublicipSingleShowRespAssociateInstanceTypeEnum | string): PublicipSingleShowResp {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: PublicipSingleShowRespAssociateInstanceTypeEnum | string  | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType(): PublicipSingleShowRespAssociateInstanceTypeEnum | string | undefined {
        return this['associate_instance_type'];
    }
    public withAssociateInstanceId(associateInstanceId: string): PublicipSingleShowResp {
        this['associate_instance_id'] = associateInstanceId;
        return this;
    }
    public set associateInstanceId(associateInstanceId: string  | undefined) {
        this['associate_instance_id'] = associateInstanceId;
    }
    public get associateInstanceId(): string | undefined {
        return this['associate_instance_id'];
    }
    public withPublicipPoolId(publicipPoolId: string): PublicipSingleShowResp {
        this['publicip_pool_id'] = publicipPoolId;
        return this;
    }
    public set publicipPoolId(publicipPoolId: string  | undefined) {
        this['publicip_pool_id'] = publicipPoolId;
    }
    public get publicipPoolId(): string | undefined {
        return this['publicip_pool_id'];
    }
    public withPublicipPoolName(publicipPoolName: string): PublicipSingleShowResp {
        this['publicip_pool_name'] = publicipPoolName;
        return this;
    }
    public set publicipPoolName(publicipPoolName: string  | undefined) {
        this['publicip_pool_name'] = publicipPoolName;
    }
    public get publicipPoolName(): string | undefined {
        return this['publicip_pool_name'];
    }
    public withAlias(alias: string): PublicipSingleShowResp {
        this['alias'] = alias;
        return this;
    }
    public withProfile(profile: ProfileInfo): PublicipSingleShowResp {
        this['profile'] = profile;
        return this;
    }
    public withFakeNetworkType(fakeNetworkType: boolean): PublicipSingleShowResp {
        this['fake_network_type'] = fakeNetworkType;
        return this;
    }
    public set fakeNetworkType(fakeNetworkType: boolean  | undefined) {
        this['fake_network_type'] = fakeNetworkType;
    }
    public get fakeNetworkType(): boolean | undefined {
        return this['fake_network_type'];
    }
    public withTags(tags: Array<string>): PublicipSingleShowResp {
        this['tags'] = tags;
        return this;
    }
    public withAssociateInstanceMetadata(associateInstanceMetadata: string): PublicipSingleShowResp {
        this['associate_instance_metadata'] = associateInstanceMetadata;
        return this;
    }
    public set associateInstanceMetadata(associateInstanceMetadata: string  | undefined) {
        this['associate_instance_metadata'] = associateInstanceMetadata;
    }
    public get associateInstanceMetadata(): string | undefined {
        return this['associate_instance_metadata'];
    }
    public withAssociateMode(associateMode: string): PublicipSingleShowResp {
        this['associate_mode'] = associateMode;
        return this;
    }
    public set associateMode(associateMode: string  | undefined) {
        this['associate_mode'] = associateMode;
    }
    public get associateMode(): string | undefined {
        return this['associate_mode'];
    }
    public withAllowShareBandwidthTypes(allowShareBandwidthTypes: Array<string>): PublicipSingleShowResp {
        this['allow_share_bandwidth_types'] = allowShareBandwidthTypes;
        return this;
    }
    public set allowShareBandwidthTypes(allowShareBandwidthTypes: Array<string>  | undefined) {
        this['allow_share_bandwidth_types'] = allowShareBandwidthTypes;
    }
    public get allowShareBandwidthTypes(): Array<string> | undefined {
        return this['allow_share_bandwidth_types'];
    }
    public withCascadeDeleteByInstance(cascadeDeleteByInstance: boolean): PublicipSingleShowResp {
        this['cascade_delete_by_instance'] = cascadeDeleteByInstance;
        return this;
    }
    public set cascadeDeleteByInstance(cascadeDeleteByInstance: boolean  | undefined) {
        this['cascade_delete_by_instance'] = cascadeDeleteByInstance;
    }
    public get cascadeDeleteByInstance(): boolean | undefined {
        return this['cascade_delete_by_instance'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicipSingleShowRespIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipSingleShowRespStatusEnum {
    FREEZED = 'FREEZED',
    BIND_ERROR = 'BIND_ERROR',
    BINDING = 'BINDING',
    PENDING_DELETE = 'PENDING_DELETE',
    PENDING_CREATE = 'PENDING_CREATE',
    NOTIFYING = 'NOTIFYING',
    NOTIFY_DELETE = 'NOTIFY_DELETE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    DOWN = 'DOWN',
    ACTIVE = 'ACTIVE',
    ELB = 'ELB',
    ERROR = 'ERROR',
    VPN = 'VPN'
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipSingleShowRespTypeEnum {
    EIP = 'EIP',
    DUALSTACK = 'DUALSTACK',
    DUALSTACK_SUBNET = 'DUALSTACK_SUBNET'
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipSingleShowRespAssociateInstanceTypeEnum {
    PORT = 'PORT',
    NATGW = 'NATGW',
    ELB = 'ELB',
    ELBV1 = 'ELBV1',
    VPN = 'VPN',
    NULL = 'null'
}
