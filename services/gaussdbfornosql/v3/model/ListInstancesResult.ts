import { ListInstancesBackupStrategyResult } from './ListInstancesBackupStrategyResult';
import { ListInstancesDatastoreResult } from './ListInstancesDatastoreResult';
import { ListInstancesGroupResult } from './ListInstancesGroupResult';


export class ListInstancesResult {
    public id?: string;
    public name?: string;
    public status?: string;
    public port?: string;
    public mode?: string;
    public region?: string;
    public datastore?: ListInstancesDatastoreResult;
    public engine?: string;
    public created?: string;
    public updated?: string;
    private 'db_user_name'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'backup_strategy'?: ListInstancesBackupStrategyResult;
    private 'pay_mode'?: string;
    private 'maintenance_window'?: string;
    public groups?: Array<ListInstancesGroupResult>;
    private 'enterprise_project_id'?: string;
    private 'dedicated_resource_id'?: string;
    private 'time_zone'?: string;
    public actions?: Array<string>;
    private 'lb_ip_address'?: string;
    private 'lb_port'?: string;
    private 'availability_zone'?: string;
    public constructor(id?: string, name?: string, status?: string, port?: string, mode?: string, region?: string, datastore?: ListInstancesDatastoreResult, engine?: string, created?: string, updated?: string, dbUserName?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, backupStrategy?: ListInstancesBackupStrategyResult, payMode?: string, maintenanceWindow?: string, groups?: Array<ListInstancesGroupResult>, enterpriseProjectId?: string, timeZone?: string, actions?: Array<string>) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['port'] = port;
        this['mode'] = mode;
        this['region'] = region;
        this['datastore'] = datastore;
        this['engine'] = engine;
        this['created'] = created;
        this['updated'] = updated;
        this['db_user_name'] = dbUserName;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['backup_strategy'] = backupStrategy;
        this['pay_mode'] = payMode;
        this['maintenance_window'] = maintenanceWindow;
        this['groups'] = groups;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['time_zone'] = timeZone;
        this['actions'] = actions;
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
    public withPort(port: string): ListInstancesResult {
        this['port'] = port;
        return this;
    }
    public withMode(mode: string): ListInstancesResult {
        this['mode'] = mode;
        return this;
    }
    public withRegion(region: string): ListInstancesResult {
        this['region'] = region;
        return this;
    }
    public withDatastore(datastore: ListInstancesDatastoreResult): ListInstancesResult {
        this['datastore'] = datastore;
        return this;
    }
    public withEngine(engine: string): ListInstancesResult {
        this['engine'] = engine;
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
    public withBackupStrategy(backupStrategy: ListInstancesBackupStrategyResult): ListInstancesResult {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: ListInstancesBackupStrategyResult  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): ListInstancesBackupStrategyResult | undefined {
        return this['backup_strategy'];
    }
    public withPayMode(payMode: string): ListInstancesResult {
        this['pay_mode'] = payMode;
        return this;
    }
    public set payMode(payMode: string  | undefined) {
        this['pay_mode'] = payMode;
    }
    public get payMode(): string | undefined {
        return this['pay_mode'];
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
    public withGroups(groups: Array<ListInstancesGroupResult>): ListInstancesResult {
        this['groups'] = groups;
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
    public withDedicatedResourceId(dedicatedResourceId: string): ListInstancesResult {
        this['dedicated_resource_id'] = dedicatedResourceId;
        return this;
    }
    public set dedicatedResourceId(dedicatedResourceId: string  | undefined) {
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public get dedicatedResourceId(): string | undefined {
        return this['dedicated_resource_id'];
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
    public withActions(actions: Array<string>): ListInstancesResult {
        this['actions'] = actions;
        return this;
    }
    public withLbIpAddress(lbIpAddress: string): ListInstancesResult {
        this['lb_ip_address'] = lbIpAddress;
        return this;
    }
    public set lbIpAddress(lbIpAddress: string  | undefined) {
        this['lb_ip_address'] = lbIpAddress;
    }
    public get lbIpAddress(): string | undefined {
        return this['lb_ip_address'];
    }
    public withLbPort(lbPort: string): ListInstancesResult {
        this['lb_port'] = lbPort;
        return this;
    }
    public set lbPort(lbPort: string  | undefined) {
        this['lb_port'] = lbPort;
    }
    public get lbPort(): string | undefined {
        return this['lb_port'];
    }
    public withAvailabilityZone(availabilityZone: string): ListInstancesResult {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}