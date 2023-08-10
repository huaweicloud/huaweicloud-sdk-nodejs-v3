import { Metadata } from './Metadata';


export class Share {
    private 'availability_zone'?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public metadata?: Metadata;
    public name?: string;
    private 'security_group_id'?: string;
    private 'share_proto'?: string;
    private 'share_type'?: string;
    public size?: number;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    private 'backup_id'?: string;
    public constructor(availabilityZone?: string, name?: string, securityGroupId?: string, shareProto?: string, shareType?: string, size?: number, subnetId?: string, vpcId?: string) { 
        this['availability_zone'] = availabilityZone;
        this['name'] = name;
        this['security_group_id'] = securityGroupId;
        this['share_proto'] = shareProto;
        this['share_type'] = shareType;
        this['size'] = size;
        this['subnet_id'] = subnetId;
        this['vpc_id'] = vpcId;
    }
    public withAvailabilityZone(availabilityZone: string): Share {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withDescription(description: string): Share {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Share {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withMetadata(metadata: Metadata): Share {
        this['metadata'] = metadata;
        return this;
    }
    public withName(name: string): Share {
        this['name'] = name;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): Share {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withShareProto(shareProto: string): Share {
        this['share_proto'] = shareProto;
        return this;
    }
    public set shareProto(shareProto: string  | undefined) {
        this['share_proto'] = shareProto;
    }
    public get shareProto(): string | undefined {
        return this['share_proto'];
    }
    public withShareType(shareType: string): Share {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): string | undefined {
        return this['share_type'];
    }
    public withSize(size: number): Share {
        this['size'] = size;
        return this;
    }
    public withSubnetId(subnetId: string): Share {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): Share {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withBackupId(backupId: string): Share {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
}