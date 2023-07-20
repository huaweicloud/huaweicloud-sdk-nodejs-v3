import { CloneServerBrief } from './CloneServerBrief';
import { ConfigBody } from './ConfigBody';
import { NetworkCheckInfoRequestBody } from './NetworkCheckInfoRequestBody';
import { SourceServerAssociatedWithTask } from './SourceServerAssociatedWithTask';
import { SubTaskAssociatedWithTask } from './SubTaskAssociatedWithTask';
import { TargetServerAssociatedWithTask } from './TargetServerAssociatedWithTask';


export class TasksResponseBody {
    public id?: string;
    public name?: string;
    public type?: TasksResponseBodyTypeEnum | string;
    private 'os_type'?: TasksResponseBodyOsTypeEnum | string;
    public state?: string;
    private 'estimate_complete_time'?: number;
    private 'create_date'?: number;
    public priority?: TasksResponseBodyPriorityEnum | number;
    private 'speed_limit'?: number;
    private 'migrate_speed'?: number;
    private 'compress_rate'?: number;
    private 'start_target_server'?: boolean;
    private 'error_json'?: string;
    private 'total_time'?: number;
    private 'migration_ip'?: string;
    private 'sub_tasks'?: Array<SubTaskAssociatedWithTask>;
    private 'source_server'?: SourceServerAssociatedWithTask;
    private 'enterprise_project_id'?: string;
    private 'target_server'?: TargetServerAssociatedWithTask;
    private 'log_collect_status'?: TasksResponseBodyLogCollectStatusEnum | string;
    private 'clone_server'?: CloneServerBrief;
    public syncing?: boolean;
    private 'network_check_info'?: NetworkCheckInfoRequestBody;
    private 'special_config'?: Array<ConfigBody>;
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
    public withType(type: TasksResponseBodyTypeEnum | string): TasksResponseBody {
        this['type'] = type;
        return this;
    }
    public withOsType(osType: TasksResponseBodyOsTypeEnum | string): TasksResponseBody {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: TasksResponseBodyOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): TasksResponseBodyOsTypeEnum | string | undefined {
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
    public set estimateCompleteTime(estimateCompleteTime: number  | undefined) {
        this['estimate_complete_time'] = estimateCompleteTime;
    }
    public get estimateCompleteTime(): number | undefined {
        return this['estimate_complete_time'];
    }
    public withCreateDate(createDate: number): TasksResponseBody {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: number  | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate(): number | undefined {
        return this['create_date'];
    }
    public withPriority(priority: TasksResponseBodyPriorityEnum | number): TasksResponseBody {
        this['priority'] = priority;
        return this;
    }
    public withSpeedLimit(speedLimit: number): TasksResponseBody {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number  | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit(): number | undefined {
        return this['speed_limit'];
    }
    public withMigrateSpeed(migrateSpeed: number): TasksResponseBody {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number  | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed(): number | undefined {
        return this['migrate_speed'];
    }
    public withCompressRate(compressRate: number): TasksResponseBody {
        this['compress_rate'] = compressRate;
        return this;
    }
    public set compressRate(compressRate: number  | undefined) {
        this['compress_rate'] = compressRate;
    }
    public get compressRate(): number | undefined {
        return this['compress_rate'];
    }
    public withStartTargetServer(startTargetServer: boolean): TasksResponseBody {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean  | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer(): boolean | undefined {
        return this['start_target_server'];
    }
    public withErrorJson(errorJson: string): TasksResponseBody {
        this['error_json'] = errorJson;
        return this;
    }
    public set errorJson(errorJson: string  | undefined) {
        this['error_json'] = errorJson;
    }
    public get errorJson(): string | undefined {
        return this['error_json'];
    }
    public withTotalTime(totalTime: number): TasksResponseBody {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number  | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime(): number | undefined {
        return this['total_time'];
    }
    public withMigrationIp(migrationIp: string): TasksResponseBody {
        this['migration_ip'] = migrationIp;
        return this;
    }
    public set migrationIp(migrationIp: string  | undefined) {
        this['migration_ip'] = migrationIp;
    }
    public get migrationIp(): string | undefined {
        return this['migration_ip'];
    }
    public withSubTasks(subTasks: Array<SubTaskAssociatedWithTask>): TasksResponseBody {
        this['sub_tasks'] = subTasks;
        return this;
    }
    public set subTasks(subTasks: Array<SubTaskAssociatedWithTask>  | undefined) {
        this['sub_tasks'] = subTasks;
    }
    public get subTasks(): Array<SubTaskAssociatedWithTask> | undefined {
        return this['sub_tasks'];
    }
    public withSourceServer(sourceServer: SourceServerAssociatedWithTask): TasksResponseBody {
        this['source_server'] = sourceServer;
        return this;
    }
    public set sourceServer(sourceServer: SourceServerAssociatedWithTask  | undefined) {
        this['source_server'] = sourceServer;
    }
    public get sourceServer(): SourceServerAssociatedWithTask | undefined {
        return this['source_server'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): TasksResponseBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTargetServer(targetServer: TargetServerAssociatedWithTask): TasksResponseBody {
        this['target_server'] = targetServer;
        return this;
    }
    public set targetServer(targetServer: TargetServerAssociatedWithTask  | undefined) {
        this['target_server'] = targetServer;
    }
    public get targetServer(): TargetServerAssociatedWithTask | undefined {
        return this['target_server'];
    }
    public withLogCollectStatus(logCollectStatus: TasksResponseBodyLogCollectStatusEnum | string): TasksResponseBody {
        this['log_collect_status'] = logCollectStatus;
        return this;
    }
    public set logCollectStatus(logCollectStatus: TasksResponseBodyLogCollectStatusEnum | string  | undefined) {
        this['log_collect_status'] = logCollectStatus;
    }
    public get logCollectStatus(): TasksResponseBodyLogCollectStatusEnum | string | undefined {
        return this['log_collect_status'];
    }
    public withCloneServer(cloneServer: CloneServerBrief): TasksResponseBody {
        this['clone_server'] = cloneServer;
        return this;
    }
    public set cloneServer(cloneServer: CloneServerBrief  | undefined) {
        this['clone_server'] = cloneServer;
    }
    public get cloneServer(): CloneServerBrief | undefined {
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
    public set networkCheckInfo(networkCheckInfo: NetworkCheckInfoRequestBody  | undefined) {
        this['network_check_info'] = networkCheckInfo;
    }
    public get networkCheckInfo(): NetworkCheckInfoRequestBody | undefined {
        return this['network_check_info'];
    }
    public withSpecialConfig(specialConfig: Array<ConfigBody>): TasksResponseBody {
        this['special_config'] = specialConfig;
        return this;
    }
    public set specialConfig(specialConfig: Array<ConfigBody>  | undefined) {
        this['special_config'] = specialConfig;
    }
    public get specialConfig(): Array<ConfigBody> | undefined {
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
