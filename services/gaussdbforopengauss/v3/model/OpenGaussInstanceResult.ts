import { OpenGaussBackupStrategyForResponse } from './OpenGaussBackupStrategyForResponse';
import { OpenGaussChargeInfoResponse } from './OpenGaussChargeInfoResponse';
import { OpenGaussDatastoreResult } from './OpenGaussDatastoreResult';
import { OpenGaussHaResult } from './OpenGaussHaResult';
import { OpenGaussVolumeResult } from './OpenGaussVolumeResult';


export class OpenGaussInstanceResult {
    public id?: string;
    public name?: string;
    public status?: string;
    public datastore?: OpenGaussDatastoreResult;
    public ha?: OpenGaussHaResult;
    private 'replica_num'?: number;
    private 'backup_strategy'?: OpenGaussBackupStrategyForResponse;
    public port?: string;
    private 'enterprise_project_id'?: string;
    private 'flavor_ref'?: string;
    public volume?: OpenGaussVolumeResult;
    public region?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'charge_info'?: OpenGaussChargeInfoResponse;
    public constructor(id?: string, name?: string, status?: string, datastore?: OpenGaussDatastoreResult, backupStrategy?: OpenGaussBackupStrategyForResponse, port?: string, enterpriseProjectId?: string, flavorRef?: string, volume?: OpenGaussVolumeResult, region?: string, availabilityZone?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, chargeInfo?: OpenGaussChargeInfoResponse) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['datastore'] = datastore;
        this['backup_strategy'] = backupStrategy;
        this['port'] = port;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['flavor_ref'] = flavorRef;
        this['volume'] = volume;
        this['region'] = region;
        this['availability_zone'] = availabilityZone;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['charge_info'] = chargeInfo;
    }
    public withId(id: string): OpenGaussInstanceResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): OpenGaussInstanceResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): OpenGaussInstanceResult {
        this['status'] = status;
        return this;
    }
    public withDatastore(datastore: OpenGaussDatastoreResult): OpenGaussInstanceResult {
        this['datastore'] = datastore;
        return this;
    }
    public withHa(ha: OpenGaussHaResult): OpenGaussInstanceResult {
        this['ha'] = ha;
        return this;
    }
    public withReplicaNum(replicaNum: number): OpenGaussInstanceResult {
        this['replica_num'] = replicaNum;
        return this;
    }
    public set replicaNum(replicaNum: number  | undefined) {
        this['replica_num'] = replicaNum;
    }
    public get replicaNum(): number | undefined {
        return this['replica_num'];
    }
    public withBackupStrategy(backupStrategy: OpenGaussBackupStrategyForResponse): OpenGaussInstanceResult {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: OpenGaussBackupStrategyForResponse  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): OpenGaussBackupStrategyForResponse | undefined {
        return this['backup_strategy'];
    }
    public withPort(port: string): OpenGaussInstanceResult {
        this['port'] = port;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): OpenGaussInstanceResult {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFlavorRef(flavorRef: string): OpenGaussInstanceResult {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withVolume(volume: OpenGaussVolumeResult): OpenGaussInstanceResult {
        this['volume'] = volume;
        return this;
    }
    public withRegion(region: string): OpenGaussInstanceResult {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): OpenGaussInstanceResult {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): OpenGaussInstanceResult {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): OpenGaussInstanceResult {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): OpenGaussInstanceResult {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withChargeInfo(chargeInfo: OpenGaussChargeInfoResponse): OpenGaussInstanceResult {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: OpenGaussChargeInfoResponse  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): OpenGaussChargeInfoResponse | undefined {
        return this['charge_info'];
    }
}