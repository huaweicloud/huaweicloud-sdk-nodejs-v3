import { BackupStrategy } from './BackupStrategy';
import { ChargeInfoOption } from './ChargeInfoOption';
import { CreateInstanceConfigurationsOption } from './CreateInstanceConfigurationsOption';
import { CreateInstanceFlavorOption } from './CreateInstanceFlavorOption';
import { Datastore } from './Datastore';
import { TagWithKeyValue } from './TagWithKeyValue';


export class CreateInstanceRequestBody {
    public name?: string;
    public datastore?: Datastore;
    public region?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    public port?: string;
    public password?: string;
    private 'disk_encryption_id'?: string;
    public mode?: string;
    public configurations?: Array<CreateInstanceConfigurationsOption>;
    public flavor?: Array<CreateInstanceFlavorOption>;
    private 'backup_strategy'?: BackupStrategy;
    private 'enterprise_project_id'?: string;
    private 'ssl_option'?: string;
    private 'dss_pool_id'?: string;
    private 'server_group_policies'?: Array<string>;
    public tags?: Array<TagWithKeyValue>;
    private 'charge_info'?: ChargeInfoOption;
    public constructor(name?: string, datastore?: Datastore, region?: string, availabilityZone?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, mode?: string, flavor?: Array<CreateInstanceFlavorOption>) { 
        this['name'] = name;
        this['datastore'] = datastore;
        this['region'] = region;
        this['availability_zone'] = availabilityZone;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['mode'] = mode;
        this['flavor'] = flavor;
    }
    public withName(name: string): CreateInstanceRequestBody {
        this['name'] = name;
        return this;
    }
    public withDatastore(datastore: Datastore): CreateInstanceRequestBody {
        this['datastore'] = datastore;
        return this;
    }
    public withRegion(region: string): CreateInstanceRequestBody {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateInstanceRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): CreateInstanceRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceRequestBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withPort(port: string): CreateInstanceRequestBody {
        this['port'] = port;
        return this;
    }
    public withPassword(password: string): CreateInstanceRequestBody {
        this['password'] = password;
        return this;
    }
    public withDiskEncryptionId(diskEncryptionId: string): CreateInstanceRequestBody {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withMode(mode: string): CreateInstanceRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withConfigurations(configurations: Array<CreateInstanceConfigurationsOption>): CreateInstanceRequestBody {
        this['configurations'] = configurations;
        return this;
    }
    public withFlavor(flavor: Array<CreateInstanceFlavorOption>): CreateInstanceRequestBody {
        this['flavor'] = flavor;
        return this;
    }
    public withBackupStrategy(backupStrategy: BackupStrategy): CreateInstanceRequestBody {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: BackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): BackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSslOption(sslOption: string): CreateInstanceRequestBody {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: string  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): string | undefined {
        return this['ssl_option'];
    }
    public withDssPoolId(dssPoolId: string): CreateInstanceRequestBody {
        this['dss_pool_id'] = dssPoolId;
        return this;
    }
    public set dssPoolId(dssPoolId: string  | undefined) {
        this['dss_pool_id'] = dssPoolId;
    }
    public get dssPoolId(): string | undefined {
        return this['dss_pool_id'];
    }
    public withServerGroupPolicies(serverGroupPolicies: Array<string>): CreateInstanceRequestBody {
        this['server_group_policies'] = serverGroupPolicies;
        return this;
    }
    public set serverGroupPolicies(serverGroupPolicies: Array<string>  | undefined) {
        this['server_group_policies'] = serverGroupPolicies;
    }
    public get serverGroupPolicies(): Array<string> | undefined {
        return this['server_group_policies'];
    }
    public withTags(tags: Array<TagWithKeyValue>): CreateInstanceRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withChargeInfo(chargeInfo: ChargeInfoOption): CreateInstanceRequestBody {
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