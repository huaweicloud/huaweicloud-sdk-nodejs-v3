import { CloneServer } from './CloneServer';
import { NetworkCheckInfoRequestBody } from './NetworkCheckInfoRequestBody';
import { SourceServerResponse } from './SourceServerResponse';
import { SubTask } from './SubTask';
import { TaskTargetServer } from './TaskTargetServer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskResponse extends SdkResponse {
    public name?: string;
    public type?: ShowTaskResponseTypeEnum | string;
    private 'os_type'?: ShowTaskResponseOsTypeEnum | string;
    public id?: string;
    public priority?: ShowTaskResponsePriorityEnum | number;
    private 'speed_limit'?: number;
    private 'region_id'?: string;
    private 'start_target_server'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'migration_ip'?: string;
    private 'region_name'?: string;
    private 'project_name'?: string;
    private 'project_id'?: string;
    private 'vm_template_id'?: string;
    private 'source_server'?: SourceServerResponse;
    private 'target_server'?: TaskTargetServer;
    public state?: string;
    private 'estimate_complete_time'?: number;
    public connected?: boolean;
    private 'create_date'?: number;
    private 'start_date'?: number;
    private 'finish_date'?: number;
    private 'migrate_speed'?: number;
    private 'compress_rate'?: number;
    private 'error_json'?: string;
    private 'total_time'?: number;
    private 'float_ip'?: string;
    private 'remain_seconds'?: number;
    private 'target_snapshot_id'?: string;
    private 'clone_server'?: CloneServer;
    private 'sub_tasks'?: Array<SubTask>;
    private 'network_check_info'?: NetworkCheckInfoRequestBody;
    private 'total_cpu_usage'?: number;
    private 'agent_cpu_usage'?: number;
    private 'total_mem_usage'?: number;
    private 'agent_mem_usage'?: number;
    private 'total_disk_io'?: number;
    private 'agent_disk_io'?: number;
    private 'need_migration_test'?: boolean;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowTaskResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: ShowTaskResponseTypeEnum | string): ShowTaskResponse {
        this['type'] = type;
        return this;
    }
    public withOsType(osType: ShowTaskResponseOsTypeEnum | string): ShowTaskResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: ShowTaskResponseOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): ShowTaskResponseOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withId(id: string): ShowTaskResponse {
        this['id'] = id;
        return this;
    }
    public withPriority(priority: ShowTaskResponsePriorityEnum | number): ShowTaskResponse {
        this['priority'] = priority;
        return this;
    }
    public withSpeedLimit(speedLimit: number): ShowTaskResponse {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number  | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit(): number | undefined {
        return this['speed_limit'];
    }
    public withRegionId(regionId: string): ShowTaskResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withStartTargetServer(startTargetServer: boolean): ShowTaskResponse {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean  | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer(): boolean | undefined {
        return this['start_target_server'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowTaskResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withMigrationIp(migrationIp: string): ShowTaskResponse {
        this['migration_ip'] = migrationIp;
        return this;
    }
    public set migrationIp(migrationIp: string  | undefined) {
        this['migration_ip'] = migrationIp;
    }
    public get migrationIp(): string | undefined {
        return this['migration_ip'];
    }
    public withRegionName(regionName: string): ShowTaskResponse {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withProjectName(projectName: string): ShowTaskResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withProjectId(projectId: string): ShowTaskResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVmTemplateId(vmTemplateId: string): ShowTaskResponse {
        this['vm_template_id'] = vmTemplateId;
        return this;
    }
    public set vmTemplateId(vmTemplateId: string  | undefined) {
        this['vm_template_id'] = vmTemplateId;
    }
    public get vmTemplateId(): string | undefined {
        return this['vm_template_id'];
    }
    public withSourceServer(sourceServer: SourceServerResponse): ShowTaskResponse {
        this['source_server'] = sourceServer;
        return this;
    }
    public set sourceServer(sourceServer: SourceServerResponse  | undefined) {
        this['source_server'] = sourceServer;
    }
    public get sourceServer(): SourceServerResponse | undefined {
        return this['source_server'];
    }
    public withTargetServer(targetServer: TaskTargetServer): ShowTaskResponse {
        this['target_server'] = targetServer;
        return this;
    }
    public set targetServer(targetServer: TaskTargetServer  | undefined) {
        this['target_server'] = targetServer;
    }
    public get targetServer(): TaskTargetServer | undefined {
        return this['target_server'];
    }
    public withState(state: string): ShowTaskResponse {
        this['state'] = state;
        return this;
    }
    public withEstimateCompleteTime(estimateCompleteTime: number): ShowTaskResponse {
        this['estimate_complete_time'] = estimateCompleteTime;
        return this;
    }
    public set estimateCompleteTime(estimateCompleteTime: number  | undefined) {
        this['estimate_complete_time'] = estimateCompleteTime;
    }
    public get estimateCompleteTime(): number | undefined {
        return this['estimate_complete_time'];
    }
    public withConnected(connected: boolean): ShowTaskResponse {
        this['connected'] = connected;
        return this;
    }
    public withCreateDate(createDate: number): ShowTaskResponse {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: number  | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate(): number | undefined {
        return this['create_date'];
    }
    public withStartDate(startDate: number): ShowTaskResponse {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): number | undefined {
        return this['start_date'];
    }
    public withFinishDate(finishDate: number): ShowTaskResponse {
        this['finish_date'] = finishDate;
        return this;
    }
    public set finishDate(finishDate: number  | undefined) {
        this['finish_date'] = finishDate;
    }
    public get finishDate(): number | undefined {
        return this['finish_date'];
    }
    public withMigrateSpeed(migrateSpeed: number): ShowTaskResponse {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number  | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed(): number | undefined {
        return this['migrate_speed'];
    }
    public withCompressRate(compressRate: number): ShowTaskResponse {
        this['compress_rate'] = compressRate;
        return this;
    }
    public set compressRate(compressRate: number  | undefined) {
        this['compress_rate'] = compressRate;
    }
    public get compressRate(): number | undefined {
        return this['compress_rate'];
    }
    public withErrorJson(errorJson: string): ShowTaskResponse {
        this['error_json'] = errorJson;
        return this;
    }
    public set errorJson(errorJson: string  | undefined) {
        this['error_json'] = errorJson;
    }
    public get errorJson(): string | undefined {
        return this['error_json'];
    }
    public withTotalTime(totalTime: number): ShowTaskResponse {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number  | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime(): number | undefined {
        return this['total_time'];
    }
    public withFloatIp(floatIp: string): ShowTaskResponse {
        this['float_ip'] = floatIp;
        return this;
    }
    public set floatIp(floatIp: string  | undefined) {
        this['float_ip'] = floatIp;
    }
    public get floatIp(): string | undefined {
        return this['float_ip'];
    }
    public withRemainSeconds(remainSeconds: number): ShowTaskResponse {
        this['remain_seconds'] = remainSeconds;
        return this;
    }
    public set remainSeconds(remainSeconds: number  | undefined) {
        this['remain_seconds'] = remainSeconds;
    }
    public get remainSeconds(): number | undefined {
        return this['remain_seconds'];
    }
    public withTargetSnapshotId(targetSnapshotId: string): ShowTaskResponse {
        this['target_snapshot_id'] = targetSnapshotId;
        return this;
    }
    public set targetSnapshotId(targetSnapshotId: string  | undefined) {
        this['target_snapshot_id'] = targetSnapshotId;
    }
    public get targetSnapshotId(): string | undefined {
        return this['target_snapshot_id'];
    }
    public withCloneServer(cloneServer: CloneServer): ShowTaskResponse {
        this['clone_server'] = cloneServer;
        return this;
    }
    public set cloneServer(cloneServer: CloneServer  | undefined) {
        this['clone_server'] = cloneServer;
    }
    public get cloneServer(): CloneServer | undefined {
        return this['clone_server'];
    }
    public withSubTasks(subTasks: Array<SubTask>): ShowTaskResponse {
        this['sub_tasks'] = subTasks;
        return this;
    }
    public set subTasks(subTasks: Array<SubTask>  | undefined) {
        this['sub_tasks'] = subTasks;
    }
    public get subTasks(): Array<SubTask> | undefined {
        return this['sub_tasks'];
    }
    public withNetworkCheckInfo(networkCheckInfo: NetworkCheckInfoRequestBody): ShowTaskResponse {
        this['network_check_info'] = networkCheckInfo;
        return this;
    }
    public set networkCheckInfo(networkCheckInfo: NetworkCheckInfoRequestBody  | undefined) {
        this['network_check_info'] = networkCheckInfo;
    }
    public get networkCheckInfo(): NetworkCheckInfoRequestBody | undefined {
        return this['network_check_info'];
    }
    public withTotalCpuUsage(totalCpuUsage: number): ShowTaskResponse {
        this['total_cpu_usage'] = totalCpuUsage;
        return this;
    }
    public set totalCpuUsage(totalCpuUsage: number  | undefined) {
        this['total_cpu_usage'] = totalCpuUsage;
    }
    public get totalCpuUsage(): number | undefined {
        return this['total_cpu_usage'];
    }
    public withAgentCpuUsage(agentCpuUsage: number): ShowTaskResponse {
        this['agent_cpu_usage'] = agentCpuUsage;
        return this;
    }
    public set agentCpuUsage(agentCpuUsage: number  | undefined) {
        this['agent_cpu_usage'] = agentCpuUsage;
    }
    public get agentCpuUsage(): number | undefined {
        return this['agent_cpu_usage'];
    }
    public withTotalMemUsage(totalMemUsage: number): ShowTaskResponse {
        this['total_mem_usage'] = totalMemUsage;
        return this;
    }
    public set totalMemUsage(totalMemUsage: number  | undefined) {
        this['total_mem_usage'] = totalMemUsage;
    }
    public get totalMemUsage(): number | undefined {
        return this['total_mem_usage'];
    }
    public withAgentMemUsage(agentMemUsage: number): ShowTaskResponse {
        this['agent_mem_usage'] = agentMemUsage;
        return this;
    }
    public set agentMemUsage(agentMemUsage: number  | undefined) {
        this['agent_mem_usage'] = agentMemUsage;
    }
    public get agentMemUsage(): number | undefined {
        return this['agent_mem_usage'];
    }
    public withTotalDiskIo(totalDiskIo: number): ShowTaskResponse {
        this['total_disk_io'] = totalDiskIo;
        return this;
    }
    public set totalDiskIo(totalDiskIo: number  | undefined) {
        this['total_disk_io'] = totalDiskIo;
    }
    public get totalDiskIo(): number | undefined {
        return this['total_disk_io'];
    }
    public withAgentDiskIo(agentDiskIo: number): ShowTaskResponse {
        this['agent_disk_io'] = agentDiskIo;
        return this;
    }
    public set agentDiskIo(agentDiskIo: number  | undefined) {
        this['agent_disk_io'] = agentDiskIo;
    }
    public get agentDiskIo(): number | undefined {
        return this['agent_disk_io'];
    }
    public withNeedMigrationTest(needMigrationTest: boolean): ShowTaskResponse {
        this['need_migration_test'] = needMigrationTest;
        return this;
    }
    public set needMigrationTest(needMigrationTest: boolean  | undefined) {
        this['need_migration_test'] = needMigrationTest;
    }
    public get needMigrationTest(): boolean | undefined {
        return this['need_migration_test'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTaskResponseTypeEnum {
    MIGRATE_FILE = 'MIGRATE_FILE',
    MIGRATE_BLOCK = 'MIGRATE_BLOCK'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTaskResponseOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTaskResponsePriorityEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
