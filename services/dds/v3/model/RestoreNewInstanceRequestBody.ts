import { BackupStrategy } from './BackupStrategy';
import { ChargeInfoOption } from './ChargeInfoOption';
import { RestoreNewInstanceConfigurationsOption } from './RestoreNewInstanceConfigurationsOption';
import { RestoreNewInstanceFlavorOption } from './RestoreNewInstanceFlavorOption';
import { RestorePoint } from './RestorePoint';


export class RestoreNewInstanceRequestBody {
    public name?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    public password?: string;
    private 'disk_encryption_id'?: string;
    public configurations?: Array<RestoreNewInstanceConfigurationsOption>;
    public flavor?: Array<RestoreNewInstanceFlavorOption>;
    private 'backup_strategy'?: BackupStrategy;
    private 'enterprise_project_id'?: string;
    private 'ssl_option'?: string;
    private 'dss_pool_id'?: string;
    private 'server_group_policies'?: Array<string>;
    private 'restore_point'?: RestorePoint;
    private 'charge_info'?: ChargeInfoOption;
    public constructor(name?: string, availabilityZone?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, flavor?: Array<RestoreNewInstanceFlavorOption>, restorePoint?: RestorePoint) { 
        this['name'] = name;
        this['availability_zone'] = availabilityZone;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['flavor'] = flavor;
        this['restore_point'] = restorePoint;
    }
    public withName(name: string): RestoreNewInstanceRequestBody {
        this['name'] = name;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): RestoreNewInstanceRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): RestoreNewInstanceRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): RestoreNewInstanceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): RestoreNewInstanceRequestBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withPassword(password: string): RestoreNewInstanceRequestBody {
        this['password'] = password;
        return this;
    }
    public withDiskEncryptionId(diskEncryptionId: string): RestoreNewInstanceRequestBody {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withConfigurations(configurations: Array<RestoreNewInstanceConfigurationsOption>): RestoreNewInstanceRequestBody {
        this['configurations'] = configurations;
        return this;
    }
    public withFlavor(flavor: Array<RestoreNewInstanceFlavorOption>): RestoreNewInstanceRequestBody {
        this['flavor'] = flavor;
        return this;
    }
    public withBackupStrategy(backupStrategy: BackupStrategy): RestoreNewInstanceRequestBody {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: BackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): BackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RestoreNewInstanceRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSslOption(sslOption: string): RestoreNewInstanceRequestBody {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: string  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): string | undefined {
        return this['ssl_option'];
    }
    public withDssPoolId(dssPoolId: string): RestoreNewInstanceRequestBody {
        this['dss_pool_id'] = dssPoolId;
        return this;
    }
    public set dssPoolId(dssPoolId: string  | undefined) {
        this['dss_pool_id'] = dssPoolId;
    }
    public get dssPoolId(): string | undefined {
        return this['dss_pool_id'];
    }
    public withServerGroupPolicies(serverGroupPolicies: Array<string>): RestoreNewInstanceRequestBody {
        this['server_group_policies'] = serverGroupPolicies;
        return this;
    }
    public set serverGroupPolicies(serverGroupPolicies: Array<string>  | undefined) {
        this['server_group_policies'] = serverGroupPolicies;
    }
    public get serverGroupPolicies(): Array<string> | undefined {
        return this['server_group_policies'];
    }
    public withRestorePoint(restorePoint: RestorePoint): RestoreNewInstanceRequestBody {
        this['restore_point'] = restorePoint;
        return this;
    }
    public set restorePoint(restorePoint: RestorePoint  | undefined) {
        this['restore_point'] = restorePoint;
    }
    public get restorePoint(): RestorePoint | undefined {
        return this['restore_point'];
    }
    public withChargeInfo(chargeInfo: ChargeInfoOption): RestoreNewInstanceRequestBody {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfoOption  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfoOption | undefined {
        return this['charge_info'];
    }
}