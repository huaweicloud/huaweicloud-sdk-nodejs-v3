import { OpenGaussBackupStrategy } from './OpenGaussBackupStrategy';
import { OpenGaussChargeInfo } from './OpenGaussChargeInfo';
import { OpenGaussDatastore } from './OpenGaussDatastore';
import { OpenGaussHa } from './OpenGaussHa';
import { OpenGaussVolume } from './OpenGaussVolume';


export class OpenGaussInstanceRequest {
    public name?: string;
    public datastore?: OpenGaussDatastore;
    public ha?: OpenGaussHa;
    private 'configuration_id'?: string;
    public port?: string;
    public password?: string;
    private 'backup_strategy'?: OpenGaussBackupStrategy;
    private 'enterprise_project_id'?: string;
    private 'disk_encryption_id'?: string;
    private 'flavor_ref'?: string;
    public volume?: OpenGaussVolume;
    public region?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'charge_info'?: OpenGaussChargeInfo;
    private 'time_zone'?: string;
    private 'sharding_num'?: number;
    private 'coordinator_num'?: number;
    private 'replica_num'?: OpenGaussInstanceRequestReplicaNumEnum | number;
    private 'enable_force_switch'?: boolean;
    public constructor(name?: string, datastore?: OpenGaussDatastore, ha?: OpenGaussHa, password?: string, flavorRef?: string, volume?: OpenGaussVolume, region?: string, availabilityZone?: string, vpcId?: string, subnetId?: string, securityGroupId?: string) { 
        this['name'] = name;
        this['datastore'] = datastore;
        this['ha'] = ha;
        this['password'] = password;
        this['flavor_ref'] = flavorRef;
        this['volume'] = volume;
        this['region'] = region;
        this['availability_zone'] = availabilityZone;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
    }
    public withName(name: string): OpenGaussInstanceRequest {
        this['name'] = name;
        return this;
    }
    public withDatastore(datastore: OpenGaussDatastore): OpenGaussInstanceRequest {
        this['datastore'] = datastore;
        return this;
    }
    public withHa(ha: OpenGaussHa): OpenGaussInstanceRequest {
        this['ha'] = ha;
        return this;
    }
    public withConfigurationId(configurationId: string): OpenGaussInstanceRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withPort(port: string): OpenGaussInstanceRequest {
        this['port'] = port;
        return this;
    }
    public withPassword(password: string): OpenGaussInstanceRequest {
        this['password'] = password;
        return this;
    }
    public withBackupStrategy(backupStrategy: OpenGaussBackupStrategy): OpenGaussInstanceRequest {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: OpenGaussBackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): OpenGaussBackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): OpenGaussInstanceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDiskEncryptionId(diskEncryptionId: string): OpenGaussInstanceRequest {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withFlavorRef(flavorRef: string): OpenGaussInstanceRequest {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withVolume(volume: OpenGaussVolume): OpenGaussInstanceRequest {
        this['volume'] = volume;
        return this;
    }
    public withRegion(region: string): OpenGaussInstanceRequest {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): OpenGaussInstanceRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): OpenGaussInstanceRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): OpenGaussInstanceRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): OpenGaussInstanceRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withChargeInfo(chargeInfo: OpenGaussChargeInfo): OpenGaussInstanceRequest {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: OpenGaussChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): OpenGaussChargeInfo | undefined {
        return this['charge_info'];
    }
    public withTimeZone(timeZone: string): OpenGaussInstanceRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withShardingNum(shardingNum: number): OpenGaussInstanceRequest {
        this['sharding_num'] = shardingNum;
        return this;
    }
    public set shardingNum(shardingNum: number  | undefined) {
        this['sharding_num'] = shardingNum;
    }
    public get shardingNum(): number | undefined {
        return this['sharding_num'];
    }
    public withCoordinatorNum(coordinatorNum: number): OpenGaussInstanceRequest {
        this['coordinator_num'] = coordinatorNum;
        return this;
    }
    public set coordinatorNum(coordinatorNum: number  | undefined) {
        this['coordinator_num'] = coordinatorNum;
    }
    public get coordinatorNum(): number | undefined {
        return this['coordinator_num'];
    }
    public withReplicaNum(replicaNum: OpenGaussInstanceRequestReplicaNumEnum | number): OpenGaussInstanceRequest {
        this['replica_num'] = replicaNum;
        return this;
    }
    public set replicaNum(replicaNum: OpenGaussInstanceRequestReplicaNumEnum | number  | undefined) {
        this['replica_num'] = replicaNum;
    }
    public get replicaNum(): OpenGaussInstanceRequestReplicaNumEnum | number | undefined {
        return this['replica_num'];
    }
    public withEnableForceSwitch(enableForceSwitch: boolean): OpenGaussInstanceRequest {
        this['enable_force_switch'] = enableForceSwitch;
        return this;
    }
    public set enableForceSwitch(enableForceSwitch: boolean  | undefined) {
        this['enable_force_switch'] = enableForceSwitch;
    }
    public get enableForceSwitch(): boolean | undefined {
        return this['enable_force_switch'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussInstanceRequestReplicaNumEnum {
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
