import { CloneServerBrief } from './CloneServerBrief';
import { ConfigBody } from './ConfigBody';
import { NetworkCheckInfoRequestBody } from './NetworkCheckInfoRequestBody';
import { SourceServerAssociatedWithTask } from './SourceServerAssociatedWithTask';
import { SubTaskAssociatedWithTask } from './SubTaskAssociatedWithTask';
import { TargetServerAssociatedWithTask } from './TargetServerAssociatedWithTask';


export class TasksResponseBody {
    public id?: string;
    public name?: string;
    public type?: TasksResponseBodyTypeEnum;
    private 'os_type'?: TasksResponseBodyOsTypeEnum | undefined;
    public state?: string;
    private 'estimate_complete_time'?: number | undefined;
    private 'create_date'?: number | undefined;
    public priority?: TasksResponseBodyPriorityEnum;
    private 'speed_limit'?: number | undefined;
    private 'migrate_speed'?: number | undefined;
    private 'compress_rate'?: number | undefined;
    private 'start_target_server'?: boolean | undefined;
    private 'error_json'?: string | undefined;
    private 'total_time'?: number | undefined;
    private 'migration_ip'?: string | undefined;
    private 'sub_tasks'?: Array<SubTaskAssociatedWithTask> | undefined;
    private 'source_server'?: SourceServerAssociatedWithTask | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'target_server'?: TargetServerAssociatedWithTask | undefined;
    private 'log_collect_status'?: TasksResponseBodyLogCollectStatusEnum | undefined;
    private 'clone_server'?: CloneServerBrief | undefined;
    public syncing?: boolean;
    private 'network_check_info'?: NetworkCheckInfoRequestBody | undefined;
    private 'special_config'?: Array<ConfigBody> | undefined;
    public constructor() { 
    }
    public withId(id: string): TasksResponseBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TasksResponseBody {
        this['name'] = name;
        return this;
    }
    public withType(type: TasksResponseBodyTypeEnum): TasksResponseBody {
        this['type'] = type;
        return this;
    }
    public withOsType(osType: TasksResponseBodyOsTypeEnum): TasksResponseBody {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: TasksResponseBodyOsTypeEnum | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
    public withState(state: string): TasksResponseBody {
        this['state'] = state;
        return this;
    }
    public withEstimateCompleteTime(estimateCompleteTime: number): TasksResponseBody {
        this['estimate_complete_time'] = estimateCompleteTime;
        return this;
    }
    public set estimateCompleteTime(estimateCompleteTime: number | undefined) {
        this['estimate_complete_time'] = estimateCompleteTime;
    }
    public get estimateCompleteTime() {
        return this['estimate_complete_time'];
    }
    public withCreateDate(createDate: number): TasksResponseBody {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: number | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate() {
        return this['create_date'];
    }
    public withPriority(priority: TasksResponseBodyPriorityEnum): TasksResponseBody {
        this['priority'] = priority;
        return this;
    }
    public withSpeedLimit(speedLimit: number): TasksResponseBody {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
    public withMigrateSpeed(migrateSpeed: number): TasksResponseBody {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed() {
        return this['migrate_speed'];
    }
    public withCompressRate(compressRate: number): TasksResponseBody {
        this['compress_rate'] = compressRate;
        return this;
    }
    public set compressRate(compressRate: number | undefined) {
        this['compress_rate'] = compressRate;
    }
    public get compressRate() {
        return this['compress_rate'];
    }
    public withStartTargetServer(startTargetServer: boolean): TasksResponseBody {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer() {
        return this['start_target_server'];
    }
    public withErrorJson(errorJson: string): TasksResponseBody {
        this['error_json'] = errorJson;
        return this;
    }
    public set errorJson(errorJson: string | undefined) {
        this['error_json'] = errorJson;
    }
    public get errorJson() {
        return this['error_json'];
    }
    public withTotalTime(totalTime: number): TasksResponseBody {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime() {
        return this['total_time'];
    }
    public withMigrationIp(migrationIp: string): TasksResponseBody {
        this['migration_ip'] = migrationIp;
        return this;
    }
    public set migrationIp(migrationIp: string | undefined) {
        this['migration_ip'] = migrationIp;
    }
    public get migrationIp() {
        return this['migration_ip'];
    }
    public withSubTasks(subTasks: Array<SubTaskAssociatedWithTask>): TasksResponseBody {
        this['sub_tasks'] = subTasks;
        return this;
    }
    public set subTasks(subTasks: Array<SubTaskAssociatedWithTask> | undefined) {
        this['sub_tasks'] = subTasks;
    }
    public get subTasks() {
        return this['sub_tasks'];
    }
    public withSourceServer(sourceServer: SourceServerAssociatedWithTask): TasksResponseBody {
        this['source_server'] = sourceServer;
        return this;
    }
    public set sourceServer(sourceServer: SourceServerAssociatedWithTask | undefined) {
        this['source_server'] = sourceServer;
    }
    public get sourceServer() {
        return this['source_server'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): TasksResponseBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withTargetServer(targetServer: TargetServerAssociatedWithTask): TasksResponseBody {
        this['target_server'] = targetServer;
        return this;
    }
    public set targetServer(targetServer: TargetServerAssociatedWithTask | undefined) {
        this['target_server'] = targetServer;
    }
    public get targetServer() {
        return this['target_server'];
    }
    public withLogCollectStatus(logCollectStatus: TasksResponseBodyLogCollectStatusEnum): TasksResponseBody {
        this['log_collect_status'] = logCollectStatus;
        return this;
    }
    public set logCollectStatus(logCollectStatus: TasksResponseBodyLogCollectStatusEnum | undefined) {
        this['log_collect_status'] = logCollectStatus;
    }
    public get logCollectStatus() {
        return this['log_collect_status'];
    }
    public withCloneServer(cloneServer: CloneServerBrief): TasksResponseBody {
        this['clone_server'] = cloneServer;
        return this;
    }
    public set cloneServer(cloneServer: CloneServerBrief | undefined) {
        this['clone_server'] = cloneServer;
    }
    public get cloneServer() {
        return this['clone_server'];
    }
    public withSyncing(syncing: boolean): TasksResponseBody {
        this['syncing'] = syncing;
        return this;
    }
    public withNetworkCheckInfo(networkCheckInfo: NetworkCheckInfoRequestBody): TasksResponseBody {
        this['network_check_info'] = networkCheckInfo;
        return this;
    }
    public set networkCheckInfo(networkCheckInfo: NetworkCheckInfoRequestBody | undefined) {
        this['network_check_info'] = networkCheckInfo;
    }
    public get networkCheckInfo() {
        return this['network_check_info'];
    }
    public withSpecialConfig(specialConfig: Array<ConfigBody>): TasksResponseBody {
        this['special_config'] = specialConfig;
        return this;
    }
    public set specialConfig(specialConfig: Array<ConfigBody> | undefined) {
        this['special_config'] = specialConfig;
    }
    public get specialConfig() {
        return this['special_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TasksResponseBodyTypeEnum {
    MIGRATE_FILE = 'MIGRATE_FILE',
    MIGRATE_BLOCK = 'MIGRATE_BLOCK'
}
/**
    * @export
    * @enum {string}
    */
export enum TasksResponseBodyOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
/**
    * @export
    * @enum {string}
    */
export enum TasksResponseBodyPriorityEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum TasksResponseBodyLogCollectStatusEnum {
    INIT = 'INIT',
    TELL_AGENT_TO_COLLECT = 'TELL_AGENT_TO_COLLECT',
    WAIT_AGENT_COLLECT_ACK = 'WAIT_AGENT_COLLECT_ACK',
    AGENT_COLLECT_FAIL = 'AGENT_COLLECT_FAIL',
    AGENT_COLLECT_SUCCESS = 'AGENT_COLLECT_SUCCESS',
    WAIT_SERVER_COLLECT = 'WAIT_SERVER_COLLECT',
    SERVER_COLLECT_FAIL = 'SERVER_COLLECT_FAIL',
    SERVER_COLLECT_SUCCESS = 'SERVER_COLLECT_SUCCESS',
    TELL_AGENT_RESET_ACL = 'TELL_AGENT_RESET_ACL',
    WAIT_AGENT_RESET_ACL_ACK = 'WAIT_AGENT_RESET_ACL_ACK'
}
