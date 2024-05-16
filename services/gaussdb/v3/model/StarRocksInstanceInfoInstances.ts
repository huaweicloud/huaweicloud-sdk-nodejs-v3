import { QueryAction } from './QueryAction';
import { StarRocksInstanceInfoGroups } from './StarRocksInstanceInfoGroups';
import { StarRocksInstanceInfoOpsWindow } from './StarRocksInstanceInfoOpsWindow';
import { StarRocksInstanceInfoPortInfo } from './StarRocksInstanceInfoPortInfo';
import { StarRocksInstanceInfoTagsInfo } from './StarRocksInstanceInfoTagsInfo';


export class StarRocksInstanceInfoInstances {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'public_ip'?: string;
    private 'data_vip'?: string;
    private 'can_enable_public_access'?: boolean;
    private 'current_backup_node_id'?: string;
    private 'cluster_mode'?: string;
    public status?: string;
    private 'is_frozen'?: number;
    private 'frozen_time'?: number;
    private 'db_user'?: string;
    private 'bak_period'?: string;
    private 'bak_keep_day'?: number;
    private 'bak_expected_start_time'?: number;
    private 'data_store_version_id'?: string;
    private 'data_store_version'?: string;
    private 'data_store_type'?: string;
    private 'create_at'?: number;
    private 'update_at'?: number;
    private 'delete_at'?: number;
    private 'db_port'?: string;
    private 'param_group'?: string;
    public actions?: Array<QueryAction>;
    private 'create_fail_error_code'?: string;
    public groups?: Array<StarRocksInstanceInfoGroups>;
    private 'ops_window'?: StarRocksInstanceInfoOpsWindow;
    private 'tags_info'?: StarRocksInstanceInfoTagsInfo;
    private 'time_zone'?: string;
    private 'backup_used_space'?: string;
    private 'az_mode'?: string;
    private 'enterprise_project_id'?: string;
    private 'port_info'?: StarRocksInstanceInfoPortInfo;
    private 'fe_node_volume_code'?: string;
    private 'be_node_volume_code'?: string;
    private 'fe_node_volume_size'?: string;
    private 'be_node_volume_size'?: string;
    private 'support_data_replication'?: boolean;
    private 'new_version_available'?: boolean;
    private 'ssl_option'?: boolean;
    private 'dedicated_resource_id'?: string;
    private 'pay_model'?: string;
    public constructor() { 
    }
    public withId(id: string): StarRocksInstanceInfoInstances {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StarRocksInstanceInfoInstances {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): StarRocksInstanceInfoInstances {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPublicIp(publicIp: string): StarRocksInstanceInfoInstances {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withDataVip(dataVip: string): StarRocksInstanceInfoInstances {
        this['data_vip'] = dataVip;
        return this;
    }
    public set dataVip(dataVip: string  | undefined) {
        this['data_vip'] = dataVip;
    }
    public get dataVip(): string | undefined {
        return this['data_vip'];
    }
    public withCanEnablePublicAccess(canEnablePublicAccess: boolean): StarRocksInstanceInfoInstances {
        this['can_enable_public_access'] = canEnablePublicAccess;
        return this;
    }
    public set canEnablePublicAccess(canEnablePublicAccess: boolean  | undefined) {
        this['can_enable_public_access'] = canEnablePublicAccess;
    }
    public get canEnablePublicAccess(): boolean | undefined {
        return this['can_enable_public_access'];
    }
    public withCurrentBackupNodeId(currentBackupNodeId: string): StarRocksInstanceInfoInstances {
        this['current_backup_node_id'] = currentBackupNodeId;
        return this;
    }
    public set currentBackupNodeId(currentBackupNodeId: string  | undefined) {
        this['current_backup_node_id'] = currentBackupNodeId;
    }
    public get currentBackupNodeId(): string | undefined {
        return this['current_backup_node_id'];
    }
    public withClusterMode(clusterMode: string): StarRocksInstanceInfoInstances {
        this['cluster_mode'] = clusterMode;
        return this;
    }
    public set clusterMode(clusterMode: string  | undefined) {
        this['cluster_mode'] = clusterMode;
    }
    public get clusterMode(): string | undefined {
        return this['cluster_mode'];
    }
    public withStatus(status: string): StarRocksInstanceInfoInstances {
        this['status'] = status;
        return this;
    }
    public withIsFrozen(isFrozen: number): StarRocksInstanceInfoInstances {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: number  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): number | undefined {
        return this['is_frozen'];
    }
    public withFrozenTime(frozenTime: number): StarRocksInstanceInfoInstances {
        this['frozen_time'] = frozenTime;
        return this;
    }
    public set frozenTime(frozenTime: number  | undefined) {
        this['frozen_time'] = frozenTime;
    }
    public get frozenTime(): number | undefined {
        return this['frozen_time'];
    }
    public withDbUser(dbUser: string): StarRocksInstanceInfoInstances {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withBakPeriod(bakPeriod: string): StarRocksInstanceInfoInstances {
        this['bak_period'] = bakPeriod;
        return this;
    }
    public set bakPeriod(bakPeriod: string  | undefined) {
        this['bak_period'] = bakPeriod;
    }
    public get bakPeriod(): string | undefined {
        return this['bak_period'];
    }
    public withBakKeepDay(bakKeepDay: number): StarRocksInstanceInfoInstances {
        this['bak_keep_day'] = bakKeepDay;
        return this;
    }
    public set bakKeepDay(bakKeepDay: number  | undefined) {
        this['bak_keep_day'] = bakKeepDay;
    }
    public get bakKeepDay(): number | undefined {
        return this['bak_keep_day'];
    }
    public withBakExpectedStartTime(bakExpectedStartTime: number): StarRocksInstanceInfoInstances {
        this['bak_expected_start_time'] = bakExpectedStartTime;
        return this;
    }
    public set bakExpectedStartTime(bakExpectedStartTime: number  | undefined) {
        this['bak_expected_start_time'] = bakExpectedStartTime;
    }
    public get bakExpectedStartTime(): number | undefined {
        return this['bak_expected_start_time'];
    }
    public withDataStoreVersionId(dataStoreVersionId: string): StarRocksInstanceInfoInstances {
        this['data_store_version_id'] = dataStoreVersionId;
        return this;
    }
    public set dataStoreVersionId(dataStoreVersionId: string  | undefined) {
        this['data_store_version_id'] = dataStoreVersionId;
    }
    public get dataStoreVersionId(): string | undefined {
        return this['data_store_version_id'];
    }
    public withDataStoreVersion(dataStoreVersion: string): StarRocksInstanceInfoInstances {
        this['data_store_version'] = dataStoreVersion;
        return this;
    }
    public set dataStoreVersion(dataStoreVersion: string  | undefined) {
        this['data_store_version'] = dataStoreVersion;
    }
    public get dataStoreVersion(): string | undefined {
        return this['data_store_version'];
    }
    public withDataStoreType(dataStoreType: string): StarRocksInstanceInfoInstances {
        this['data_store_type'] = dataStoreType;
        return this;
    }
    public set dataStoreType(dataStoreType: string  | undefined) {
        this['data_store_type'] = dataStoreType;
    }
    public get dataStoreType(): string | undefined {
        return this['data_store_type'];
    }
    public withCreateAt(createAt: number): StarRocksInstanceInfoInstances {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): StarRocksInstanceInfoInstances {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withDeleteAt(deleteAt: number): StarRocksInstanceInfoInstances {
        this['delete_at'] = deleteAt;
        return this;
    }
    public set deleteAt(deleteAt: number  | undefined) {
        this['delete_at'] = deleteAt;
    }
    public get deleteAt(): number | undefined {
        return this['delete_at'];
    }
    public withDbPort(dbPort: string): StarRocksInstanceInfoInstances {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: string  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): string | undefined {
        return this['db_port'];
    }
    public withParamGroup(paramGroup: string): StarRocksInstanceInfoInstances {
        this['param_group'] = paramGroup;
        return this;
    }
    public set paramGroup(paramGroup: string  | undefined) {
        this['param_group'] = paramGroup;
    }
    public get paramGroup(): string | undefined {
        return this['param_group'];
    }
    public withActions(actions: Array<QueryAction>): StarRocksInstanceInfoInstances {
        this['actions'] = actions;
        return this;
    }
    public withCreateFailErrorCode(createFailErrorCode: string): StarRocksInstanceInfoInstances {
        this['create_fail_error_code'] = createFailErrorCode;
        return this;
    }
    public set createFailErrorCode(createFailErrorCode: string  | undefined) {
        this['create_fail_error_code'] = createFailErrorCode;
    }
    public get createFailErrorCode(): string | undefined {
        return this['create_fail_error_code'];
    }
    public withGroups(groups: Array<StarRocksInstanceInfoGroups>): StarRocksInstanceInfoInstances {
        this['groups'] = groups;
        return this;
    }
    public withOpsWindow(opsWindow: StarRocksInstanceInfoOpsWindow): StarRocksInstanceInfoInstances {
        this['ops_window'] = opsWindow;
        return this;
    }
    public set opsWindow(opsWindow: StarRocksInstanceInfoOpsWindow  | undefined) {
        this['ops_window'] = opsWindow;
    }
    public get opsWindow(): StarRocksInstanceInfoOpsWindow | undefined {
        return this['ops_window'];
    }
    public withTagsInfo(tagsInfo: StarRocksInstanceInfoTagsInfo): StarRocksInstanceInfoInstances {
        this['tags_info'] = tagsInfo;
        return this;
    }
    public set tagsInfo(tagsInfo: StarRocksInstanceInfoTagsInfo  | undefined) {
        this['tags_info'] = tagsInfo;
    }
    public get tagsInfo(): StarRocksInstanceInfoTagsInfo | undefined {
        return this['tags_info'];
    }
    public withTimeZone(timeZone: string): StarRocksInstanceInfoInstances {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withBackupUsedSpace(backupUsedSpace: string): StarRocksInstanceInfoInstances {
        this['backup_used_space'] = backupUsedSpace;
        return this;
    }
    public set backupUsedSpace(backupUsedSpace: string  | undefined) {
        this['backup_used_space'] = backupUsedSpace;
    }
    public get backupUsedSpace(): string | undefined {
        return this['backup_used_space'];
    }
    public withAzMode(azMode: string): StarRocksInstanceInfoInstances {
        this['az_mode'] = azMode;
        return this;
    }
    public set azMode(azMode: string  | undefined) {
        this['az_mode'] = azMode;
    }
    public get azMode(): string | undefined {
        return this['az_mode'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): StarRocksInstanceInfoInstances {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPortInfo(portInfo: StarRocksInstanceInfoPortInfo): StarRocksInstanceInfoInstances {
        this['port_info'] = portInfo;
        return this;
    }
    public set portInfo(portInfo: StarRocksInstanceInfoPortInfo  | undefined) {
        this['port_info'] = portInfo;
    }
    public get portInfo(): StarRocksInstanceInfoPortInfo | undefined {
        return this['port_info'];
    }
    public withFeNodeVolumeCode(feNodeVolumeCode: string): StarRocksInstanceInfoInstances {
        this['fe_node_volume_code'] = feNodeVolumeCode;
        return this;
    }
    public set feNodeVolumeCode(feNodeVolumeCode: string  | undefined) {
        this['fe_node_volume_code'] = feNodeVolumeCode;
    }
    public get feNodeVolumeCode(): string | undefined {
        return this['fe_node_volume_code'];
    }
    public withBeNodeVolumeCode(beNodeVolumeCode: string): StarRocksInstanceInfoInstances {
        this['be_node_volume_code'] = beNodeVolumeCode;
        return this;
    }
    public set beNodeVolumeCode(beNodeVolumeCode: string  | undefined) {
        this['be_node_volume_code'] = beNodeVolumeCode;
    }
    public get beNodeVolumeCode(): string | undefined {
        return this['be_node_volume_code'];
    }
    public withFeNodeVolumeSize(feNodeVolumeSize: string): StarRocksInstanceInfoInstances {
        this['fe_node_volume_size'] = feNodeVolumeSize;
        return this;
    }
    public set feNodeVolumeSize(feNodeVolumeSize: string  | undefined) {
        this['fe_node_volume_size'] = feNodeVolumeSize;
    }
    public get feNodeVolumeSize(): string | undefined {
        return this['fe_node_volume_size'];
    }
    public withBeNodeVolumeSize(beNodeVolumeSize: string): StarRocksInstanceInfoInstances {
        this['be_node_volume_size'] = beNodeVolumeSize;
        return this;
    }
    public set beNodeVolumeSize(beNodeVolumeSize: string  | undefined) {
        this['be_node_volume_size'] = beNodeVolumeSize;
    }
    public get beNodeVolumeSize(): string | undefined {
        return this['be_node_volume_size'];
    }
    public withSupportDataReplication(supportDataReplication: boolean): StarRocksInstanceInfoInstances {
        this['support_data_replication'] = supportDataReplication;
        return this;
    }
    public set supportDataReplication(supportDataReplication: boolean  | undefined) {
        this['support_data_replication'] = supportDataReplication;
    }
    public get supportDataReplication(): boolean | undefined {
        return this['support_data_replication'];
    }
    public withNewVersionAvailable(newVersionAvailable: boolean): StarRocksInstanceInfoInstances {
        this['new_version_available'] = newVersionAvailable;
        return this;
    }
    public set newVersionAvailable(newVersionAvailable: boolean  | undefined) {
        this['new_version_available'] = newVersionAvailable;
    }
    public get newVersionAvailable(): boolean | undefined {
        return this['new_version_available'];
    }
    public withSslOption(sslOption: boolean): StarRocksInstanceInfoInstances {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: boolean  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): boolean | undefined {
        return this['ssl_option'];
    }
    public withDedicatedResourceId(dedicatedResourceId: string): StarRocksInstanceInfoInstances {
        this['dedicated_resource_id'] = dedicatedResourceId;
        return this;
    }
    public set dedicatedResourceId(dedicatedResourceId: string  | undefined) {
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public get dedicatedResourceId(): string | undefined {
        return this['dedicated_resource_id'];
    }
    public withPayModel(payModel: string): StarRocksInstanceInfoInstances {
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