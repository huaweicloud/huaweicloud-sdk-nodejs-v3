import { OpenGaussBackupStrategyForResponse } from './OpenGaussBackupStrategyForResponse';
import { OpenGaussChargeInfo } from './OpenGaussChargeInfo';
import { OpenGaussDatastoreResponse } from './OpenGaussDatastoreResponse';
import { OpenGaussHaResponse } from './OpenGaussHaResponse';
import { OpenGaussVolumeResponse } from './OpenGaussVolumeResponse';


export class CreateInstanceRespItem {
    public id?: string;
    public name?: string;
    public status?: string;
    public datastore?: OpenGaussDatastoreResponse;
    public ha?: OpenGaussHaResponse;
    public port?: string;
    public volume?: OpenGaussVolumeResponse;
    private 'replica_num'?: number;
    public region?: string;
    private 'backup_strategy'?: OpenGaussBackupStrategyForResponse;
    private 'flavor_ref'?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'charge_info'?: OpenGaussChargeInfo;
    public constructor(id?: string, name?: string, status?: string, datastore?: OpenGaussDatastoreResponse, ha?: OpenGaussHaResponse, port?: string, volume?: OpenGaussVolumeResponse, replicaNum?: number, region?: string, backupStrategy?: OpenGaussBackupStrategyForResponse, flavorRef?: string, availabilityZone?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, chargeInfo?: OpenGaussChargeInfo) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['datastore'] = datastore;
        this['ha'] = ha;
        this['port'] = port;
        this['volume'] = volume;
        this['replica_num'] = replicaNum;
        this['region'] = region;
        this['backup_strategy'] = backupStrategy;
        this['flavor_ref'] = flavorRef;
        this['availability_zone'] = availabilityZone;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['charge_info'] = chargeInfo;
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
    public withDatastore(datastore: OpenGaussDatastoreResponse): CreateInstanceRespItem {
        this['datastore'] = datastore;
        return this;
    }
    public withHa(ha: OpenGaussHaResponse): CreateInstanceRespItem {
        this['ha'] = ha;
        return this;
    }
    public withPort(port: string): CreateInstanceRespItem {
        this['port'] = port;
        return this;
    }
    public withVolume(volume: OpenGaussVolumeResponse): CreateInstanceRespItem {
        this['volume'] = volume;
        return this;
    }
    public withReplicaNum(replicaNum: number): CreateInstanceRespItem {
        this['replica_num'] = replicaNum;
        return this;
    }
    public set replicaNum(replicaNum: number  | undefined) {
        this['replica_num'] = replicaNum;
    }
    public get replicaNum(): number | undefined {
        return this['replica_num'];
    }
    public withRegion(region: string): CreateInstanceRespItem {
        this['region'] = region;
        return this;
    }
    public withBackupStrategy(backupStrategy: OpenGaussBackupStrategyForResponse): CreateInstanceRespItem {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: OpenGaussBackupStrategyForResponse  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): OpenGaussBackupStrategyForResponse | undefined {
        return this['backup_strategy'];
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
    public withChargeInfo(chargeInfo: OpenGaussChargeInfo): CreateInstanceRespItem {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: OpenGaussChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): OpenGaussChargeInfo | undefined {
        return this['charge_info'];
    }
}