import { ActionProgress } from './ActionProgress';


export class Shares {
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
    private 'pay_model'?: SharesPayModelEnum | string;
    public region?: string;
    private 'security_group_id'?: string;
    private 'share_proto'?: string;
    private 'share_type'?: string;
    public size?: string;
    public status?: string;
    private 'sub_status'?: string;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withActionProgress(actionProgress: ActionProgress): Shares {
        this['action_progress'] = actionProgress;
        return this;
    }
    public set actionProgress(actionProgress: ActionProgress  | undefined) {
        this['action_progress'] = actionProgress;
    }
    public get actionProgress(): ActionProgress | undefined {
        return this['action_progress'];
    }
    public withVersion(version: string): Shares {
        this['version'] = version;
        return this;
    }
    public withAvailCapacity(availCapacity: string): Shares {
        this['avail_capacity'] = availCapacity;
        return this;
    }
    public set availCapacity(availCapacity: string  | undefined) {
        this['avail_capacity'] = availCapacity;
    }
    public get availCapacity(): string | undefined {
        return this['avail_capacity'];
    }
    public withAvailabilityZone(availabilityZone: string): Shares {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withAzName(azName: string): Shares {
        this['az_name'] = azName;
        return this;
    }
    public set azName(azName: string  | undefined) {
        this['az_name'] = azName;
    }
    public get azName(): string | undefined {
        return this['az_name'];
    }
    public withCreatedAt(createdAt: Date): Shares {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withCryptKeyId(cryptKeyId: string): Shares {
        this['crypt_key_id'] = cryptKeyId;
        return this;
    }
    public set cryptKeyId(cryptKeyId: string  | undefined) {
        this['crypt_key_id'] = cryptKeyId;
    }
    public get cryptKeyId(): string | undefined {
        return this['crypt_key_id'];
    }
    public withExpandType(expandType: string): Shares {
        this['expand_type'] = expandType;
        return this;
    }
    public set expandType(expandType: string  | undefined) {
        this['expand_type'] = expandType;
    }
    public get expandType(): string | undefined {
        return this['expand_type'];
    }
    public withExportLocation(exportLocation: string): Shares {
        this['export_location'] = exportLocation;
        return this;
    }
    public set exportLocation(exportLocation: string  | undefined) {
        this['export_location'] = exportLocation;
    }
    public get exportLocation(): string | undefined {
        return this['export_location'];
    }
    public withId(id: string): Shares {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Shares {
        this['name'] = name;
        return this;
    }
    public withPayModel(payModel: SharesPayModelEnum | string): Shares {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: SharesPayModelEnum | string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): SharesPayModelEnum | string | undefined {
        return this['pay_model'];
    }
    public withRegion(region: string): Shares {
        this['region'] = region;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): Shares {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withShareProto(shareProto: string): Shares {
        this['share_proto'] = shareProto;
        return this;
    }
    public set shareProto(shareProto: string  | undefined) {
        this['share_proto'] = shareProto;
    }
    public get shareProto(): string | undefined {
        return this['share_proto'];
    }
    public withShareType(shareType: string): Shares {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): string | undefined {
        return this['share_type'];
    }
    public withSize(size: string): Shares {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): Shares {
        this['status'] = status;
        return this;
    }
    public withSubStatus(subStatus: string): Shares {
        this['sub_status'] = subStatus;
        return this;
    }
    public set subStatus(subStatus: string  | undefined) {
        this['sub_status'] = subStatus;
    }
    public get subStatus(): string | undefined {
        return this['sub_status'];
    }
    public withSubnetId(subnetId: string): Shares {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): Shares {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SharesPayModelEnum {
    E_0 = '0',
    E_1 = '1'
}
