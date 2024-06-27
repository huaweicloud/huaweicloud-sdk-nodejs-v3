import { ChInstancesInfoRsponseInstanceGroups } from './ChInstancesInfoRsponseInstanceGroups';
import { ChInstancesInfoRsponseInstanceOpsWindow } from './ChInstancesInfoRsponseInstanceOpsWindow';
import { ChInstancesInfoRsponseInstanceParamGroup } from './ChInstancesInfoRsponseInstanceParamGroup';
import { ChInstancesInfoRsponseInstancePortInfo } from './ChInstancesInfoRsponseInstancePortInfo';
import { ChQueryActionInfo } from './ChQueryActionInfo';
import { CreateChInstanceInfoTagsInfo } from './CreateChInstanceInfoTagsInfo';


export class ChInstancesInfoRsponseInstance {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'public_ip'?: string;
    private 'can_enable_public_access'?: boolean;
    private 'current_backup_node_id'?: string;
    private 'cluster_mode'?: string;
    public status?: string;
    private 'is_frozen'?: number;
    private 'frozen_time'?: string;
    private 'db_user'?: string;
    private 'bak_period'?: string;
    private 'bak_keep_day'?: number;
    private 'bak_expected_start_time'?: string;
    private 'datastore_version_id'?: string;
    private 'datastore_version'?: string;
    private 'datastore_type'?: string;
    private 'create_at'?: number;
    private 'update_at'?: number;
    private 'delete_at'?: number;
    private 'db_port'?: string;
    private 'param_group'?: ChInstancesInfoRsponseInstanceParamGroup;
    public actions?: Array<ChQueryActionInfo>;
    private 'create_fail_error_code'?: string;
    public groups?: Array<ChInstancesInfoRsponseInstanceGroups>;
    private 'ops_window'?: ChInstancesInfoRsponseInstanceOpsWindow;
    private 'tags_info'?: CreateChInstanceInfoTagsInfo;
    private 'time_zone'?: string;
    private 'backup_used_space'?: string;
    private 'az_mode'?: string;
    private 'master_az_code'?: string;
    private 'enterprise_project_id'?: string;
    private 'port_info'?: ChInstancesInfoRsponseInstancePortInfo;
    private 'volume_code'?: string;
    private 'support_data_replication'?: boolean;
    private 'new_version_available'?: boolean;
    private 'ssl_option'?: boolean;
    private 'dedicated_resource_id'?: string;
    private 'pay_model'?: string;
    public constructor(id?: string, name?: string, projectId?: string, canEnablePublicAccess?: boolean, clusterMode?: string, status?: string, isFrozen?: number, datastoreVersionId?: string, datastoreVersion?: string, datastoreType?: string, createAt?: number, updateAt?: number, dbPort?: string, groups?: Array<ChInstancesInfoRsponseInstanceGroups>, opsWindow?: ChInstancesInfoRsponseInstanceOpsWindow, azMode?: string, enterpriseProjectId?: string, portInfo?: ChInstancesInfoRsponseInstancePortInfo, volumeCode?: string, supportDataReplication?: boolean, newVersionAvailable?: boolean, sslOption?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
        this['can_enable_public_access'] = canEnablePublicAccess;
        this['cluster_mode'] = clusterMode;
        this['status'] = status;
        this['is_frozen'] = isFrozen;
        this['datastore_version_id'] = datastoreVersionId;
        this['datastore_version'] = datastoreVersion;
        this['datastore_type'] = datastoreType;
        this['create_at'] = createAt;
        this['update_at'] = updateAt;
        this['db_port'] = dbPort;
        this['groups'] = groups;
        this['ops_window'] = opsWindow;
        this['az_mode'] = azMode;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['port_info'] = portInfo;
        this['volume_code'] = volumeCode;
        this['support_data_replication'] = supportDataReplication;
        this['new_version_available'] = newVersionAvailable;
        this['ssl_option'] = sslOption;
    }
    public withId(id: string): ChInstancesInfoRsponseInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ChInstancesInfoRsponseInstance {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ChInstancesInfoRsponseInstance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPublicIp(publicIp: string): ChInstancesInfoRsponseInstance {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withCanEnablePublicAccess(canEnablePublicAccess: boolean): ChInstancesInfoRsponseInstance {
        this['can_enable_public_access'] = canEnablePublicAccess;
        return this;
    }
    public set canEnablePublicAccess(canEnablePublicAccess: boolean  | undefined) {
        this['can_enable_public_access'] = canEnablePublicAccess;
    }
    public get canEnablePublicAccess(): boolean | undefined {
        return this['can_enable_public_access'];
    }
    public withCurrentBackupNodeId(currentBackupNodeId: string): ChInstancesInfoRsponseInstance {
        this['current_backup_node_id'] = currentBackupNodeId;
        return this;
    }
    public set currentBackupNodeId(currentBackupNodeId: string  | undefined) {
        this['current_backup_node_id'] = currentBackupNodeId;
    }
    public get currentBackupNodeId(): string | undefined {
        return this['current_backup_node_id'];
    }
    public withClusterMode(clusterMode: string): ChInstancesInfoRsponseInstance {
        this['cluster_mode'] = clusterMode;
        return this;
    }
    public set clusterMode(clusterMode: string  | undefined) {
        this['cluster_mode'] = clusterMode;
    }
    public get clusterMode(): string | undefined {
        return this['cluster_mode'];
    }
    public withStatus(status: string): ChInstancesInfoRsponseInstance {
        this['status'] = status;
        return this;
    }
    public withIsFrozen(isFrozen: number): ChInstancesInfoRsponseInstance {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: number  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): number | undefined {
        return this['is_frozen'];
    }
    public withFrozenTime(frozenTime: string): ChInstancesInfoRsponseInstance {
        this['frozen_time'] = frozenTime;
        return this;
    }
    public set frozenTime(frozenTime: string  | undefined) {
        this['frozen_time'] = frozenTime;
    }
    public get frozenTime(): string | undefined {
        return this['frozen_time'];
    }
    public withDbUser(dbUser: string): ChInstancesInfoRsponseInstance {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withBakPeriod(bakPeriod: string): ChInstancesInfoRsponseInstance {
        this['bak_period'] = bakPeriod;
        return this;
    }
    public set bakPeriod(bakPeriod: string  | undefined) {
        this['bak_period'] = bakPeriod;
    }
    public get bakPeriod(): string | undefined {
        return this['bak_period'];
    }
    public withBakKeepDay(bakKeepDay: number): ChInstancesInfoRsponseInstance {
        this['bak_keep_day'] = bakKeepDay;
        return this;
    }
    public set bakKeepDay(bakKeepDay: number  | undefined) {
        this['bak_keep_day'] = bakKeepDay;
    }
    public get bakKeepDay(): number | undefined {
        return this['bak_keep_day'];
    }
    public withBakExpectedStartTime(bakExpectedStartTime: string): ChInstancesInfoRsponseInstance {
        this['bak_expected_start_time'] = bakExpectedStartTime;
        return this;
    }
    public set bakExpectedStartTime(bakExpectedStartTime: string  | undefined) {
        this['bak_expected_start_time'] = bakExpectedStartTime;
    }
    public get bakExpectedStartTime(): string | undefined {
        return this['bak_expected_start_time'];
    }
    public withDatastoreVersionId(datastoreVersionId: string): ChInstancesInfoRsponseInstance {
        this['datastore_version_id'] = datastoreVersionId;
        return this;
    }
    public set datastoreVersionId(datastoreVersionId: string  | undefined) {
        this['datastore_version_id'] = datastoreVersionId;
    }
    public get datastoreVersionId(): string | undefined {
        return this['datastore_version_id'];
    }
    public withDatastoreVersion(datastoreVersion: string): ChInstancesInfoRsponseInstance {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withDatastoreType(datastoreType: string): ChInstancesInfoRsponseInstance {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withCreateAt(createAt: number): ChInstancesInfoRsponseInstance {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): ChInstancesInfoRsponseInstance {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withDeleteAt(deleteAt: number): ChInstancesInfoRsponseInstance {
        this['delete_at'] = deleteAt;
        return this;
    }
    public set deleteAt(deleteAt: number  | undefined) {
        this['delete_at'] = deleteAt;
    }
    public get deleteAt(): number | undefined {
        return this['delete_at'];
    }
    public withDbPort(dbPort: string): ChInstancesInfoRsponseInstance {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: string  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): string | undefined {
        return this['db_port'];
    }
    public withParamGroup(paramGroup: ChInstancesInfoRsponseInstanceParamGroup): ChInstancesInfoRsponseInstance {
        this['param_group'] = paramGroup;
        return this;
    }
    public set paramGroup(paramGroup: ChInstancesInfoRsponseInstanceParamGroup  | undefined) {
        this['param_group'] = paramGroup;
    }
    public get paramGroup(): ChInstancesInfoRsponseInstanceParamGroup | undefined {
        return this['param_group'];
    }
    public withActions(actions: Array<ChQueryActionInfo>): ChInstancesInfoRsponseInstance {
        this['actions'] = actions;
        return this;
    }
    public withCreateFailErrorCode(createFailErrorCode: string): ChInstancesInfoRsponseInstance {
        this['create_fail_error_code'] = createFailErrorCode;
        return this;
    }
    public set createFailErrorCode(createFailErrorCode: string  | undefined) {
        this['create_fail_error_code'] = createFailErrorCode;
    }
    public get createFailErrorCode(): string | undefined {
        return this['create_fail_error_code'];
    }
    public withGroups(groups: Array<ChInstancesInfoRsponseInstanceGroups>): ChInstancesInfoRsponseInstance {
        this['groups'] = groups;
        return this;
    }
    public withOpsWindow(opsWindow: ChInstancesInfoRsponseInstanceOpsWindow): ChInstancesInfoRsponseInstance {
        this['ops_window'] = opsWindow;
        return this;
    }
    public set opsWindow(opsWindow: ChInstancesInfoRsponseInstanceOpsWindow  | undefined) {
        this['ops_window'] = opsWindow;
    }
    public get opsWindow(): ChInstancesInfoRsponseInstanceOpsWindow | undefined {
        return this['ops_window'];
    }
    public withTagsInfo(tagsInfo: CreateChInstanceInfoTagsInfo): ChInstancesInfoRsponseInstance {
        this['tags_info'] = tagsInfo;
        return this;
    }
    public set tagsInfo(tagsInfo: CreateChInstanceInfoTagsInfo  | undefined) {
        this['tags_info'] = tagsInfo;
    }
    public get tagsInfo(): CreateChInstanceInfoTagsInfo | undefined {
        return this['tags_info'];
    }
    public withTimeZone(timeZone: string): ChInstancesInfoRsponseInstance {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withBackupUsedSpace(backupUsedSpace: string): ChInstancesInfoRsponseInstance {
        this['backup_used_space'] = backupUsedSpace;
        return this;
    }
    public set backupUsedSpace(backupUsedSpace: string  | undefined) {
        this['backup_used_space'] = backupUsedSpace;
    }
    public get backupUsedSpace(): string | undefined {
        return this['backup_used_space'];
    }
    public withAzMode(azMode: string): ChInstancesInfoRsponseInstance {
        this['az_mode'] = azMode;
        return this;
    }
    public set azMode(azMode: string  | undefined) {
        this['az_mode'] = azMode;
    }
    public get azMode(): string | undefined {
        return this['az_mode'];
    }
    public withMasterAzCode(masterAzCode: string): ChInstancesInfoRsponseInstance {
        this['master_az_code'] = masterAzCode;
        return this;
    }
    public set masterAzCode(masterAzCode: string  | undefined) {
        this['master_az_code'] = masterAzCode;
    }
    public get masterAzCode(): string | undefined {
        return this['master_az_code'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChInstancesInfoRsponseInstance {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPortInfo(portInfo: ChInstancesInfoRsponseInstancePortInfo): ChInstancesInfoRsponseInstance {
        this['port_info'] = portInfo;
        return this;
    }
    public set portInfo(portInfo: ChInstancesInfoRsponseInstancePortInfo  | undefined) {
        this['port_info'] = portInfo;
    }
    public get portInfo(): ChInstancesInfoRsponseInstancePortInfo | undefined {
        return this['port_info'];
    }
    public withVolumeCode(volumeCode: string): ChInstancesInfoRsponseInstance {
        this['volume_code'] = volumeCode;
        return this;
    }
    public set volumeCode(volumeCode: string  | undefined) {
        this['volume_code'] = volumeCode;
    }
    public get volumeCode(): string | undefined {
        return this['volume_code'];
    }
    public withSupportDataReplication(supportDataReplication: boolean): ChInstancesInfoRsponseInstance {
        this['support_data_replication'] = supportDataReplication;
        return this;
    }
    public set supportDataReplication(supportDataReplication: boolean  | undefined) {
        this['support_data_replication'] = supportDataReplication;
    }
    public get supportDataReplication(): boolean | undefined {
        return this['support_data_replication'];
    }
    public withNewVersionAvailable(newVersionAvailable: boolean): ChInstancesInfoRsponseInstance {
        this['new_version_available'] = newVersionAvailable;
        return this;
    }
    public set newVersionAvailable(newVersionAvailable: boolean  | undefined) {
        this['new_version_available'] = newVersionAvailable;
    }
    public get newVersionAvailable(): boolean | undefined {
        return this['new_version_available'];
    }
    public withSslOption(sslOption: boolean): ChInstancesInfoRsponseInstance {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: boolean  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): boolean | undefined {
        return this['ssl_option'];
    }
    public withDedicatedResourceId(dedicatedResourceId: string): ChInstancesInfoRsponseInstance {
        this['dedicated_resource_id'] = dedicatedResourceId;
        return this;
    }
    public set dedicatedResourceId(dedicatedResourceId: string  | undefined) {
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public get dedicatedResourceId(): string | undefined {
        return this['dedicated_resource_id'];
    }
    public withPayModel(payModel: string): ChInstancesInfoRsponseInstance {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
}