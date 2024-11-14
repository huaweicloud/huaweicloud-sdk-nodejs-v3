import { ActionProgress } from './ActionProgress';
import { ResourceTag } from './ResourceTag';
import { ShareInfoFeatures } from './ShareInfoFeatures';


export class ShareInfo {
    private 'action_progress'?: ActionProgress;
    public version?: string;
    private 'avail_capacity'?: string;
    private 'availability_zone'?: string;
    private 'az_name'?: string;
    private 'created_at'?: Date;
    private 'crypt_key_id'?: string;
    private 'expand_type'?: string;
    private 'export_location'?: string;
    public id?: string;
    public name?: string;
    private 'pay_model'?: ShareInfoPayModelEnum | string;
    public region?: string;
    private 'security_group_id'?: string;
    private 'share_proto'?: string;
    private 'share_type'?: string;
    public size?: string;
    public status?: string;
    private 'sub_status'?: string;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<ResourceTag>;
    private 'optional_endpoint'?: string;
    private 'hpc_bw'?: string;
    public instanceId?: string;
    public instanceType?: string;
    public statusDetail?: string;
    public features?: ShareInfoFeatures;
    public constructor() { 
    }
    public withActionProgress(actionProgress: ActionProgress): ShareInfo {
        this['action_progress'] = actionProgress;
        return this;
    }
    public set actionProgress(actionProgress: ActionProgress  | undefined) {
        this['action_progress'] = actionProgress;
    }
    public get actionProgress(): ActionProgress | undefined {
        return this['action_progress'];
    }
    public withVersion(version: string): ShareInfo {
        this['version'] = version;
        return this;
    }
    public withAvailCapacity(availCapacity: string): ShareInfo {
        this['avail_capacity'] = availCapacity;
        return this;
    }
    public set availCapacity(availCapacity: string  | undefined) {
        this['avail_capacity'] = availCapacity;
    }
    public get availCapacity(): string | undefined {
        return this['avail_capacity'];
    }
    public withAvailabilityZone(availabilityZone: string): ShareInfo {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withAzName(azName: string): ShareInfo {
        this['az_name'] = azName;
        return this;
    }
    public set azName(azName: string  | undefined) {
        this['az_name'] = azName;
    }
    public get azName(): string | undefined {
        return this['az_name'];
    }
    public withCreatedAt(createdAt: Date): ShareInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withCryptKeyId(cryptKeyId: string): ShareInfo {
        this['crypt_key_id'] = cryptKeyId;
        return this;
    }
    public set cryptKeyId(cryptKeyId: string  | undefined) {
        this['crypt_key_id'] = cryptKeyId;
    }
    public get cryptKeyId(): string | undefined {
        return this['crypt_key_id'];
    }
    public withExpandType(expandType: string): ShareInfo {
        this['expand_type'] = expandType;
        return this;
    }
    public set expandType(expandType: string  | undefined) {
        this['expand_type'] = expandType;
    }
    public get expandType(): string | undefined {
        return this['expand_type'];
    }
    public withExportLocation(exportLocation: string): ShareInfo {
        this['export_location'] = exportLocation;
        return this;
    }
    public set exportLocation(exportLocation: string  | undefined) {
        this['export_location'] = exportLocation;
    }
    public get exportLocation(): string | undefined {
        return this['export_location'];
    }
    public withId(id: string): ShareInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShareInfo {
        this['name'] = name;
        return this;
    }
    public withPayModel(payModel: ShareInfoPayModelEnum | string): ShareInfo {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: ShareInfoPayModelEnum | string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): ShareInfoPayModelEnum | string | undefined {
        return this['pay_model'];
    }
    public withRegion(region: string): ShareInfo {
        this['region'] = region;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): ShareInfo {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withShareProto(shareProto: string): ShareInfo {
        this['share_proto'] = shareProto;
        return this;
    }
    public set shareProto(shareProto: string  | undefined) {
        this['share_proto'] = shareProto;
    }
    public get shareProto(): string | undefined {
        return this['share_proto'];
    }
    public withShareType(shareType: string): ShareInfo {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): string | undefined {
        return this['share_type'];
    }
    public withSize(size: string): ShareInfo {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): ShareInfo {
        this['status'] = status;
        return this;
    }
    public withSubStatus(subStatus: string): ShareInfo {
        this['sub_status'] = subStatus;
        return this;
    }
    public set subStatus(subStatus: string  | undefined) {
        this['sub_status'] = subStatus;
    }
    public get subStatus(): string | undefined {
        return this['sub_status'];
    }
    public withSubnetId(subnetId: string): ShareInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): ShareInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShareInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<ResourceTag>): ShareInfo {
        this['tags'] = tags;
        return this;
    }
    public withOptionalEndpoint(optionalEndpoint: string): ShareInfo {
        this['optional_endpoint'] = optionalEndpoint;
        return this;
    }
    public set optionalEndpoint(optionalEndpoint: string  | undefined) {
        this['optional_endpoint'] = optionalEndpoint;
    }
    public get optionalEndpoint(): string | undefined {
        return this['optional_endpoint'];
    }
    public withHpcBw(hpcBw: string): ShareInfo {
        this['hpc_bw'] = hpcBw;
        return this;
    }
    public set hpcBw(hpcBw: string  | undefined) {
        this['hpc_bw'] = hpcBw;
    }
    public get hpcBw(): string | undefined {
        return this['hpc_bw'];
    }
    public withInstanceId(instanceId: string): ShareInfo {
        this['instanceId'] = instanceId;
        return this;
    }
    public withInstanceType(instanceType: string): ShareInfo {
        this['instanceType'] = instanceType;
        return this;
    }
    public withStatusDetail(statusDetail: string): ShareInfo {
        this['statusDetail'] = statusDetail;
        return this;
    }
    public withFeatures(features: ShareInfoFeatures): ShareInfo {
        this['features'] = features;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShareInfoPayModelEnum {
    E_0 = '0',
    E_1 = '1'
}
