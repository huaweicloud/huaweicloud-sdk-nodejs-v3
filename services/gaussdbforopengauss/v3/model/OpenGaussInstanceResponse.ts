import { OpenGaussBackupStrategyForResponse } from './OpenGaussBackupStrategyForResponse';
import { OpenGaussChargeInfoResponse } from './OpenGaussChargeInfoResponse';
import { OpenGaussDatastoreResponse } from './OpenGaussDatastoreResponse';
import { OpenGaussHaResponse } from './OpenGaussHaResponse';
import { OpenGaussVolumeResponse } from './OpenGaussVolumeResponse';


export class OpenGaussInstanceResponse {
    public id?: string;
    public name?: string;
    public status?: string;
    public datastore?: OpenGaussDatastoreResponse;
    public ha?: OpenGaussHaResponse;
    private 'replica_num'?: number;
    private 'backup_strategy'?: OpenGaussBackupStrategyForResponse;
    public port?: string;
    private 'enterprise_project_id'?: string;
    private 'flavor_ref'?: string;
    public volume?: OpenGaussVolumeResponse;
    public region?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'charge_info'?: OpenGaussChargeInfoResponse;
    public constructor(id?: string, name?: string, status?: string, datastore?: OpenGaussDatastoreResponse, backupStrategy?: OpenGaussBackupStrategyForResponse, port?: string, enterpriseProjectId?: string, flavorRef?: string, volume?: OpenGaussVolumeResponse, region?: string, availabilityZone?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, chargeInfo?: OpenGaussChargeInfoResponse) { 
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
    public withId(id: string): OpenGaussInstanceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): OpenGaussInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): OpenGaussInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withDatastore(datastore: OpenGaussDatastoreResponse): OpenGaussInstanceResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withHa(ha: OpenGaussHaResponse): OpenGaussInstanceResponse {
        this['ha'] = ha;
        return this;
    }
    public withReplicaNum(replicaNum: number): OpenGaussInstanceResponse {
        this['replica_num'] = replicaNum;
        return this;
    }
    public set replicaNum(replicaNum: number  | undefined) {
        this['replica_num'] = replicaNum;
    }
    public get replicaNum(): number | undefined {
        return this['replica_num'];
    }
    public withBackupStrategy(backupStrategy: OpenGaussBackupStrategyForResponse): OpenGaussInstanceResponse {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: OpenGaussBackupStrategyForResponse  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): OpenGaussBackupStrategyForResponse | undefined {
        return this['backup_strategy'];
    }
    public withPort(port: string): OpenGaussInstanceResponse {
        this['port'] = port;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): OpenGaussInstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFlavorRef(flavorRef: string): OpenGaussInstanceResponse {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withVolume(volume: OpenGaussVolumeResponse): OpenGaussInstanceResponse {
        this['volume'] = volume;
        return this;
    }
    public withRegion(region: string): OpenGaussInstanceResponse {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): OpenGaussInstanceResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): OpenGaussInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): OpenGaussInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): OpenGaussInstanceResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withChargeInfo(chargeInfo: OpenGaussChargeInfoResponse): OpenGaussInstanceResponse {
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