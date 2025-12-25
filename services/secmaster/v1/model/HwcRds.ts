import { HwcRdsBackupStrategy } from './HwcRdsBackupStrategy';
import { HwcRdsDatastore } from './HwcRdsDatastore';
import { HwcRdsHa } from './HwcRdsHa';
import { HwcRdsNode } from './HwcRdsNode';
import { HwcRdsRelatedInstance } from './HwcRdsRelatedInstance';
import { HwcRdsVolume } from './HwcRdsVolume';
import { Tag } from './Tag';


export class HwcRds {
    public id?: string;
    public name?: string;
    private 'protected_status'?: string;
    public status?: string;
    public alias?: string;
    private 'private_ips'?: Array<string>;
    private 'private_dns_names'?: Array<string>;
    private 'public_ips'?: Array<string>;
    public port?: number;
    private 'enable_ssl'?: boolean;
    public type?: string;
    public ha?: HwcRdsHa;
    public region?: string;
    public datastore?: HwcRdsDatastore;
    public created?: string;
    public updated?: string;
    private 'db_user_name'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'flavor_ref'?: string;
    public cpu?: string;
    public mem?: string;
    public volume?: HwcRdsVolume;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    private 'switch_strategy'?: string;
    private 'read_only_by_user'?: boolean;
    private 'backup_strategy'?: HwcRdsBackupStrategy;
    private 'maintenance_window'?: string;
    public nodes?: Array<HwcRdsNode>;
    private 'related_instance'?: Array<HwcRdsRelatedInstance>;
    private 'disk_encryption_id'?: string;
    private 'time_zone'?: string;
    private 'backup_used_space'?: number;
    private 'storage_used_space'?: number;
    private 'associated_with_ddm'?: boolean;
    private 'max_iops'?: number;
    private 'expiration_time'?: string;
    public constructor(id?: string, name?: string, protectedStatus?: string, status?: string, port?: number, enableSsl?: boolean, type?: string, ha?: HwcRdsHa, region?: string, datastore?: HwcRdsDatastore, created?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, flavorRef?: string, cpu?: string, mem?: string, volume?: HwcRdsVolume, projectId?: string, switchStrategy?: string, readOnlyByUser?: boolean, backupStrategy?: HwcRdsBackupStrategy, maintenanceWindow?: string, nodes?: Array<HwcRdsNode>, relatedInstance?: Array<HwcRdsRelatedInstance>, timeZone?: string, storageUsedSpace?: number, associatedWithDdm?: boolean, maxIops?: number, expirationTime?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['protected_status'] = protectedStatus;
        this['status'] = status;
        this['port'] = port;
        this['enable_ssl'] = enableSsl;
        this['type'] = type;
        this['ha'] = ha;
        this['region'] = region;
        this['datastore'] = datastore;
        this['created'] = created;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['flavor_ref'] = flavorRef;
        this['cpu'] = cpu;
        this['mem'] = mem;
        this['volume'] = volume;
        this['project_id'] = projectId;
        this['switch_strategy'] = switchStrategy;
        this['read_only_by_user'] = readOnlyByUser;
        this['backup_strategy'] = backupStrategy;
        this['maintenance_window'] = maintenanceWindow;
        this['nodes'] = nodes;
        this['related_instance'] = relatedInstance;
        this['time_zone'] = timeZone;
        this['storage_used_space'] = storageUsedSpace;
        this['associated_with_ddm'] = associatedWithDdm;
        this['max_iops'] = maxIops;
        this['expiration_time'] = expirationTime;
    }
    public withId(id: string): HwcRds {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HwcRds {
        this['name'] = name;
        return this;
    }
    public withProtectedStatus(protectedStatus: string): HwcRds {
        this['protected_status'] = protectedStatus;
        return this;
    }
    public set protectedStatus(protectedStatus: string  | undefined) {
        this['protected_status'] = protectedStatus;
    }
    public get protectedStatus(): string | undefined {
        return this['protected_status'];
    }
    public withStatus(status: string): HwcRds {
        this['status'] = status;
        return this;
    }
    public withAlias(alias: string): HwcRds {
        this['alias'] = alias;
        return this;
    }
    public withPrivateIps(privateIps: Array<string>): HwcRds {
        this['private_ips'] = privateIps;
        return this;
    }
    public set privateIps(privateIps: Array<string>  | undefined) {
        this['private_ips'] = privateIps;
    }
    public get privateIps(): Array<string> | undefined {
        return this['private_ips'];
    }
    public withPrivateDnsNames(privateDnsNames: Array<string>): HwcRds {
        this['private_dns_names'] = privateDnsNames;
        return this;
    }
    public set privateDnsNames(privateDnsNames: Array<string>  | undefined) {
        this['private_dns_names'] = privateDnsNames;
    }
    public get privateDnsNames(): Array<string> | undefined {
        return this['private_dns_names'];
    }
    public withPublicIps(publicIps: Array<string>): HwcRds {
        this['public_ips'] = publicIps;
        return this;
    }
    public set publicIps(publicIps: Array<string>  | undefined) {
        this['public_ips'] = publicIps;
    }
    public get publicIps(): Array<string> | undefined {
        return this['public_ips'];
    }
    public withPort(port: number): HwcRds {
        this['port'] = port;
        return this;
    }
    public withEnableSsl(enableSsl: boolean): HwcRds {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withType(type: string): HwcRds {
        this['type'] = type;
        return this;
    }
    public withHa(ha: HwcRdsHa): HwcRds {
        this['ha'] = ha;
        return this;
    }
    public withRegion(region: string): HwcRds {
        this['region'] = region;
        return this;
    }
    public withDatastore(datastore: HwcRdsDatastore): HwcRds {
        this['datastore'] = datastore;
        return this;
    }
    public withCreated(created: string): HwcRds {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): HwcRds {
        this['updated'] = updated;
        return this;
    }
    public withDbUserName(dbUserName: string): HwcRds {
        this['db_user_name'] = dbUserName;
        return this;
    }
    public set dbUserName(dbUserName: string  | undefined) {
        this['db_user_name'] = dbUserName;
    }
    public get dbUserName(): string | undefined {
        return this['db_user_name'];
    }
    public withVpcId(vpcId: string): HwcRds {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): HwcRds {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): HwcRds {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withFlavorRef(flavorRef: string): HwcRds {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withCpu(cpu: string): HwcRds {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): HwcRds {
        this['mem'] = mem;
        return this;
    }
    public withVolume(volume: HwcRdsVolume): HwcRds {
        this['volume'] = volume;
        return this;
    }
    public withTags(tags: Array<Tag>): HwcRds {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): HwcRds {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): HwcRds {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSwitchStrategy(switchStrategy: string): HwcRds {
        this['switch_strategy'] = switchStrategy;
        return this;
    }
    public set switchStrategy(switchStrategy: string  | undefined) {
        this['switch_strategy'] = switchStrategy;
    }
    public get switchStrategy(): string | undefined {
        return this['switch_strategy'];
    }
    public withReadOnlyByUser(readOnlyByUser: boolean): HwcRds {
        this['read_only_by_user'] = readOnlyByUser;
        return this;
    }
    public set readOnlyByUser(readOnlyByUser: boolean  | undefined) {
        this['read_only_by_user'] = readOnlyByUser;
    }
    public get readOnlyByUser(): boolean | undefined {
        return this['read_only_by_user'];
    }
    public withBackupStrategy(backupStrategy: HwcRdsBackupStrategy): HwcRds {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: HwcRdsBackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): HwcRdsBackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withMaintenanceWindow(maintenanceWindow: string): HwcRds {
        this['maintenance_window'] = maintenanceWindow;
        return this;
    }
    public set maintenanceWindow(maintenanceWindow: string  | undefined) {
        this['maintenance_window'] = maintenanceWindow;
    }
    public get maintenanceWindow(): string | undefined {
        return this['maintenance_window'];
    }
    public withNodes(nodes: Array<HwcRdsNode>): HwcRds {
        this['nodes'] = nodes;
        return this;
    }
    public withRelatedInstance(relatedInstance: Array<HwcRdsRelatedInstance>): HwcRds {
        this['related_instance'] = relatedInstance;
        return this;
    }
    public set relatedInstance(relatedInstance: Array<HwcRdsRelatedInstance>  | undefined) {
        this['related_instance'] = relatedInstance;
    }
    public get relatedInstance(): Array<HwcRdsRelatedInstance> | undefined {
        return this['related_instance'];
    }
    public withDiskEncryptionId(diskEncryptionId: string): HwcRds {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withTimeZone(timeZone: string): HwcRds {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withBackupUsedSpace(backupUsedSpace: number): HwcRds {
        this['backup_used_space'] = backupUsedSpace;
        return this;
    }
    public set backupUsedSpace(backupUsedSpace: number  | undefined) {
        this['backup_used_space'] = backupUsedSpace;
    }
    public get backupUsedSpace(): number | undefined {
        return this['backup_used_space'];
    }
    public withStorageUsedSpace(storageUsedSpace: number): HwcRds {
        this['storage_used_space'] = storageUsedSpace;
        return this;
    }
    public set storageUsedSpace(storageUsedSpace: number  | undefined) {
        this['storage_used_space'] = storageUsedSpace;
    }
    public get storageUsedSpace(): number | undefined {
        return this['storage_used_space'];
    }
    public withAssociatedWithDdm(associatedWithDdm: boolean): HwcRds {
        this['associated_with_ddm'] = associatedWithDdm;
        return this;
    }
    public set associatedWithDdm(associatedWithDdm: boolean  | undefined) {
        this['associated_with_ddm'] = associatedWithDdm;
    }
    public get associatedWithDdm(): boolean | undefined {
        return this['associated_with_ddm'];
    }
    public withMaxIops(maxIops: number): HwcRds {
        this['max_iops'] = maxIops;
        return this;
    }
    public set maxIops(maxIops: number  | undefined) {
        this['max_iops'] = maxIops;
    }
    public get maxIops(): number | undefined {
        return this['max_iops'];
    }
    public withExpirationTime(expirationTime: string): HwcRds {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: string  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): string | undefined {
        return this['expiration_time'];
    }
}