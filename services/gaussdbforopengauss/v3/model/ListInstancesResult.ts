import { ListFlavorInfo } from './ListFlavorInfo';
import { ListHaResult } from './ListHaResult';
import { ListInstanceDatastore } from './ListInstanceDatastore';
import { ListVolume } from './ListVolume';
import { MySQLCompatibilityResult } from './MySQLCompatibilityResult';
import { NodeResult } from './NodeResult';
import { OpenGaussBackupStrategyForListResponse } from './OpenGaussBackupStrategyForListResponse';
import { OpenGaussChargeInfoListResponse } from './OpenGaussChargeInfoListResponse';
import { TagResult } from './TagResult';


export class ListInstancesResult {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'private_ips'?: Array<string>;
    private 'public_ips'?: Array<string>;
    public port?: number;
    public type?: string;
    public ha?: ListHaResult;
    private 'replica_num'?: number;
    public region?: string;
    public datastore?: ListInstanceDatastore;
    public created?: string;
    public updated?: string;
    private 'db_user_name'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'flavor_ref'?: string;
    private 'flavor_info'?: ListFlavorInfo;
    public volume?: ListVolume;
    private 'switch_strategy'?: string;
    private 'backup_strategy'?: OpenGaussBackupStrategyForListResponse;
    private 'maintenance_window'?: string;
    public nodes?: Array<NodeResult>;
    private 'enterprise_project_id'?: string;
    private 'instance_mode'?: string;
    private 'disk_encryption_id'?: string;
    private 'charge_info'?: OpenGaussChargeInfoListResponse;
    private 'time_zone'?: string;
    public tags?: Array<TagResult>;
    private 'disk_usage'?: string;
    private 'mysql_compatibility'?: MySQLCompatibilityResult;
    public constructor(id?: string, name?: string, status?: string, privateIps?: Array<string>, publicIps?: Array<string>, port?: number, type?: string, ha?: ListHaResult, region?: string, datastore?: ListInstanceDatastore, created?: string, updated?: string, dbUserName?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, flavorRef?: string, flavorInfo?: ListFlavorInfo, volume?: ListVolume, switchStrategy?: string, backupStrategy?: OpenGaussBackupStrategyForListResponse, maintenanceWindow?: string, nodes?: Array<NodeResult>, enterpriseProjectId?: string, instanceMode?: string, diskEncryptionId?: string, chargeInfo?: OpenGaussChargeInfoListResponse, timeZone?: string, tags?: Array<TagResult>) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['private_ips'] = privateIps;
        this['public_ips'] = publicIps;
        this['port'] = port;
        this['type'] = type;
        this['ha'] = ha;
        this['region'] = region;
        this['datastore'] = datastore;
        this['created'] = created;
        this['updated'] = updated;
        this['db_user_name'] = dbUserName;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['flavor_ref'] = flavorRef;
        this['flavor_info'] = flavorInfo;
        this['volume'] = volume;
        this['switch_strategy'] = switchStrategy;
        this['backup_strategy'] = backupStrategy;
        this['maintenance_window'] = maintenanceWindow;
        this['nodes'] = nodes;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['instance_mode'] = instanceMode;
        this['disk_encryption_id'] = diskEncryptionId;
        this['charge_info'] = chargeInfo;
        this['time_zone'] = timeZone;
        this['tags'] = tags;
    }
    public withId(id: string): ListInstancesResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInstancesResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListInstancesResult {
        this['status'] = status;
        return this;
    }
    public withPrivateIps(privateIps: Array<string>): ListInstancesResult {
        this['private_ips'] = privateIps;
        return this;
    }
    public set privateIps(privateIps: Array<string>  | undefined) {
        this['private_ips'] = privateIps;
    }
    public get privateIps(): Array<string> | undefined {
        return this['private_ips'];
    }
    public withPublicIps(publicIps: Array<string>): ListInstancesResult {
        this['public_ips'] = publicIps;
        return this;
    }
    public set publicIps(publicIps: Array<string>  | undefined) {
        this['public_ips'] = publicIps;
    }
    public get publicIps(): Array<string> | undefined {
        return this['public_ips'];
    }
    public withPort(port: number): ListInstancesResult {
        this['port'] = port;
        return this;
    }
    public withType(type: string): ListInstancesResult {
        this['type'] = type;
        return this;
    }
    public withHa(ha: ListHaResult): ListInstancesResult {
        this['ha'] = ha;
        return this;
    }
    public withReplicaNum(replicaNum: number): ListInstancesResult {
        this['replica_num'] = replicaNum;
        return this;
    }
    public set replicaNum(replicaNum: number  | undefined) {
        this['replica_num'] = replicaNum;
    }
    public get replicaNum(): number | undefined {
        return this['replica_num'];
    }
    public withRegion(region: string): ListInstancesResult {
        this['region'] = region;
        return this;
    }
    public withDatastore(datastore: ListInstanceDatastore): ListInstancesResult {
        this['datastore'] = datastore;
        return this;
    }
    public withCreated(created: string): ListInstancesResult {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ListInstancesResult {
        this['updated'] = updated;
        return this;
    }
    public withDbUserName(dbUserName: string): ListInstancesResult {
        this['db_user_name'] = dbUserName;
        return this;
    }
    public set dbUserName(dbUserName: string  | undefined) {
        this['db_user_name'] = dbUserName;
    }
    public get dbUserName(): string | undefined {
        return this['db_user_name'];
    }
    public withVpcId(vpcId: string): ListInstancesResult {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListInstancesResult {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ListInstancesResult {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withFlavorRef(flavorRef: string): ListInstancesResult {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withFlavorInfo(flavorInfo: ListFlavorInfo): ListInstancesResult {
        this['flavor_info'] = flavorInfo;
        return this;
    }
    public set flavorInfo(flavorInfo: ListFlavorInfo  | undefined) {
        this['flavor_info'] = flavorInfo;
    }
    public get flavorInfo(): ListFlavorInfo | undefined {
        return this['flavor_info'];
    }
    public withVolume(volume: ListVolume): ListInstancesResult {
        this['volume'] = volume;
        return this;
    }
    public withSwitchStrategy(switchStrategy: string): ListInstancesResult {
        this['switch_strategy'] = switchStrategy;
        return this;
    }
    public set switchStrategy(switchStrategy: string  | undefined) {
        this['switch_strategy'] = switchStrategy;
    }
    public get switchStrategy(): string | undefined {
        return this['switch_strategy'];
    }
    public withBackupStrategy(backupStrategy: OpenGaussBackupStrategyForListResponse): ListInstancesResult {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: OpenGaussBackupStrategyForListResponse  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): OpenGaussBackupStrategyForListResponse | undefined {
        return this['backup_strategy'];
    }
    public withMaintenanceWindow(maintenanceWindow: string): ListInstancesResult {
        this['maintenance_window'] = maintenanceWindow;
        return this;
    }
    public set maintenanceWindow(maintenanceWindow: string  | undefined) {
        this['maintenance_window'] = maintenanceWindow;
    }
    public get maintenanceWindow(): string | undefined {
        return this['maintenance_window'];
    }
    public withNodes(nodes: Array<NodeResult>): ListInstancesResult {
        this['nodes'] = nodes;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstancesResult {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withInstanceMode(instanceMode: string): ListInstancesResult {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): string | undefined {
        return this['instance_mode'];
    }
    public withDiskEncryptionId(diskEncryptionId: string): ListInstancesResult {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withChargeInfo(chargeInfo: OpenGaussChargeInfoListResponse): ListInstancesResult {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: OpenGaussChargeInfoListResponse  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): OpenGaussChargeInfoListResponse | undefined {
        return this['charge_info'];
    }
    public withTimeZone(timeZone: string): ListInstancesResult {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withTags(tags: Array<TagResult>): ListInstancesResult {
        this['tags'] = tags;
        return this;
    }
    public withDiskUsage(diskUsage: string): ListInstancesResult {
        this['disk_usage'] = diskUsage;
        return this;
    }
    public set diskUsage(diskUsage: string  | undefined) {
        this['disk_usage'] = diskUsage;
    }
    public get diskUsage(): string | undefined {
        return this['disk_usage'];
    }
    public withMysqlCompatibility(mysqlCompatibility: MySQLCompatibilityResult): ListInstancesResult {
        this['mysql_compatibility'] = mysqlCompatibility;
        return this;
    }
    public set mysqlCompatibility(mysqlCompatibility: MySQLCompatibilityResult  | undefined) {
        this['mysql_compatibility'] = mysqlCompatibility;
    }
    public get mysqlCompatibility(): MySQLCompatibilityResult | undefined {
        return this['mysql_compatibility'];
    }
}