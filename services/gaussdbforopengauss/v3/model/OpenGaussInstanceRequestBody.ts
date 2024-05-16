import { OpenGaussBackupStrategy } from './OpenGaussBackupStrategy';
import { OpenGaussChargeInfo } from './OpenGaussChargeInfo';
import { OpenGaussDatastoreOption } from './OpenGaussDatastoreOption';
import { OpenGaussHaOption } from './OpenGaussHaOption';
import { OpenGaussVolume } from './OpenGaussVolume';


export class OpenGaussInstanceRequestBody {
    public name?: string;
    public datastore?: OpenGaussDatastoreOption;
    public ha?: OpenGaussHaOption;
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
    private 'replica_num'?: OpenGaussInstanceRequestBodyReplicaNumEnum | number;
    private 'enable_force_switch'?: boolean;
    private 'enable_single_float_ip'?: boolean;
    public constructor(name?: string, datastore?: OpenGaussDatastoreOption, ha?: OpenGaussHaOption, password?: string, flavorRef?: string, volume?: OpenGaussVolume, region?: string, availabilityZone?: string, vpcId?: string, subnetId?: string, securityGroupId?: string) { 
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
    public withName(name: string): OpenGaussInstanceRequestBody {
        this['name'] = name;
        return this;
    }
    public withDatastore(datastore: OpenGaussDatastoreOption): OpenGaussInstanceRequestBody {
        this['datastore'] = datastore;
        return this;
    }
    public withHa(ha: OpenGaussHaOption): OpenGaussInstanceRequestBody {
        this['ha'] = ha;
        return this;
    }
    public withConfigurationId(configurationId: string): OpenGaussInstanceRequestBody {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withPort(port: string): OpenGaussInstanceRequestBody {
        this['port'] = port;
        return this;
    }
    public withPassword(password: string): OpenGaussInstanceRequestBody {
        this['password'] = password;
        return this;
    }
    public withBackupStrategy(backupStrategy: OpenGaussBackupStrategy): OpenGaussInstanceRequestBody {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: OpenGaussBackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): OpenGaussBackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): OpenGaussInstanceRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDiskEncryptionId(diskEncryptionId: string): OpenGaussInstanceRequestBody {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withFlavorRef(flavorRef: string): OpenGaussInstanceRequestBody {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withVolume(volume: OpenGaussVolume): OpenGaussInstanceRequestBody {
        this['volume'] = volume;
        return this;
    }
    public withRegion(region: string): OpenGaussInstanceRequestBody {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): OpenGaussInstanceRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): OpenGaussInstanceRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): OpenGaussInstanceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): OpenGaussInstanceRequestBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withChargeInfo(chargeInfo: OpenGaussChargeInfo): OpenGaussInstanceRequestBody {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: OpenGaussChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): OpenGaussChargeInfo | undefined {
        return this['charge_info'];
    }
    public withTimeZone(timeZone: string): OpenGaussInstanceRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withShardingNum(shardingNum: number): OpenGaussInstanceRequestBody {
        this['sharding_num'] = shardingNum;
        return this;
    }
    public set shardingNum(shardingNum: number  | undefined) {
        this['sharding_num'] = shardingNum;
    }
    public get shardingNum(): number | undefined {
        return this['sharding_num'];
    }
    public withCoordinatorNum(coordinatorNum: number): OpenGaussInstanceRequestBody {
        this['coordinator_num'] = coordinatorNum;
        return this;
    }
    public set coordinatorNum(coordinatorNum: number  | undefined) {
        this['coordinator_num'] = coordinatorNum;
    }
    public get coordinatorNum(): number | undefined {
        return this['coordinator_num'];
    }
    public withReplicaNum(replicaNum: OpenGaussInstanceRequestBodyReplicaNumEnum | number): OpenGaussInstanceRequestBody {
        this['replica_num'] = replicaNum;
        return this;
    }
    public set replicaNum(replicaNum: OpenGaussInstanceRequestBodyReplicaNumEnum | number  | undefined) {
        this['replica_num'] = replicaNum;
    }
    public get replicaNum(): OpenGaussInstanceRequestBodyReplicaNumEnum | number | undefined {
        return this['replica_num'];
    }
    public withEnableForceSwitch(enableForceSwitch: boolean): OpenGaussInstanceRequestBody {
        this['enable_force_switch'] = enableForceSwitch;
        return this;
    }
    public set enableForceSwitch(enableForceSwitch: boolean  | undefined) {
        this['enable_force_switch'] = enableForceSwitch;
    }
    public get enableForceSwitch(): boolean | undefined {
        return this['enable_force_switch'];
    }
    public withEnableSingleFloatIp(enableSingleFloatIp: boolean): OpenGaussInstanceRequestBody {
        this['enable_single_float_ip'] = enableSingleFloatIp;
        return this;
    }
    public set enableSingleFloatIp(enableSingleFloatIp: boolean  | undefined) {
        this['enable_single_float_ip'] = enableSingleFloatIp;
    }
    public get enableSingleFloatIp(): boolean | undefined {
        return this['enable_single_float_ip'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussInstanceRequestBodyReplicaNumEnum {
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
