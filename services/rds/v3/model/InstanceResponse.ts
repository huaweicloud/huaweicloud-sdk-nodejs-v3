import { BackupStrategyForResponse } from './BackupStrategyForResponse';
import { ChargeInfoResponse } from './ChargeInfoResponse';
import { Datastore } from './Datastore';
import { HaResponse } from './HaResponse';
import { NodeResponse } from './NodeResponse';
import { RelatedInstance } from './RelatedInstance';
import { ServerlessInfoResponse } from './ServerlessInfoResponse';
import { TagResponse } from './TagResponse';
import { VolumeForInstanceResponse } from './VolumeForInstanceResponse';


export class InstanceResponse {
    public id?: string;
    public status?: string;
    private 'enable_ssl'?: boolean;
    private 'private_ips'?: Array<string>;
    private 'private_dns_names'?: Array<string>;
    private 'public_dns_names'?: Array<string>;
    private 'public_ips'?: Array<string>;
    public type?: string;
    public created?: string;
    public updated?: string;
    private 'db_user_name'?: string;
    private 'switch_strategy'?: string;
    private 'read_only_by_user'?: boolean;
    private 'maintenance_window'?: string;
    public nodes?: Array<NodeResponse>;
    private 'related_instance'?: Array<RelatedInstance>;
    public name?: string;
    public datastore?: Datastore;
    public ha?: HaResponse;
    public port?: number;
    private 'backup_strategy'?: BackupStrategyForResponse;
    private 'enterprise_project_id'?: string;
    private 'disk_encryption_id'?: string;
    private 'flavor_ref'?: string;
    public cpu?: string;
    public mem?: string;
    public volume?: VolumeForInstanceResponse;
    public region?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'charge_info'?: ChargeInfoResponse;
    private 'time_zone'?: string;
    public tags?: Array<TagResponse>;
    private 'backup_used_space'?: number;
    private 'storage_used_space'?: number;
    private 'order_id'?: string;
    private 'associated_with_ddm'?: boolean;
    public alias?: string;
    private 'max_iops'?: number;
    private 'expiration_time'?: string;
    private 'serverless_info'?: ServerlessInfoResponse;
    public constructor(id?: string, status?: string, enableSsl?: boolean, privateIps?: Array<string>, publicIps?: Array<string>, type?: string, created?: string, updated?: string, dbUserName?: string, switchStrategy?: string, maintenanceWindow?: string, nodes?: Array<NodeResponse>, relatedInstance?: Array<RelatedInstance>, name?: string, datastore?: Datastore, port?: number, backupStrategy?: BackupStrategyForResponse, enterpriseProjectId?: string, diskEncryptionId?: string, flavorRef?: string, volume?: VolumeForInstanceResponse, region?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, chargeInfo?: ChargeInfoResponse, timeZone?: string, tags?: Array<TagResponse>) { 
        this['id'] = id;
        this['status'] = status;
        this['enable_ssl'] = enableSsl;
        this['private_ips'] = privateIps;
        this['public_ips'] = publicIps;
        this['type'] = type;
        this['created'] = created;
        this['updated'] = updated;
        this['db_user_name'] = dbUserName;
        this['switch_strategy'] = switchStrategy;
        this['maintenance_window'] = maintenanceWindow;
        this['nodes'] = nodes;
        this['related_instance'] = relatedInstance;
        this['name'] = name;
        this['datastore'] = datastore;
        this['port'] = port;
        this['backup_strategy'] = backupStrategy;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['disk_encryption_id'] = diskEncryptionId;
        this['flavor_ref'] = flavorRef;
        this['volume'] = volume;
        this['region'] = region;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['charge_info'] = chargeInfo;
        this['time_zone'] = timeZone;
        this['tags'] = tags;
    }
    public withId(id: string): InstanceResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): InstanceResponse {
        this['status'] = status;
        return this;
    }
    public withEnableSsl(enableSsl: boolean): InstanceResponse {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withPrivateIps(privateIps: Array<string>): InstanceResponse {
        this['private_ips'] = privateIps;
        return this;
    }
    public set privateIps(privateIps: Array<string>  | undefined) {
        this['private_ips'] = privateIps;
    }
    public get privateIps(): Array<string> | undefined {
        return this['private_ips'];
    }
    public withPrivateDnsNames(privateDnsNames: Array<string>): InstanceResponse {
        this['private_dns_names'] = privateDnsNames;
        return this;
    }
    public set privateDnsNames(privateDnsNames: Array<string>  | undefined) {
        this['private_dns_names'] = privateDnsNames;
    }
    public get privateDnsNames(): Array<string> | undefined {
        return this['private_dns_names'];
    }
    public withPublicDnsNames(publicDnsNames: Array<string>): InstanceResponse {
        this['public_dns_names'] = publicDnsNames;
        return this;
    }
    public set publicDnsNames(publicDnsNames: Array<string>  | undefined) {
        this['public_dns_names'] = publicDnsNames;
    }
    public get publicDnsNames(): Array<string> | undefined {
        return this['public_dns_names'];
    }
    public withPublicIps(publicIps: Array<string>): InstanceResponse {
        this['public_ips'] = publicIps;
        return this;
    }
    public set publicIps(publicIps: Array<string>  | undefined) {
        this['public_ips'] = publicIps;
    }
    public get publicIps(): Array<string> | undefined {
        return this['public_ips'];
    }
    public withType(type: string): InstanceResponse {
        this['type'] = type;
        return this;
    }
    public withCreated(created: string): InstanceResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): InstanceResponse {
        this['updated'] = updated;
        return this;
    }
    public withDbUserName(dbUserName: string): InstanceResponse {
        this['db_user_name'] = dbUserName;
        return this;
    }
    public set dbUserName(dbUserName: string  | undefined) {
        this['db_user_name'] = dbUserName;
    }
    public get dbUserName(): string | undefined {
        return this['db_user_name'];
    }
    public withSwitchStrategy(switchStrategy: string): InstanceResponse {
        this['switch_strategy'] = switchStrategy;
        return this;
    }
    public set switchStrategy(switchStrategy: string  | undefined) {
        this['switch_strategy'] = switchStrategy;
    }
    public get switchStrategy(): string | undefined {
        return this['switch_strategy'];
    }
    public withReadOnlyByUser(readOnlyByUser: boolean): InstanceResponse {
        this['read_only_by_user'] = readOnlyByUser;
        return this;
    }
    public set readOnlyByUser(readOnlyByUser: boolean  | undefined) {
        this['read_only_by_user'] = readOnlyByUser;
    }
    public get readOnlyByUser(): boolean | undefined {
        return this['read_only_by_user'];
    }
    public withMaintenanceWindow(maintenanceWindow: string): InstanceResponse {
        this['maintenance_window'] = maintenanceWindow;
        return this;
    }
    public set maintenanceWindow(maintenanceWindow: string  | undefined) {
        this['maintenance_window'] = maintenanceWindow;
    }
    public get maintenanceWindow(): string | undefined {
        return this['maintenance_window'];
    }
    public withNodes(nodes: Array<NodeResponse>): InstanceResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withRelatedInstance(relatedInstance: Array<RelatedInstance>): InstanceResponse {
        this['related_instance'] = relatedInstance;
        return this;
    }
    public set relatedInstance(relatedInstance: Array<RelatedInstance>  | undefined) {
        this['related_instance'] = relatedInstance;
    }
    public get relatedInstance(): Array<RelatedInstance> | undefined {
        return this['related_instance'];
    }
    public withName(name: string): InstanceResponse {
        this['name'] = name;
        return this;
    }
    public withDatastore(datastore: Datastore): InstanceResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withHa(ha: HaResponse): InstanceResponse {
        this['ha'] = ha;
        return this;
    }
    public withPort(port: number): InstanceResponse {
        this['port'] = port;
        return this;
    }
    public withBackupStrategy(backupStrategy: BackupStrategyForResponse): InstanceResponse {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: BackupStrategyForResponse  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): BackupStrategyForResponse | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDiskEncryptionId(diskEncryptionId: string): InstanceResponse {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withFlavorRef(flavorRef: string): InstanceResponse {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withCpu(cpu: string): InstanceResponse {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): InstanceResponse {
        this['mem'] = mem;
        return this;
    }
    public withVolume(volume: VolumeForInstanceResponse): InstanceResponse {
        this['volume'] = volume;
        return this;
    }
    public withRegion(region: string): InstanceResponse {
        this['region'] = region;
        return this;
    }
    public withVpcId(vpcId: string): InstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): InstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): InstanceResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withChargeInfo(chargeInfo: ChargeInfoResponse): InstanceResponse {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfoResponse  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfoResponse | undefined {
        return this['charge_info'];
    }
    public withTimeZone(timeZone: string): InstanceResponse {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withTags(tags: Array<TagResponse>): InstanceResponse {
        this['tags'] = tags;
        return this;
    }
    public withBackupUsedSpace(backupUsedSpace: number): InstanceResponse {
        this['backup_used_space'] = backupUsedSpace;
        return this;
    }
    public set backupUsedSpace(backupUsedSpace: number  | undefined) {
        this['backup_used_space'] = backupUsedSpace;
    }
    public get backupUsedSpace(): number | undefined {
        return this['backup_used_space'];
    }
    public withStorageUsedSpace(storageUsedSpace: number): InstanceResponse {
        this['storage_used_space'] = storageUsedSpace;
        return this;
    }
    public set storageUsedSpace(storageUsedSpace: number  | undefined) {
        this['storage_used_space'] = storageUsedSpace;
    }
    public get storageUsedSpace(): number | undefined {
        return this['storage_used_space'];
    }
    public withOrderId(orderId: string): InstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withAssociatedWithDdm(associatedWithDdm: boolean): InstanceResponse {
        this['associated_with_ddm'] = associatedWithDdm;
        return this;
    }
    public set associatedWithDdm(associatedWithDdm: boolean  | undefined) {
        this['associated_with_ddm'] = associatedWithDdm;
    }
    public get associatedWithDdm(): boolean | undefined {
        return this['associated_with_ddm'];
    }
    public withAlias(alias: string): InstanceResponse {
        this['alias'] = alias;
        return this;
    }
    public withMaxIops(maxIops: number): InstanceResponse {
        this['max_iops'] = maxIops;
        return this;
    }
    public set maxIops(maxIops: number  | undefined) {
        this['max_iops'] = maxIops;
    }
    public get maxIops(): number | undefined {
        return this['max_iops'];
    }
    public withExpirationTime(expirationTime: string): InstanceResponse {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: string  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): string | undefined {
        return this['expiration_time'];
    }
    public withServerlessInfo(serverlessInfo: ServerlessInfoResponse): InstanceResponse {
        this['serverless_info'] = serverlessInfo;
        return this;
    }
    public set serverlessInfo(serverlessInfo: ServerlessInfoResponse  | undefined) {
        this['serverless_info'] = serverlessInfo;
    }
    public get serverlessInfo(): ServerlessInfoResponse | undefined {
        return this['serverless_info'];
    }
}