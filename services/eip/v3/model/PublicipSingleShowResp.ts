import { ProfileInfo } from './ProfileInfo';
import { PublicipBandwidthInfo } from './PublicipBandwidthInfo';
import { TagsInfo } from './TagsInfo';
import { VnicInfo } from './VnicInfo';


export class PublicipSingleShowResp {
    public id?: string;
    private 'project_id'?: string | undefined;
    private 'ip_version'?: PublicipSingleShowRespIpVersionEnum | undefined;
    private 'public_ip_address'?: string | undefined;
    private 'public_ipv6_address'?: string | undefined;
    private 'network_type'?: string | undefined;
    public status?: PublicipSingleShowRespStatusEnum;
    public description?: string;
    private 'public_border_group'?: string | undefined;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    public type?: PublicipSingleShowRespTypeEnum;
    public vnic?: VnicInfo;
    public bandwidth?: PublicipBandwidthInfo;
    private 'enterprise_project_id'?: string | undefined;
    private 'billing_info'?: string | undefined;
    private 'lock_status'?: string | undefined;
    private 'associate_instance_type'?: PublicipSingleShowRespAssociateInstanceTypeEnum | undefined;
    private 'associate_instance_id'?: string | undefined;
    private 'publicip_pool_id'?: string | undefined;
    private 'publicip_pool_name'?: string | undefined;
    public alias?: string;
    public profile?: ProfileInfo;
    private 'fake_network_type'?: boolean | undefined;
    public tags?: Array<TagsInfo>;
    private 'associate_instance_metadata'?: string | undefined;
    private 'associate_mode'?: string | undefined;
    private 'allow_share_bandwidth_types'?: Array<string> | undefined;
    private 'cascade_delete_by_instance'?: boolean | undefined;
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
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withIpVersion(ipVersion: PublicipSingleShowRespIpVersionEnum): PublicipSingleShowResp {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: PublicipSingleShowRespIpVersionEnum | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withPublicIpAddress(publicIpAddress: string): PublicipSingleShowResp {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress() {
        return this['public_ip_address'];
    }
    public withPublicIpv6Address(publicIpv6Address: string): PublicipSingleShowResp {
        this['public_ipv6_address'] = publicIpv6Address;
        return this;
    }
    public set publicIpv6Address(publicIpv6Address: string | undefined) {
        this['public_ipv6_address'] = publicIpv6Address;
    }
    public get publicIpv6Address() {
        return this['public_ipv6_address'];
    }
    public withNetworkType(networkType: string): PublicipSingleShowResp {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType() {
        return this['network_type'];
    }
    public withStatus(status: PublicipSingleShowRespStatusEnum): PublicipSingleShowResp {
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
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
    }
    public withCreatedAt(createdAt: Date): PublicipSingleShowResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): PublicipSingleShowResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withType(type: PublicipSingleShowRespTypeEnum): PublicipSingleShowResp {
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
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBillingInfo(billingInfo: string): PublicipSingleShowResp {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo() {
        return this['billing_info'];
    }
    public withLockStatus(lockStatus: string): PublicipSingleShowResp {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus() {
        return this['lock_status'];
    }
    public withAssociateInstanceType(associateInstanceType: PublicipSingleShowRespAssociateInstanceTypeEnum): PublicipSingleShowResp {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: PublicipSingleShowRespAssociateInstanceTypeEnum | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType() {
        return this['associate_instance_type'];
    }
    public withAssociateInstanceId(associateInstanceId: string): PublicipSingleShowResp {
        this['associate_instance_id'] = associateInstanceId;
        return this;
    }
    public set associateInstanceId(associateInstanceId: string | undefined) {
        this['associate_instance_id'] = associateInstanceId;
    }
    public get associateInstanceId() {
        return this['associate_instance_id'];
    }
    public withPublicipPoolId(publicipPoolId: string): PublicipSingleShowResp {
        this['publicip_pool_id'] = publicipPoolId;
        return this;
    }
    public set publicipPoolId(publicipPoolId: string | undefined) {
        this['publicip_pool_id'] = publicipPoolId;
    }
    public get publicipPoolId() {
        return this['publicip_pool_id'];
    }
    public withPublicipPoolName(publicipPoolName: string): PublicipSingleShowResp {
        this['publicip_pool_name'] = publicipPoolName;
        return this;
    }
    public set publicipPoolName(publicipPoolName: string | undefined) {
        this['publicip_pool_name'] = publicipPoolName;
    }
    public get publicipPoolName() {
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
    public set fakeNetworkType(fakeNetworkType: boolean | undefined) {
        this['fake_network_type'] = fakeNetworkType;
    }
    public get fakeNetworkType() {
        return this['fake_network_type'];
    }
    public withTags(tags: Array<TagsInfo>): PublicipSingleShowResp {
        this['tags'] = tags;
        return this;
    }
    public withAssociateInstanceMetadata(associateInstanceMetadata: string): PublicipSingleShowResp {
        this['associate_instance_metadata'] = associateInstanceMetadata;
        return this;
    }
    public set associateInstanceMetadata(associateInstanceMetadata: string | undefined) {
        this['associate_instance_metadata'] = associateInstanceMetadata;
    }
    public get associateInstanceMetadata() {
        return this['associate_instance_metadata'];
    }
    public withAssociateMode(associateMode: string): PublicipSingleShowResp {
        this['associate_mode'] = associateMode;
        return this;
    }
    public set associateMode(associateMode: string | undefined) {
        this['associate_mode'] = associateMode;
    }
    public get associateMode() {
        return this['associate_mode'];
    }
    public withAllowShareBandwidthTypes(allowShareBandwidthTypes: Array<string>): PublicipSingleShowResp {
        this['allow_share_bandwidth_types'] = allowShareBandwidthTypes;
        return this;
    }
    public set allowShareBandwidthTypes(allowShareBandwidthTypes: Array<string> | undefined) {
        this['allow_share_bandwidth_types'] = allowShareBandwidthTypes;
    }
    public get allowShareBandwidthTypes() {
        return this['allow_share_bandwidth_types'];
    }
    public withCascadeDeleteByInstance(cascadeDeleteByInstance: boolean): PublicipSingleShowResp {
        this['cascade_delete_by_instance'] = cascadeDeleteByInstance;
        return this;
    }
    public set cascadeDeleteByInstance(cascadeDeleteByInstance: boolean | undefined) {
        this['cascade_delete_by_instance'] = cascadeDeleteByInstance;
    }
    public get cascadeDeleteByInstance() {
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
