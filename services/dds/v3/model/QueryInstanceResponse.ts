import { BackupStrategyForItemResponse } from './BackupStrategyForItemResponse';
import { DatastoreItem } from './DatastoreItem';
import { GroupResponseItem } from './GroupResponseItem';
import { TagResponse } from './TagResponse';


export class QueryInstanceResponse {
    public id?: string;
    public name?: string;
    public remark?: string;
    public status?: string;
    public port?: string;
    public mode?: string;
    public region?: string;
    public datastore?: DatastoreItem;
    public engine?: string;
    public created?: string;
    public updated?: string;
    private 'db_user_name'?: string;
    public ssl?: number;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'backup_strategy'?: BackupStrategyForItemResponse;
    private 'pay_mode'?: string;
    private 'maintenance_window'?: string;
    public groups?: Array<GroupResponseItem>;
    private 'disk_encryption_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'time_zone'?: string;
    private 'dss_pool_id'?: string;
    public actions?: Array<string>;
    private 'order_id'?: string;
    public tags?: Array<TagResponse>;
    public constructor(id?: string, name?: string, remark?: string, status?: string, port?: string, mode?: string, region?: string, datastore?: DatastoreItem, engine?: string, created?: string, updated?: string, dbUserName?: string, ssl?: number, vpcId?: string, subnetId?: string, securityGroupId?: string, backupStrategy?: BackupStrategyForItemResponse, maintenanceWindow?: string, groups?: Array<GroupResponseItem>, diskEncryptionId?: string, enterpriseProjectId?: string, timeZone?: string, actions?: Array<string>, tags?: Array<TagResponse>) { 
        this['id'] = id;
        this['name'] = name;
        this['remark'] = remark;
        this['status'] = status;
        this['port'] = port;
        this['mode'] = mode;
        this['region'] = region;
        this['datastore'] = datastore;
        this['engine'] = engine;
        this['created'] = created;
        this['updated'] = updated;
        this['db_user_name'] = dbUserName;
        this['ssl'] = ssl;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['backup_strategy'] = backupStrategy;
        this['maintenance_window'] = maintenanceWindow;
        this['groups'] = groups;
        this['disk_encryption_id'] = diskEncryptionId;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['time_zone'] = timeZone;
        this['actions'] = actions;
        this['tags'] = tags;
    }
    public withId(id: string): QueryInstanceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QueryInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): QueryInstanceResponse {
        this['remark'] = remark;
        return this;
    }
    public withStatus(status: string): QueryInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withPort(port: string): QueryInstanceResponse {
        this['port'] = port;
        return this;
    }
    public withMode(mode: string): QueryInstanceResponse {
        this['mode'] = mode;
        return this;
    }
    public withRegion(region: string): QueryInstanceResponse {
        this['region'] = region;
        return this;
    }
    public withDatastore(datastore: DatastoreItem): QueryInstanceResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withEngine(engine: string): QueryInstanceResponse {
        this['engine'] = engine;
        return this;
    }
    public withCreated(created: string): QueryInstanceResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): QueryInstanceResponse {
        this['updated'] = updated;
        return this;
    }
    public withDbUserName(dbUserName: string): QueryInstanceResponse {
        this['db_user_name'] = dbUserName;
        return this;
    }
    public set dbUserName(dbUserName: string  | undefined) {
        this['db_user_name'] = dbUserName;
    }
    public get dbUserName(): string | undefined {
        return this['db_user_name'];
    }
    public withSsl(ssl: number): QueryInstanceResponse {
        this['ssl'] = ssl;
        return this;
    }
    public withVpcId(vpcId: string): QueryInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): QueryInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): QueryInstanceResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withBackupStrategy(backupStrategy: BackupStrategyForItemResponse): QueryInstanceResponse {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: BackupStrategyForItemResponse  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): BackupStrategyForItemResponse | undefined {
        return this['backup_strategy'];
    }
    public withPayMode(payMode: string): QueryInstanceResponse {
        this['pay_mode'] = payMode;
        return this;
    }
    public set payMode(payMode: string  | undefined) {
        this['pay_mode'] = payMode;
    }
    public get payMode(): string | undefined {
        return this['pay_mode'];
    }
    public withMaintenanceWindow(maintenanceWindow: string): QueryInstanceResponse {
        this['maintenance_window'] = maintenanceWindow;
        return this;
    }
    public set maintenanceWindow(maintenanceWindow: string  | undefined) {
        this['maintenance_window'] = maintenanceWindow;
    }
    public get maintenanceWindow(): string | undefined {
        return this['maintenance_window'];
    }
    public withGroups(groups: Array<GroupResponseItem>): QueryInstanceResponse {
        this['groups'] = groups;
        return this;
    }
    public withDiskEncryptionId(diskEncryptionId: string): QueryInstanceResponse {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QueryInstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTimeZone(timeZone: string): QueryInstanceResponse {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withDssPoolId(dssPoolId: string): QueryInstanceResponse {
        this['dss_pool_id'] = dssPoolId;
        return this;
    }
    public set dssPoolId(dssPoolId: string  | undefined) {
        this['dss_pool_id'] = dssPoolId;
    }
    public get dssPoolId(): string | undefined {
        return this['dss_pool_id'];
    }
    public withActions(actions: Array<string>): QueryInstanceResponse {
        this['actions'] = actions;
        return this;
    }
    public withOrderId(orderId: string): QueryInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withTags(tags: Array<TagResponse>): QueryInstanceResponse {
        this['tags'] = tags;
        return this;
    }
}