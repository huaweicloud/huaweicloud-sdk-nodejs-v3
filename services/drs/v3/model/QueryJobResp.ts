import { DatabaseObjectInfo } from './DatabaseObjectInfo';
import { DefaultRootDb } from './DefaultRootDb';
import { Endpoint } from './Endpoint';
import { GetDataTransformationResp } from './GetDataTransformationResp';
import { InstInfo } from './InstInfo';
import { PeriodOrderResp } from './PeriodOrderResp';
import { QuerySmnInfoResp } from './QuerySmnInfoResp';
import { SpeedLimitInfo } from './SpeedLimitInfo';
import { Tag } from './Tag';


export class QueryJobResp {
    public id?: string;
    private 'parent_id'?: string | undefined;
    public name?: string;
    public status?: QueryJobRespStatusEnum;
    public description?: string;
    private 'create_time'?: string | undefined;
    private 'task_type'?: QueryJobRespTaskTypeEnum | undefined;
    private 'source_endpoint'?: Endpoint | undefined;
    private 'dmq_endpoint'?: Endpoint | undefined;
    private 'source_sharding'?: Array<Endpoint> | undefined;
    private 'target_endpoint'?: Endpoint | undefined;
    private 'net_type'?: QueryJobRespNetTypeEnum | undefined;
    private 'failed_reason'?: string | undefined;
    private 'inst_info'?: InstInfo | undefined;
    private 'actual_start_time'?: string | undefined;
    private 'full_transfer_complete_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    private 'job_direction'?: QueryJobRespJobDirectionEnum | undefined;
    private 'db_use_type'?: QueryJobRespDbUseTypeEnum | undefined;
    private 'need_restart'?: boolean | undefined;
    private 'is_target_readonly'?: boolean | undefined;
    private 'conflict_policy'?: QueryJobRespConflictPolicyEnum | undefined;
    private 'filter_ddl_policy'?: string | undefined;
    private 'speed_limit'?: Array<SpeedLimitInfo> | undefined;
    private 'schema_type'?: QueryJobRespSchemaTypeEnum | undefined;
    private 'node_num'?: string | undefined;
    private 'object_switch'?: boolean | undefined;
    private 'master_job_id'?: string | undefined;
    private 'full_mode'?: string | undefined;
    private 'struct_trans'?: boolean | undefined;
    private 'index_trans'?: boolean | undefined;
    private 'replace_definer'?: boolean | undefined;
    private 'migrate_user'?: boolean | undefined;
    private 'sync_database'?: boolean | undefined;
    private 'error_code'?: string | undefined;
    private 'error_message'?: string | undefined;
    private 'target_root_db'?: DefaultRootDb | undefined;
    private 'az_code'?: string | undefined;
    private 'vpc_id'?: string | undefined;
    private 'subnet_id'?: string | undefined;
    private 'security_group_id'?: string | undefined;
    private 'multi_write'?: boolean | undefined;
    private 'support_ip_v6'?: boolean | undefined;
    private 'inherit_id'?: string | undefined;
    public gtid?: string;
    private 'alarm_notify'?: QuerySmnInfoResp | undefined;
    private 'incre_start_position'?: string | undefined;
    private 'is_multi_az'?: boolean | undefined;
    private 'az_name'?: string | undefined;
    private 'master_az'?: string | undefined;
    private 'slave_az'?: string | undefined;
    private 'node_role'?: string | undefined;
    private 'period_order'?: PeriodOrderResp | undefined;
    private 'object_infos'?: Array<DatabaseObjectInfo> | undefined;
    private 'original_job_direction'?: QueryJobRespOriginalJobDirectionEnum | undefined;
    private 'data_transformation'?: GetDataTransformationResp | undefined;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withId(id: string): QueryJobResp {
        this['id'] = id;
        return this;
    }
    public withParentId(parentId: string): QueryJobResp {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withName(name: string): QueryJobResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: QueryJobRespStatusEnum): QueryJobResp {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): QueryJobResp {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): QueryJobResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withTaskType(taskType: QueryJobRespTaskTypeEnum): QueryJobResp {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: QueryJobRespTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withSourceEndpoint(sourceEndpoint: Endpoint): QueryJobResp {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Endpoint | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint() {
        return this['source_endpoint'];
    }
    public withDmqEndpoint(dmqEndpoint: Endpoint): QueryJobResp {
        this['dmq_endpoint'] = dmqEndpoint;
        return this;
    }
    public set dmqEndpoint(dmqEndpoint: Endpoint | undefined) {
        this['dmq_endpoint'] = dmqEndpoint;
    }
    public get dmqEndpoint() {
        return this['dmq_endpoint'];
    }
    public withSourceSharding(sourceSharding: Array<Endpoint>): QueryJobResp {
        this['source_sharding'] = sourceSharding;
        return this;
    }
    public set sourceSharding(sourceSharding: Array<Endpoint> | undefined) {
        this['source_sharding'] = sourceSharding;
    }
    public get sourceSharding() {
        return this['source_sharding'];
    }
    public withTargetEndpoint(targetEndpoint: Endpoint): QueryJobResp {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Endpoint | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint() {
        return this['target_endpoint'];
    }
    public withNetType(netType: QueryJobRespNetTypeEnum): QueryJobResp {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: QueryJobRespNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withFailedReason(failedReason: string): QueryJobResp {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason() {
        return this['failed_reason'];
    }
    public withInstInfo(instInfo: InstInfo): QueryJobResp {
        this['inst_info'] = instInfo;
        return this;
    }
    public set instInfo(instInfo: InstInfo | undefined) {
        this['inst_info'] = instInfo;
    }
    public get instInfo() {
        return this['inst_info'];
    }
    public withActualStartTime(actualStartTime: string): QueryJobResp {
        this['actual_start_time'] = actualStartTime;
        return this;
    }
    public set actualStartTime(actualStartTime: string | undefined) {
        this['actual_start_time'] = actualStartTime;
    }
    public get actualStartTime() {
        return this['actual_start_time'];
    }
    public withFullTransferCompleteTime(fullTransferCompleteTime: string): QueryJobResp {
        this['full_transfer_complete_time'] = fullTransferCompleteTime;
        return this;
    }
    public set fullTransferCompleteTime(fullTransferCompleteTime: string | undefined) {
        this['full_transfer_complete_time'] = fullTransferCompleteTime;
    }
    public get fullTransferCompleteTime() {
        return this['full_transfer_complete_time'];
    }
    public withUpdateTime(updateTime: string): QueryJobResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withJobDirection(jobDirection: QueryJobRespJobDirectionEnum): QueryJobResp {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: QueryJobRespJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withDbUseType(dbUseType: QueryJobRespDbUseTypeEnum): QueryJobResp {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: QueryJobRespDbUseTypeEnum | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType() {
        return this['db_use_type'];
    }
    public withNeedRestart(needRestart: boolean): QueryJobResp {
        this['need_restart'] = needRestart;
        return this;
    }
    public set needRestart(needRestart: boolean | undefined) {
        this['need_restart'] = needRestart;
    }
    public get needRestart() {
        return this['need_restart'];
    }
    public withIsTargetReadonly(isTargetReadonly: boolean): QueryJobResp {
        this['is_target_readonly'] = isTargetReadonly;
        return this;
    }
    public set isTargetReadonly(isTargetReadonly: boolean | undefined) {
        this['is_target_readonly'] = isTargetReadonly;
    }
    public get isTargetReadonly() {
        return this['is_target_readonly'];
    }
    public withConflictPolicy(conflictPolicy: QueryJobRespConflictPolicyEnum): QueryJobResp {
        this['conflict_policy'] = conflictPolicy;
        return this;
    }
    public set conflictPolicy(conflictPolicy: QueryJobRespConflictPolicyEnum | undefined) {
        this['conflict_policy'] = conflictPolicy;
    }
    public get conflictPolicy() {
        return this['conflict_policy'];
    }
    public withFilterDdlPolicy(filterDdlPolicy: string): QueryJobResp {
        this['filter_ddl_policy'] = filterDdlPolicy;
        return this;
    }
    public set filterDdlPolicy(filterDdlPolicy: string | undefined) {
        this['filter_ddl_policy'] = filterDdlPolicy;
    }
    public get filterDdlPolicy() {
        return this['filter_ddl_policy'];
    }
    public withSpeedLimit(speedLimit: Array<SpeedLimitInfo>): QueryJobResp {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: Array<SpeedLimitInfo> | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
    public withSchemaType(schemaType: QueryJobRespSchemaTypeEnum): QueryJobResp {
        this['schema_type'] = schemaType;
        return this;
    }
    public set schemaType(schemaType: QueryJobRespSchemaTypeEnum | undefined) {
        this['schema_type'] = schemaType;
    }
    public get schemaType() {
        return this['schema_type'];
    }
    public withNodeNum(nodeNum: string): QueryJobResp {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: string | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum() {
        return this['node_num'];
    }
    public withObjectSwitch(objectSwitch: boolean): QueryJobResp {
        this['object_switch'] = objectSwitch;
        return this;
    }
    public set objectSwitch(objectSwitch: boolean | undefined) {
        this['object_switch'] = objectSwitch;
    }
    public get objectSwitch() {
        return this['object_switch'];
    }
    public withMasterJobId(masterJobId: string): QueryJobResp {
        this['master_job_id'] = masterJobId;
        return this;
    }
    public set masterJobId(masterJobId: string | undefined) {
        this['master_job_id'] = masterJobId;
    }
    public get masterJobId() {
        return this['master_job_id'];
    }
    public withFullMode(fullMode: string): QueryJobResp {
        this['full_mode'] = fullMode;
        return this;
    }
    public set fullMode(fullMode: string | undefined) {
        this['full_mode'] = fullMode;
    }
    public get fullMode() {
        return this['full_mode'];
    }
    public withStructTrans(structTrans: boolean): QueryJobResp {
        this['struct_trans'] = structTrans;
        return this;
    }
    public set structTrans(structTrans: boolean | undefined) {
        this['struct_trans'] = structTrans;
    }
    public get structTrans() {
        return this['struct_trans'];
    }
    public withIndexTrans(indexTrans: boolean): QueryJobResp {
        this['index_trans'] = indexTrans;
        return this;
    }
    public set indexTrans(indexTrans: boolean | undefined) {
        this['index_trans'] = indexTrans;
    }
    public get indexTrans() {
        return this['index_trans'];
    }
    public withReplaceDefiner(replaceDefiner: boolean): QueryJobResp {
        this['replace_definer'] = replaceDefiner;
        return this;
    }
    public set replaceDefiner(replaceDefiner: boolean | undefined) {
        this['replace_definer'] = replaceDefiner;
    }
    public get replaceDefiner() {
        return this['replace_definer'];
    }
    public withMigrateUser(migrateUser: boolean): QueryJobResp {
        this['migrate_user'] = migrateUser;
        return this;
    }
    public set migrateUser(migrateUser: boolean | undefined) {
        this['migrate_user'] = migrateUser;
    }
    public get migrateUser() {
        return this['migrate_user'];
    }
    public withSyncDatabase(syncDatabase: boolean): QueryJobResp {
        this['sync_database'] = syncDatabase;
        return this;
    }
    public set syncDatabase(syncDatabase: boolean | undefined) {
        this['sync_database'] = syncDatabase;
    }
    public get syncDatabase() {
        return this['sync_database'];
    }
    public withErrorCode(errorCode: string): QueryJobResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): QueryJobResp {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
    public withTargetRootDb(targetRootDb: DefaultRootDb): QueryJobResp {
        this['target_root_db'] = targetRootDb;
        return this;
    }
    public set targetRootDb(targetRootDb: DefaultRootDb | undefined) {
        this['target_root_db'] = targetRootDb;
    }
    public get targetRootDb() {
        return this['target_root_db'];
    }
    public withAzCode(azCode: string): QueryJobResp {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode() {
        return this['az_code'];
    }
    public withVpcId(vpcId: string): QueryJobResp {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): QueryJobResp {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): QueryJobResp {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withMultiWrite(multiWrite: boolean): QueryJobResp {
        this['multi_write'] = multiWrite;
        return this;
    }
    public set multiWrite(multiWrite: boolean | undefined) {
        this['multi_write'] = multiWrite;
    }
    public get multiWrite() {
        return this['multi_write'];
    }
    public withSupportIpV6(supportIpV6: boolean): QueryJobResp {
        this['support_ip_v6'] = supportIpV6;
        return this;
    }
    public set supportIpV6(supportIpV6: boolean | undefined) {
        this['support_ip_v6'] = supportIpV6;
    }
    public get supportIpV6() {
        return this['support_ip_v6'];
    }
    public withInheritId(inheritId: string): QueryJobResp {
        this['inherit_id'] = inheritId;
        return this;
    }
    public set inheritId(inheritId: string | undefined) {
        this['inherit_id'] = inheritId;
    }
    public get inheritId() {
        return this['inherit_id'];
    }
    public withGtid(gtid: string): QueryJobResp {
        this['gtid'] = gtid;
        return this;
    }
    public withAlarmNotify(alarmNotify: QuerySmnInfoResp): QueryJobResp {
        this['alarm_notify'] = alarmNotify;
        return this;
    }
    public set alarmNotify(alarmNotify: QuerySmnInfoResp | undefined) {
        this['alarm_notify'] = alarmNotify;
    }
    public get alarmNotify() {
        return this['alarm_notify'];
    }
    public withIncreStartPosition(increStartPosition: string): QueryJobResp {
        this['incre_start_position'] = increStartPosition;
        return this;
    }
    public set increStartPosition(increStartPosition: string | undefined) {
        this['incre_start_position'] = increStartPosition;
    }
    public get increStartPosition() {
        return this['incre_start_position'];
    }
    public withIsMultiAz(isMultiAz: boolean): QueryJobResp {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz() {
        return this['is_multi_az'];
    }
    public withAzName(azName: string): QueryJobResp {
        this['az_name'] = azName;
        return this;
    }
    public set azName(azName: string | undefined) {
        this['az_name'] = azName;
    }
    public get azName() {
        return this['az_name'];
    }
    public withMasterAz(masterAz: string): QueryJobResp {
        this['master_az'] = masterAz;
        return this;
    }
    public set masterAz(masterAz: string | undefined) {
        this['master_az'] = masterAz;
    }
    public get masterAz() {
        return this['master_az'];
    }
    public withSlaveAz(slaveAz: string): QueryJobResp {
        this['slave_az'] = slaveAz;
        return this;
    }
    public set slaveAz(slaveAz: string | undefined) {
        this['slave_az'] = slaveAz;
    }
    public get slaveAz() {
        return this['slave_az'];
    }
    public withNodeRole(nodeRole: string): QueryJobResp {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: string | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole() {
        return this['node_role'];
    }
    public withPeriodOrder(periodOrder: PeriodOrderResp): QueryJobResp {
        this['period_order'] = periodOrder;
        return this;
    }
    public set periodOrder(periodOrder: PeriodOrderResp | undefined) {
        this['period_order'] = periodOrder;
    }
    public get periodOrder() {
        return this['period_order'];
    }
    public withObjectInfos(objectInfos: Array<DatabaseObjectInfo>): QueryJobResp {
        this['object_infos'] = objectInfos;
        return this;
    }
    public set objectInfos(objectInfos: Array<DatabaseObjectInfo> | undefined) {
        this['object_infos'] = objectInfos;
    }
    public get objectInfos() {
        return this['object_infos'];
    }
    public withOriginalJobDirection(originalJobDirection: QueryJobRespOriginalJobDirectionEnum): QueryJobResp {
        this['original_job_direction'] = originalJobDirection;
        return this;
    }
    public set originalJobDirection(originalJobDirection: QueryJobRespOriginalJobDirectionEnum | undefined) {
        this['original_job_direction'] = originalJobDirection;
    }
    public get originalJobDirection() {
        return this['original_job_direction'];
    }
    public withDataTransformation(dataTransformation: GetDataTransformationResp): QueryJobResp {
        this['data_transformation'] = dataTransformation;
        return this;
    }
    public set dataTransformation(dataTransformation: GetDataTransformationResp | undefined) {
        this['data_transformation'] = dataTransformation;
    }
    public get dataTransformation() {
        return this['data_transformation'];
    }
    public withTags(tags: Array<Tag>): QueryJobResp {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryJobRespStatusEnum {
    CREATING = 'CREATING',
    CREATE_FAILED = 'CREATE_FAILED',
    CONFIGURATION = 'CONFIGURATION',
    STARTJOBING = 'STARTJOBING',
    WAITING_FOR_START = 'WAITING_FOR_START',
    START_JOB_FAILED = 'START_JOB_FAILED',
    PAUSING = 'PAUSING',
    FULL_TRANSFER_STARTED = 'FULL_TRANSFER_STARTED',
    FULL_TRANSFER_FAILED = 'FULL_TRANSFER_FAILED',
    FULL_TRANSFER_COMPLETE = 'FULL_TRANSFER_COMPLETE',
    INCRE_TRANSFER_STARTED = 'INCRE_TRANSFER_STARTED',
    INCRE_TRANSFER_FAILED = 'INCRE_TRANSFER_FAILED',
    RELEASE_RESOURCE_STARTED = 'RELEASE_RESOURCE_STARTED',
    RELEASE_RESOURCE_FAILED = 'RELEASE_RESOURCE_FAILED',
    RELEASE_RESOURCE_COMPLETE = 'RELEASE_RESOURCE_COMPLETE',
    REBUILD_NODE_STARTED = 'REBUILD_NODE_STARTED',
    REBUILD_NODE_FAILED = 'REBUILD_NODE_FAILED',
    CHANGE_JOB_STARTED = 'CHANGE_JOB_STARTED',
    CHANGE_JOB_FAILED = 'CHANGE_JOB_FAILED',
    DELETED = 'DELETED',
    CHILD_TRANSFER_STARTING = 'CHILD_TRANSFER_STARTING',
    CHILD_TRANSFER_STARTED = 'CHILD_TRANSFER_STARTED',
    CHILD_TRANSFER_COMPLETE = 'CHILD_TRANSFER_COMPLETE',
    CHILD_TRANSFER_FAILED = 'CHILD_TRANSFER_FAILED',
    RELEASE_CHILD_TRANSFER_STARTED = 'RELEASE_CHILD_TRANSFER_STARTED',
    RELEASE_CHILD_TRANSFER_COMPLETE = 'RELEASE_CHILD_TRANSFER_COMPLETE',
    NODE_UPGRADE_START = 'NODE_UPGRADE_START',
    NODE_UPGRADE_COMPLETE = 'NODE_UPGRADE_COMPLETE',
    NODE_UPGRADE_FAILED = 'NODE_UPGRADE_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryJobRespTaskTypeEnum {
    FULL_TRANS = 'FULL_TRANS',
    FULL_INCR_TRANS = 'FULL_INCR_TRANS',
    INCR_TRANS = 'INCR_TRANS'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryJobRespNetTypeEnum {
    VPN = 'vpn',
    VPC = 'vpc',
    EIP = 'eip'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryJobRespJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryJobRespDbUseTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryJobRespConflictPolicyEnum {
    STOP = 'stop',
    OVERWRITE = 'overwrite',
    IGNORE = 'ignore'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryJobRespSchemaTypeEnum {
    REPLICATION = 'Replication',
    TUNGSTEN = 'Tungsten',
    PGBASEBACKUP = 'PGBaseBackup'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryJobRespOriginalJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
