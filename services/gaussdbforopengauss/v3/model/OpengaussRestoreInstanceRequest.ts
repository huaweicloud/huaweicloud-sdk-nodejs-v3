import { OpenGaussBackupStrategy } from './OpenGaussBackupStrategy';
import { OpenGaussChargeInfo } from './OpenGaussChargeInfo';
import { OpenGaussVolume } from './OpenGaussVolume';
import { RestorePoint } from './RestorePoint';


export class OpengaussRestoreInstanceRequest {
    public name?: string;
    private 'availability_zone'?: string;
    private 'flavor_ref'?: string;
    public volume?: OpenGaussVolume;
    private 'disk_encryption_id'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    public password?: string;
    private 'charge_info'?: OpenGaussChargeInfo;
    private 'restore_point'?: RestorePoint;
    private 'backup_strategy'?: OpenGaussBackupStrategy;
    private 'enable_parallel_restore'?: boolean;
    private 'configuration_id'?: string;
    private 'enterprise_project_id'?: string;
    public port?: string;
    private 'time_zone'?: string;
    private 'enable_force_switch'?: boolean;
    public constructor(name?: string, availabilityZone?: string, flavorRef?: string, volume?: OpenGaussVolume, vpcId?: string, subnetId?: string, securityGroupId?: string, password?: string, restorePoint?: RestorePoint) { 
        this['name'] = name;
        this['availability_zone'] = availabilityZone;
        this['flavor_ref'] = flavorRef;
        this['volume'] = volume;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['password'] = password;
        this['restore_point'] = restorePoint;
    }
    public withName(name: string): OpengaussRestoreInstanceRequest {
        this['name'] = name;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): OpengaussRestoreInstanceRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withFlavorRef(flavorRef: string): OpengaussRestoreInstanceRequest {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withVolume(volume: OpenGaussVolume): OpengaussRestoreInstanceRequest {
        this['volume'] = volume;
        return this;
    }
    public withDiskEncryptionId(diskEncryptionId: string): OpengaussRestoreInstanceRequest {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withVpcId(vpcId: string): OpengaussRestoreInstanceRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): OpengaussRestoreInstanceRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): OpengaussRestoreInstanceRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withPassword(password: string): OpengaussRestoreInstanceRequest {
        this['password'] = password;
        return this;
    }
    public withChargeInfo(chargeInfo: OpenGaussChargeInfo): OpengaussRestoreInstanceRequest {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: OpenGaussChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): OpenGaussChargeInfo | undefined {
        return this['charge_info'];
    }
    public withRestorePoint(restorePoint: RestorePoint): OpengaussRestoreInstanceRequest {
        this['restore_point'] = restorePoint;
        return this;
    }
    public set restorePoint(restorePoint: RestorePoint  | undefined) {
        this['restore_point'] = restorePoint;
    }
    public get restorePoint(): RestorePoint | undefined {
        return this['restore_point'];
    }
    public withBackupStrategy(backupStrategy: OpenGaussBackupStrategy): OpengaussRestoreInstanceRequest {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: OpenGaussBackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): OpenGaussBackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withEnableParallelRestore(enableParallelRestore: boolean): OpengaussRestoreInstanceRequest {
        this['enable_parallel_restore'] = enableParallelRestore;
        return this;
    }
    public set enableParallelRestore(enableParallelRestore: boolean  | undefined) {
        this['enable_parallel_restore'] = enableParallelRestore;
    }
    public get enableParallelRestore(): boolean | undefined {
        return this['enable_parallel_restore'];
    }
    public withConfigurationId(configurationId: string): OpengaussRestoreInstanceRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): OpengaussRestoreInstanceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPort(port: string): OpengaussRestoreInstanceRequest {
        this['port'] = port;
        return this;
    }
    public withTimeZone(timeZone: string): OpengaussRestoreInstanceRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withEnableForceSwitch(enableForceSwitch: boolean): OpengaussRestoreInstanceRequest {
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