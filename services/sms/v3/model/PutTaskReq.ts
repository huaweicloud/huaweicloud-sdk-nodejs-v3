import { CloneServer } from './CloneServer';
import { PostSourceServerBody } from './PostSourceServerBody';
import { SubTask } from './SubTask';
import { TargetServer } from './TargetServer';


export class PutTaskReq {
    public name?: string;
    public type?: PutTaskReqTypeEnum | string;
    private 'os_type'?: PutTaskReqOsTypeEnum | string;
    public id?: string;
    public priority?: PutTaskReqPriorityEnum | number;
    private 'region_id'?: string;
    private 'start_target_server'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'exist_server'?: boolean;
    private 'migration_ip'?: string;
    private 'region_name'?: string;
    private 'speed_limit'?: number;
    private 'project_name'?: string;
    private 'project_id'?: string;
    private 'vm_template_id'?: string;
    private 'source_server'?: PostSourceServerBody;
    private 'target_server'?: TargetServer;
    public state?: PutTaskReqStateEnum | string;
    private 'estimate_complete_time'?: number;
    public connected?: boolean;
    private 'create_date'?: number;
    private 'start_date'?: number;
    private 'finish_date'?: number;
    private 'migrate_speed'?: number;
    private 'error_json'?: string;
    private 'total_time'?: number;
    private 'float_ip'?: string;
    private 'remain_seconds'?: number;
    private 'target_snapshot_id'?: string;
    private 'clone_server'?: CloneServer;
    private 'sub_tasks'?: Array<SubTask>;
    public constructor() { 
    }
    public withName(name: string): PutTaskReq {
        this['name'] = name;
        return this;
    }
    public withType(type: PutTaskReqTypeEnum | string): PutTaskReq {
        this['type'] = type;
        return this;
    }
    public withOsType(osType: PutTaskReqOsTypeEnum | string): PutTaskReq {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: PutTaskReqOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): PutTaskReqOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withId(id: string): PutTaskReq {
        this['id'] = id;
        return this;
    }
    public withPriority(priority: PutTaskReqPriorityEnum | number): PutTaskReq {
        this['priority'] = priority;
        return this;
    }
    public withRegionId(regionId: string): PutTaskReq {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withStartTargetServer(startTargetServer: boolean): PutTaskReq {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean  | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer(): boolean | undefined {
        return this['start_target_server'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PutTaskReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExistServer(existServer: boolean): PutTaskReq {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean  | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer(): boolean | undefined {
        return this['exist_server'];
    }
    public withMigrationIp(migrationIp: string): PutTaskReq {
        this['migration_ip'] = migrationIp;
        return this;
    }
    public set migrationIp(migrationIp: string  | undefined) {
        this['migration_ip'] = migrationIp;
    }
    public get migrationIp(): string | undefined {
        return this['migration_ip'];
    }
    public withRegionName(regionName: string): PutTaskReq {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withSpeedLimit(speedLimit: number): PutTaskReq {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number  | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit(): number | undefined {
        return this['speed_limit'];
    }
    public withProjectName(projectName: string): PutTaskReq {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withProjectId(projectId: string): PutTaskReq {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVmTemplateId(vmTemplateId: string): PutTaskReq {
        this['vm_template_id'] = vmTemplateId;
        return this;
    }
    public set vmTemplateId(vmTemplateId: string  | undefined) {
        this['vm_template_id'] = vmTemplateId;
    }
    public get vmTemplateId(): string | undefined {
        return this['vm_template_id'];
    }
    public withSourceServer(sourceServer: PostSourceServerBody): PutTaskReq {
        this['source_server'] = sourceServer;
        return this;
    }
    public set sourceServer(sourceServer: PostSourceServerBody  | undefined) {
        this['source_server'] = sourceServer;
    }
    public get sourceServer(): PostSourceServerBody | undefined {
        return this['source_server'];
    }
    public withTargetServer(targetServer: TargetServer): PutTaskReq {
        this['target_server'] = targetServer;
        return this;
    }
    public set targetServer(targetServer: TargetServer  | undefined) {
        this['target_server'] = targetServer;
    }
    public get targetServer(): TargetServer | undefined {
        return this['target_server'];
    }
    public withState(state: PutTaskReqStateEnum | string): PutTaskReq {
        this['state'] = state;
        return this;
    }
    public withEstimateCompleteTime(estimateCompleteTime: number): PutTaskReq {
        this['estimate_complete_time'] = estimateCompleteTime;
        return this;
    }
    public set estimateCompleteTime(estimateCompleteTime: number  | undefined) {
        this['estimate_complete_time'] = estimateCompleteTime;
    }
    public get estimateCompleteTime(): number | undefined {
        return this['estimate_complete_time'];
    }
    public withConnected(connected: boolean): PutTaskReq {
        this['connected'] = connected;
        return this;
    }
    public withCreateDate(createDate: number): PutTaskReq {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: number  | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate(): number | undefined {
        return this['create_date'];
    }
    public withStartDate(startDate: number): PutTaskReq {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): number | undefined {
        return this['start_date'];
    }
    public withFinishDate(finishDate: number): PutTaskReq {
        this['finish_date'] = finishDate;
        return this;
    }
    public set finishDate(finishDate: number  | undefined) {
        this['finish_date'] = finishDate;
    }
    public get finishDate(): number | undefined {
        return this['finish_date'];
    }
    public withMigrateSpeed(migrateSpeed: number): PutTaskReq {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number  | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed(): number | undefined {
        return this['migrate_speed'];
    }
    public withErrorJson(errorJson: string): PutTaskReq {
        this['error_json'] = errorJson;
        return this;
    }
    public set errorJson(errorJson: string  | undefined) {
        this['error_json'] = errorJson;
    }
    public get errorJson(): string | undefined {
        return this['error_json'];
    }
    public withTotalTime(totalTime: number): PutTaskReq {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number  | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime(): number | undefined {
        return this['total_time'];
    }
    public withFloatIp(floatIp: string): PutTaskReq {
        this['float_ip'] = floatIp;
        return this;
    }
    public set floatIp(floatIp: string  | undefined) {
        this['float_ip'] = floatIp;
    }
    public get floatIp(): string | undefined {
        return this['float_ip'];
    }
    public withRemainSeconds(remainSeconds: number): PutTaskReq {
        this['remain_seconds'] = remainSeconds;
        return this;
    }
    public set remainSeconds(remainSeconds: number  | undefined) {
        this['remain_seconds'] = remainSeconds;
    }
    public get remainSeconds(): number | undefined {
        return this['remain_seconds'];
    }
    public withTargetSnapshotId(targetSnapshotId: string): PutTaskReq {
        this['target_snapshot_id'] = targetSnapshotId;
        return this;
    }
    public set targetSnapshotId(targetSnapshotId: string  | undefined) {
        this['target_snapshot_id'] = targetSnapshotId;
    }
    public get targetSnapshotId(): string | undefined {
        return this['target_snapshot_id'];
    }
    public withCloneServer(cloneServer: CloneServer): PutTaskReq {
        this['clone_server'] = cloneServer;
        return this;
    }
    public set cloneServer(cloneServer: CloneServer  | undefined) {
        this['clone_server'] = cloneServer;
    }
    public get cloneServer(): CloneServer | undefined {
        return this['clone_server'];
    }
    public withSubTasks(subTasks: Array<SubTask>): PutTaskReq {
        this['sub_tasks'] = subTasks;
        return this;
    }
    public set subTasks(subTasks: Array<SubTask>  | undefined) {
        this['sub_tasks'] = subTasks;
    }
    public get subTasks(): Array<SubTask> | undefined {
        return this['sub_tasks'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PutTaskReqTypeEnum {
    MIGRATE_FILE = 'MIGRATE_FILE',
    MIGRATE_BLOCK = 'MIGRATE_BLOCK'
}
/**
    * @export
    * @enum {string}
    */
export enum PutTaskReqOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
/**
    * @export
    * @enum {string}
    */
export enum PutTaskReqPriorityEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum PutTaskReqStateEnum {
    READY = 'READY',
    RUNNING = 'RUNNING',
    SYNCING = 'SYNCING',
    MIGRATE_SUCCESS = 'MIGRATE_SUCCESS',
    SYNC_SUCCESS = 'SYNC_SUCCESS',
    MIGRATE_FAIL = 'MIGRATE_FAIL',
    SYNC_FAIL = 'SYNC_FAIL',
    ABORTING = 'ABORTING',
    ABORT = 'ABORT',
    SKIPPING = 'SKIPPING',
    DELETING = 'DELETING',
    RESETING = 'RESETING'
}
