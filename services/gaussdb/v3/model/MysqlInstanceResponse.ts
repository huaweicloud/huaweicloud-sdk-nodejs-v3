import { MysqlBackupStrategy } from './MysqlBackupStrategy';
import { MysqlChargeInfo } from './MysqlChargeInfo';
import { MysqlDatastore } from './MysqlDatastore';


export class MysqlInstanceResponse {
    public id?: string;
    public name?: string;
    public status?: string;
    public datastore?: MysqlDatastore;
    public mode?: string;
    private 'configuration_id'?: string;
    public port?: string;
    private 'backup_strategy'?: MysqlBackupStrategy;
    private 'enterprise_project_id'?: string;
    public region?: string;
    private 'availability_zone_mode'?: string;
    private 'master_availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'security_group_id'?: string;
    private 'subnet_id'?: string;
    private 'flavor_ref'?: string;
    private 'charge_info'?: MysqlChargeInfo;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): MysqlInstanceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MysqlInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): MysqlInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withDatastore(datastore: MysqlDatastore): MysqlInstanceResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withMode(mode: string): MysqlInstanceResponse {
        this['mode'] = mode;
        return this;
    }
    public withConfigurationId(configurationId: string): MysqlInstanceResponse {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withPort(port: string): MysqlInstanceResponse {
        this['port'] = port;
        return this;
    }
    public withBackupStrategy(backupStrategy: MysqlBackupStrategy): MysqlInstanceResponse {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: MysqlBackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): MysqlBackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): MysqlInstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRegion(region: string): MysqlInstanceResponse {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZoneMode(availabilityZoneMode: string): MysqlInstanceResponse {
        this['availability_zone_mode'] = availabilityZoneMode;
        return this;
    }
    public set availabilityZoneMode(availabilityZoneMode: string  | undefined) {
        this['availability_zone_mode'] = availabilityZoneMode;
    }
    public get availabilityZoneMode(): string | undefined {
        return this['availability_zone_mode'];
    }
    public withMasterAvailabilityZone(masterAvailabilityZone: string): MysqlInstanceResponse {
        this['master_availability_zone'] = masterAvailabilityZone;
        return this;
    }
    public set masterAvailabilityZone(masterAvailabilityZone: string  | undefined) {
        this['master_availability_zone'] = masterAvailabilityZone;
    }
    public get masterAvailabilityZone(): string | undefined {
        return this['master_availability_zone'];
    }
    public withVpcId(vpcId: string): MysqlInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSecurityGroupId(securityGroupId: string): MysqlInstanceResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): MysqlInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withFlavorRef(flavorRef: string): MysqlInstanceResponse {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withChargeInfo(chargeInfo: MysqlChargeInfo): MysqlInstanceResponse {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: MysqlChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): MysqlChargeInfo | undefined {
        return this['charge_info'];
    }
}