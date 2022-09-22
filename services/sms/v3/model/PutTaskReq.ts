import { CloneServer } from './CloneServer';
import { PostSourceServerBody } from './PostSourceServerBody';
import { SubTask } from './SubTask';
import { TargetServer } from './TargetServer';


export class PutTaskReq {
    public name?: string;
    public type?: PutTaskReqTypeEnum;
    private 'os_type'?: PutTaskReqOsTypeEnum | undefined;
    public id?: string;
    public priority?: PutTaskReqPriorityEnum;
    private 'region_id'?: string | undefined;
    private 'start_target_server'?: boolean | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'migration_ip'?: string | undefined;
    private 'region_name'?: string | undefined;
    private 'speed_limit'?: number | undefined;
    private 'project_name'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'vm_template_id'?: string | undefined;
    private 'source_server'?: PostSourceServerBody | undefined;
    private 'target_server'?: TargetServer | undefined;
    public state?: string;
    private 'estimate_complete_time'?: number | undefined;
    public connected?: boolean;
    private 'create_date'?: number | undefined;
    private 'start_date'?: number | undefined;
    private 'finish_date'?: number | undefined;
    private 'migrate_speed'?: number | undefined;
    private 'error_json'?: string | undefined;
    private 'total_time'?: number | undefined;
    private 'float_ip'?: string | undefined;
    private 'remain_seconds'?: number | undefined;
    private 'target_snapshot_id'?: string | undefined;
    private 'clone_server'?: CloneServer | undefined;
    private 'sub_tasks'?: Array<SubTask> | undefined;
    public constructor() { 
    }
    public withName(name: string): PutTaskReq {
        this['name'] = name;
        return this;
    }
    public withType(type: PutTaskReqTypeEnum): PutTaskReq {
        this['type'] = type;
        return this;
    }
    public withOsType(osType: PutTaskReqOsTypeEnum): PutTaskReq {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: PutTaskReqOsTypeEnum | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
    public withId(id: string): PutTaskReq {
        this['id'] = id;
        return this;
    }
    public withPriority(priority: PutTaskReqPriorityEnum): PutTaskReq {
        this['priority'] = priority;
        return this;
    }
    public withRegionId(regionId: string): PutTaskReq {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withStartTargetServer(startTargetServer: boolean): PutTaskReq {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer() {
        return this['start_target_server'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PutTaskReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withMigrationIp(migrationIp: string): PutTaskReq {
        this['migration_ip'] = migrationIp;
        return this;
    }
    public set migrationIp(migrationIp: string | undefined) {
        this['migration_ip'] = migrationIp;
    }
    public get migrationIp() {
        return this['migration_ip'];
    }
    public withRegionName(regionName: string): PutTaskReq {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withSpeedLimit(speedLimit: number): PutTaskReq {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
    public withProjectName(projectName: string): PutTaskReq {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withProjectId(projectId: string): PutTaskReq {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withVmTemplateId(vmTemplateId: string): PutTaskReq {
        this['vm_template_id'] = vmTemplateId;
        return this;
    }
    public set vmTemplateId(vmTemplateId: string | undefined) {
        this['vm_template_id'] = vmTemplateId;
    }
    public get vmTemplateId() {
        return this['vm_template_id'];
    }
    public withSourceServer(sourceServer: PostSourceServerBody): PutTaskReq {
        this['source_server'] = sourceServer;
        return this;
    }
    public set sourceServer(sourceServer: PostSourceServerBody | undefined) {
        this['source_server'] = sourceServer;
    }
    public get sourceServer() {
        return this['source_server'];
    }
    public withTargetServer(targetServer: TargetServer): PutTaskReq {
        this['target_server'] = targetServer;
        return this;
    }
    public set targetServer(targetServer: TargetServer | undefined) {
        this['target_server'] = targetServer;
    }
    public get targetServer() {
        return this['target_server'];
    }
    public withState(state: string): PutTaskReq {
        this['state'] = state;
        return this;
    }
    public withEstimateCompleteTime(estimateCompleteTime: number): PutTaskReq {
        this['estimate_complete_time'] = estimateCompleteTime;
        return this;
    }
    public set estimateCompleteTime(estimateCompleteTime: number | undefined) {
        this['estimate_complete_time'] = estimateCompleteTime;
    }
    public get estimateCompleteTime() {
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
    public set createDate(createDate: number | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate() {
        return this['create_date'];
    }
    public withStartDate(startDate: number): PutTaskReq {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate() {
        return this['start_date'];
    }
    public withFinishDate(finishDate: number): PutTaskReq {
        this['finish_date'] = finishDate;
        return this;
    }
    public set finishDate(finishDate: number | undefined) {
        this['finish_date'] = finishDate;
    }
    public get finishDate() {
        return this['finish_date'];
    }
    public withMigrateSpeed(migrateSpeed: number): PutTaskReq {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed() {
        return this['migrate_speed'];
    }
    public withErrorJson(errorJson: string): PutTaskReq {
        this['error_json'] = errorJson;
        return this;
    }
    public set errorJson(errorJson: string | undefined) {
        this['error_json'] = errorJson;
    }
    public get errorJson() {
        return this['error_json'];
    }
    public withTotalTime(totalTime: number): PutTaskReq {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime() {
        return this['total_time'];
    }
    public withFloatIp(floatIp: string): PutTaskReq {
        this['float_ip'] = floatIp;
        return this;
    }
    public set floatIp(floatIp: string | undefined) {
        this['float_ip'] = floatIp;
    }
    public get floatIp() {
        return this['float_ip'];
    }
    public withRemainSeconds(remainSeconds: number): PutTaskReq {
        this['remain_seconds'] = remainSeconds;
        return this;
    }
    public set remainSeconds(remainSeconds: number | undefined) {
        this['remain_seconds'] = remainSeconds;
    }
    public get remainSeconds() {
        return this['remain_seconds'];
    }
    public withTargetSnapshotId(targetSnapshotId: string): PutTaskReq {
        this['target_snapshot_id'] = targetSnapshotId;
        return this;
    }
    public set targetSnapshotId(targetSnapshotId: string | undefined) {
        this['target_snapshot_id'] = targetSnapshotId;
    }
    public get targetSnapshotId() {
        return this['target_snapshot_id'];
    }
    public withCloneServer(cloneServer: CloneServer): PutTaskReq {
        this['clone_server'] = cloneServer;
        return this;
    }
    public set cloneServer(cloneServer: CloneServer | undefined) {
        this['clone_server'] = cloneServer;
    }
    public get cloneServer() {
        return this['clone_server'];
    }
    public withSubTasks(subTasks: Array<SubTask>): PutTaskReq {
        this['sub_tasks'] = subTasks;
        return this;
    }
    public set subTasks(subTasks: Array<SubTask> | undefined) {
        this['sub_tasks'] = subTasks;
    }
    public get subTasks() {
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
