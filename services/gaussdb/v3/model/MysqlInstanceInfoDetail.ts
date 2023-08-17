import { MysqlBackupStrategy } from './MysqlBackupStrategy';
import { MysqlDatastoreWithKernelVersion } from './MysqlDatastoreWithKernelVersion';
import { MysqlInstanceChargeInfo } from './MysqlInstanceChargeInfo';
import { MysqlInstanceNodeInfo } from './MysqlInstanceNodeInfo';
import { MysqlProxyInfo } from './MysqlProxyInfo';
import { MysqlTags } from './MysqlTags';


export class MysqlInstanceInfoDetail {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    public status?: string;
    public port?: string;
    public alias?: string;
    public type?: string;
    private 'charge_info'?: MysqlInstanceChargeInfo;
    private 'node_count'?: number;
    public datastore?: MysqlDatastoreWithKernelVersion;
    private 'backup_used_space'?: number;
    public created?: string;
    public updated?: string;
    private 'private_write_ips'?: Array<string>;
    private 'private_dns_names'?: Array<string>;
    private 'public_ips'?: string;
    private 'db_user_name'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'configuration_id'?: string;
    private 'backup_strategy'?: MysqlBackupStrategy;
    public nodes?: Array<MysqlInstanceNodeInfo>;
    private 'enterprise_project_id'?: string;
    private 'time_zone'?: string;
    private 'az_mode'?: string;
    private 'master_az_code'?: string;
    private 'maintenance_window'?: string;
    public tags?: Array<MysqlTags>;
    private 'dedicated_resource_id'?: string;
    public proxies?: Array<MysqlProxyInfo>;
    public constructor(id?: string, name?: string, projectId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
    }
    public withId(id: string): MysqlInstanceInfoDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MysqlInstanceInfoDetail {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): MysqlInstanceInfoDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: string): MysqlInstanceInfoDetail {
        this['status'] = status;
        return this;
    }
    public withPort(port: string): MysqlInstanceInfoDetail {
        this['port'] = port;
        return this;
    }
    public withAlias(alias: string): MysqlInstanceInfoDetail {
        this['alias'] = alias;
        return this;
    }
    public withType(type: string): MysqlInstanceInfoDetail {
        this['type'] = type;
        return this;
    }
    public withChargeInfo(chargeInfo: MysqlInstanceChargeInfo): MysqlInstanceInfoDetail {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: MysqlInstanceChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): MysqlInstanceChargeInfo | undefined {
        return this['charge_info'];
    }
    public withNodeCount(nodeCount: number): MysqlInstanceInfoDetail {
        this['node_count'] = nodeCount;
        return this;
    }
    public set nodeCount(nodeCount: number  | undefined) {
        this['node_count'] = nodeCount;
    }
    public get nodeCount(): number | undefined {
        return this['node_count'];
    }
    public withDatastore(datastore: MysqlDatastoreWithKernelVersion): MysqlInstanceInfoDetail {
        this['datastore'] = datastore;
        return this;
    }
    public withBackupUsedSpace(backupUsedSpace: number): MysqlInstanceInfoDetail {
        this['backup_used_space'] = backupUsedSpace;
        return this;
    }
    public set backupUsedSpace(backupUsedSpace: number  | undefined) {
        this['backup_used_space'] = backupUsedSpace;
    }
    public get backupUsedSpace(): number | undefined {
        return this['backup_used_space'];
    }
    public withCreated(created: string): MysqlInstanceInfoDetail {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): MysqlInstanceInfoDetail {
        this['updated'] = updated;
        return this;
    }
    public withPrivateWriteIps(privateWriteIps: Array<string>): MysqlInstanceInfoDetail {
        this['private_write_ips'] = privateWriteIps;
        return this;
    }
    public set privateWriteIps(privateWriteIps: Array<string>  | undefined) {
        this['private_write_ips'] = privateWriteIps;
    }
    public get privateWriteIps(): Array<string> | undefined {
        return this['private_write_ips'];
    }
    public withPrivateDnsNames(privateDnsNames: Array<string>): MysqlInstanceInfoDetail {
        this['private_dns_names'] = privateDnsNames;
        return this;
    }
    public set privateDnsNames(privateDnsNames: Array<string>  | undefined) {
        this['private_dns_names'] = privateDnsNames;
    }
    public get privateDnsNames(): Array<string> | undefined {
        return this['private_dns_names'];
    }
    public withPublicIps(publicIps: string): MysqlInstanceInfoDetail {
        this['public_ips'] = publicIps;
        return this;
    }
    public set publicIps(publicIps: string  | undefined) {
        this['public_ips'] = publicIps;
    }
    public get publicIps(): string | undefined {
        return this['public_ips'];
    }
    public withDbUserName(dbUserName: string): MysqlInstanceInfoDetail {
        this['db_user_name'] = dbUserName;
        return this;
    }
    public set dbUserName(dbUserName: string  | undefined) {
        this['db_user_name'] = dbUserName;
    }
    public get dbUserName(): string | undefined {
        return this['db_user_name'];
    }
    public withVpcId(vpcId: string): MysqlInstanceInfoDetail {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): MysqlInstanceInfoDetail {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): MysqlInstanceInfoDetail {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withConfigurationId(configurationId: string): MysqlInstanceInfoDetail {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withBackupStrategy(backupStrategy: MysqlBackupStrategy): MysqlInstanceInfoDetail {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: MysqlBackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): MysqlBackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withNodes(nodes: Array<MysqlInstanceNodeInfo>): MysqlInstanceInfoDetail {
        this['nodes'] = nodes;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): MysqlInstanceInfoDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTimeZone(timeZone: string): MysqlInstanceInfoDetail {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withAzMode(azMode: string): MysqlInstanceInfoDetail {
        this['az_mode'] = azMode;
        return this;
    }
    public set azMode(azMode: string  | undefined) {
        this['az_mode'] = azMode;
    }
    public get azMode(): string | undefined {
        return this['az_mode'];
    }
    public withMasterAzCode(masterAzCode: string): MysqlInstanceInfoDetail {
        this['master_az_code'] = masterAzCode;
        return this;
    }
    public set masterAzCode(masterAzCode: string  | undefined) {
        this['master_az_code'] = masterAzCode;
    }
    public get masterAzCode(): string | undefined {
        return this['master_az_code'];
    }
    public withMaintenanceWindow(maintenanceWindow: string): MysqlInstanceInfoDetail {
        this['maintenance_window'] = maintenanceWindow;
        return this;
    }
    public set maintenanceWindow(maintenanceWindow: string  | undefined) {
        this['maintenance_window'] = maintenanceWindow;
    }
    public get maintenanceWindow(): string | undefined {
        return this['maintenance_window'];
    }
    public withTags(tags: Array<MysqlTags>): MysqlInstanceInfoDetail {
        this['tags'] = tags;
        return this;
    }
    public withDedicatedResourceId(dedicatedResourceId: string): MysqlInstanceInfoDetail {
        this['dedicated_resource_id'] = dedicatedResourceId;
        return this;
    }
    public set dedicatedResourceId(dedicatedResourceId: string  | undefined) {
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public get dedicatedResourceId(): string | undefined {
        return this['dedicated_resource_id'];
    }
    public withProxies(proxies: Array<MysqlProxyInfo>): MysqlInstanceInfoDetail {
        this['proxies'] = proxies;
        return this;
    }
}