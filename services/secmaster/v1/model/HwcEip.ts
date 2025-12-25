import { HwcEipBandwidth } from './HwcEipBandwidth';
import { HwcEipVnic } from './HwcEipVnic';


export class HwcEip {
    public id?: string;
    public alias?: string;
    private 'protected_status'?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'ip_version'?: number;
    private 'public_ip_address'?: string;
    private 'public_ipv6_address'?: string;
    private 'publicip_pool_name'?: string;
    private 'publicip_pool_id'?: string;
    public status?: string;
    public description?: string;
    public tags?: Array<string>;
    public type?: string;
    public vnic?: HwcEipVnic;
    public bandwidth?: HwcEipBandwidth;
    private 'lock_status'?: string;
    private 'associate_instance_type'?: string;
    private 'associate_instance_id'?: string;
    private 'allow_share_bandwidth_types'?: Array<string>;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'public_border_group'?: string;
    public constructor(id?: string, alias?: string, protectedStatus?: string, projectId?: string, enterpriseProjectId?: string, ipVersion?: number, status?: string) { 
        this['id'] = id;
        this['alias'] = alias;
        this['protected_status'] = protectedStatus;
        this['project_id'] = projectId;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['ip_version'] = ipVersion;
        this['status'] = status;
    }
    public withId(id: string): HwcEip {
        this['id'] = id;
        return this;
    }
    public withAlias(alias: string): HwcEip {
        this['alias'] = alias;
        return this;
    }
    public withProtectedStatus(protectedStatus: string): HwcEip {
        this['protected_status'] = protectedStatus;
        return this;
    }
    public set protectedStatus(protectedStatus: string  | undefined) {
        this['protected_status'] = protectedStatus;
    }
    public get protectedStatus(): string | undefined {
        return this['protected_status'];
    }
    public withProjectId(projectId: string): HwcEip {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): HwcEip {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIpVersion(ipVersion: number): HwcEip {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withPublicIpAddress(publicIpAddress: string): HwcEip {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withPublicIpv6Address(publicIpv6Address: string): HwcEip {
        this['public_ipv6_address'] = publicIpv6Address;
        return this;
    }
    public set publicIpv6Address(publicIpv6Address: string  | undefined) {
        this['public_ipv6_address'] = publicIpv6Address;
    }
    public get publicIpv6Address(): string | undefined {
        return this['public_ipv6_address'];
    }
    public withPublicipPoolName(publicipPoolName: string): HwcEip {
        this['publicip_pool_name'] = publicipPoolName;
        return this;
    }
    public set publicipPoolName(publicipPoolName: string  | undefined) {
        this['publicip_pool_name'] = publicipPoolName;
    }
    public get publicipPoolName(): string | undefined {
        return this['publicip_pool_name'];
    }
    public withPublicipPoolId(publicipPoolId: string): HwcEip {
        this['publicip_pool_id'] = publicipPoolId;
        return this;
    }
    public set publicipPoolId(publicipPoolId: string  | undefined) {
        this['publicip_pool_id'] = publicipPoolId;
    }
    public get publicipPoolId(): string | undefined {
        return this['publicip_pool_id'];
    }
    public withStatus(status: string): HwcEip {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): HwcEip {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): HwcEip {
        this['tags'] = tags;
        return this;
    }
    public withType(type: string): HwcEip {
        this['type'] = type;
        return this;
    }
    public withVnic(vnic: HwcEipVnic): HwcEip {
        this['vnic'] = vnic;
        return this;
    }
    public withBandwidth(bandwidth: HwcEipBandwidth): HwcEip {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withLockStatus(lockStatus: string): HwcEip {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withAssociateInstanceType(associateInstanceType: string): HwcEip {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: string  | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType(): string | undefined {
        return this['associate_instance_type'];
    }
    public withAssociateInstanceId(associateInstanceId: string): HwcEip {
        this['associate_instance_id'] = associateInstanceId;
        return this;
    }
    public set associateInstanceId(associateInstanceId: string  | undefined) {
        this['associate_instance_id'] = associateInstanceId;
    }
    public get associateInstanceId(): string | undefined {
        return this['associate_instance_id'];
    }
    public withAllowShareBandwidthTypes(allowShareBandwidthTypes: Array<string>): HwcEip {
        this['allow_share_bandwidth_types'] = allowShareBandwidthTypes;
        return this;
    }
    public set allowShareBandwidthTypes(allowShareBandwidthTypes: Array<string>  | undefined) {
        this['allow_share_bandwidth_types'] = allowShareBandwidthTypes;
    }
    public get allowShareBandwidthTypes(): Array<string> | undefined {
        return this['allow_share_bandwidth_types'];
    }
    public withCreatedAt(createdAt: string): HwcEip {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): HwcEip {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): HwcEip {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
}