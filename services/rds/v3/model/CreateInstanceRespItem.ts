import { BackupStrategy } from './BackupStrategy';
import { ChargeInfo } from './ChargeInfo';
import { Datastore } from './Datastore';
import { Ha } from './Ha';
import { RestorePoint } from './RestorePoint';
import { Volume } from './Volume';


export class CreateInstanceRespItem {
    public id?: string;
    public name?: string;
    public status?: string;
    public datastore?: Datastore;
    public ha?: Ha;
    private 'configuration_id'?: string;
    public port?: string;
    private 'backup_strategy'?: BackupStrategy;
    private 'enterprise_project_id'?: string;
    private 'disk_encryption_id'?: string;
    private 'flavor_ref'?: string;
    public volume?: Volume;
    public region?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'charge_info'?: ChargeInfo;
    public collation?: string;
    private 'restore_point'?: RestorePoint;
    public constructor(name?: string, datastore?: Datastore, flavorRef?: string, volume?: Volume, region?: string, availabilityZone?: string, vpcId?: string, subnetId?: string, securityGroupId?: string) { 
        this['name'] = name;
        this['datastore'] = datastore;
        this['flavor_ref'] = flavorRef;
        this['volume'] = volume;
        this['region'] = region;
        this['availability_zone'] = availabilityZone;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
    }
    public withId(id: string): CreateInstanceRespItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateInstanceRespItem {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CreateInstanceRespItem {
        this['status'] = status;
        return this;
    }
    public withDatastore(datastore: Datastore): CreateInstanceRespItem {
        this['datastore'] = datastore;
        return this;
    }
    public withHa(ha: Ha): CreateInstanceRespItem {
        this['ha'] = ha;
        return this;
    }
    public withConfigurationId(configurationId: string): CreateInstanceRespItem {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withPort(port: string): CreateInstanceRespItem {
        this['port'] = port;
        return this;
    }
    public withBackupStrategy(backupStrategy: BackupStrategy): CreateInstanceRespItem {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: BackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): BackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceRespItem {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDiskEncryptionId(diskEncryptionId: string): CreateInstanceRespItem {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withFlavorRef(flavorRef: string): CreateInstanceRespItem {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withVolume(volume: Volume): CreateInstanceRespItem {
        this['volume'] = volume;
        return this;
    }
    public withRegion(region: string): CreateInstanceRespItem {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateInstanceRespItem {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): CreateInstanceRespItem {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceRespItem {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceRespItem {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withChargeInfo(chargeInfo: ChargeInfo): CreateInstanceRespItem {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfo | undefined {
        return this['charge_info'];
    }
    public withCollation(collation: string): CreateInstanceRespItem {
        this['collation'] = collation;
        return this;
    }
    public withRestorePoint(restorePoint: RestorePoint): CreateInstanceRespItem {
        this['restore_point'] = restorePoint;
        return this;
    }
    public set restorePoint(restorePoint: RestorePoint  | undefined) {
        this['restore_point'] = restorePoint;
    }
    public get restorePoint(): RestorePoint | undefined {
        return this['restore_point'];
    }
}