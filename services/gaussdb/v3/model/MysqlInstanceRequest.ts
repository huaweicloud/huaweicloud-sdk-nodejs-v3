import { MysqlBackupStrategy } from './MysqlBackupStrategy';
import { MysqlChargeInfo } from './MysqlChargeInfo';
import { MysqlDatastoreInReq } from './MysqlDatastoreInReq';
import { MysqlRestorePoint } from './MysqlRestorePoint';
import { MysqlTags } from './MysqlTags';
import { MysqlTdeInfo } from './MysqlTdeInfo';
import { MysqlVolume } from './MysqlVolume';


export class MysqlInstanceRequest {
    private 'charge_info'?: MysqlChargeInfo;
    public region?: string;
    public name?: string;
    public datastore?: MysqlDatastoreInReq;
    public mode?: string;
    private 'flavor_ref'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'configuration_id'?: string;
    public password?: string;
    private 'backup_strategy'?: MysqlBackupStrategy;
    private 'time_zone'?: string;
    private 'availability_zone_mode'?: string;
    private 'master_availability_zone'?: string;
    private 'slave_count'?: number;
    public volume?: MysqlVolume;
    public tags?: Array<MysqlTags>;
    private 'lower_case_table_names'?: number;
    private 'enterprise_project_id'?: string;
    private 'dedicated_resource_id'?: string;
    private 'restore_point'?: MysqlRestorePoint;
    private 'tde_info'?: MysqlTdeInfo;
    public constructor(region?: string, name?: string, datastore?: MysqlDatastoreInReq, mode?: string, flavorRef?: string, vpcId?: string, subnetId?: string, password?: string, availabilityZoneMode?: string, slaveCount?: number) { 
        this['region'] = region;
        this['name'] = name;
        this['datastore'] = datastore;
        this['mode'] = mode;
        this['flavor_ref'] = flavorRef;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['password'] = password;
        this['availability_zone_mode'] = availabilityZoneMode;
        this['slave_count'] = slaveCount;
    }
    public withChargeInfo(chargeInfo: MysqlChargeInfo): MysqlInstanceRequest {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: MysqlChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): MysqlChargeInfo | undefined {
        return this['charge_info'];
    }
    public withRegion(region: string): MysqlInstanceRequest {
        this['region'] = region;
        return this;
    }
    public withName(name: string): MysqlInstanceRequest {
        this['name'] = name;
        return this;
    }
    public withDatastore(datastore: MysqlDatastoreInReq): MysqlInstanceRequest {
        this['datastore'] = datastore;
        return this;
    }
    public withMode(mode: string): MysqlInstanceRequest {
        this['mode'] = mode;
        return this;
    }
    public withFlavorRef(flavorRef: string): MysqlInstanceRequest {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withVpcId(vpcId: string): MysqlInstanceRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): MysqlInstanceRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): MysqlInstanceRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withConfigurationId(configurationId: string): MysqlInstanceRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withPassword(password: string): MysqlInstanceRequest {
        this['password'] = password;
        return this;
    }
    public withBackupStrategy(backupStrategy: MysqlBackupStrategy): MysqlInstanceRequest {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: MysqlBackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): MysqlBackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withTimeZone(timeZone: string): MysqlInstanceRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withAvailabilityZoneMode(availabilityZoneMode: string): MysqlInstanceRequest {
        this['availability_zone_mode'] = availabilityZoneMode;
        return this;
    }
    public set availabilityZoneMode(availabilityZoneMode: string  | undefined) {
        this['availability_zone_mode'] = availabilityZoneMode;
    }
    public get availabilityZoneMode(): string | undefined {
        return this['availability_zone_mode'];
    }
    public withMasterAvailabilityZone(masterAvailabilityZone: string): MysqlInstanceRequest {
        this['master_availability_zone'] = masterAvailabilityZone;
        return this;
    }
    public set masterAvailabilityZone(masterAvailabilityZone: string  | undefined) {
        this['master_availability_zone'] = masterAvailabilityZone;
    }
    public get masterAvailabilityZone(): string | undefined {
        return this['master_availability_zone'];
    }
    public withSlaveCount(slaveCount: number): MysqlInstanceRequest {
        this['slave_count'] = slaveCount;
        return this;
    }
    public set slaveCount(slaveCount: number  | undefined) {
        this['slave_count'] = slaveCount;
    }
    public get slaveCount(): number | undefined {
        return this['slave_count'];
    }
    public withVolume(volume: MysqlVolume): MysqlInstanceRequest {
        this['volume'] = volume;
        return this;
    }
    public withTags(tags: Array<MysqlTags>): MysqlInstanceRequest {
        this['tags'] = tags;
        return this;
    }
    public withLowerCaseTableNames(lowerCaseTableNames: number): MysqlInstanceRequest {
        this['lower_case_table_names'] = lowerCaseTableNames;
        return this;
    }
    public set lowerCaseTableNames(lowerCaseTableNames: number  | undefined) {
        this['lower_case_table_names'] = lowerCaseTableNames;
    }
    public get lowerCaseTableNames(): number | undefined {
        return this['lower_case_table_names'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): MysqlInstanceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDedicatedResourceId(dedicatedResourceId: string): MysqlInstanceRequest {
        this['dedicated_resource_id'] = dedicatedResourceId;
        return this;
    }
    public set dedicatedResourceId(dedicatedResourceId: string  | undefined) {
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public get dedicatedResourceId(): string | undefined {
        return this['dedicated_resource_id'];
    }
    public withRestorePoint(restorePoint: MysqlRestorePoint): MysqlInstanceRequest {
        this['restore_point'] = restorePoint;
        return this;
    }
    public set restorePoint(restorePoint: MysqlRestorePoint  | undefined) {
        this['restore_point'] = restorePoint;
    }
    public get restorePoint(): MysqlRestorePoint | undefined {
        return this['restore_point'];
    }
    public withTdeInfo(tdeInfo: MysqlTdeInfo): MysqlInstanceRequest {
        this['tde_info'] = tdeInfo;
        return this;
    }
    public set tdeInfo(tdeInfo: MysqlTdeInfo  | undefined) {
        this['tde_info'] = tdeInfo;
    }
    public get tdeInfo(): MysqlTdeInfo | undefined {
        return this['tde_info'];
    }
}