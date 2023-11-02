import { CustomMetadata } from './CustomMetadata';
import { SchedulerInfo } from './SchedulerInfo';


export class MetadataCollectionTask {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'user_id'?: string;
    private 'create_time'?: string;
    private 'project_id'?: string;
    private 'dir_id'?: string;
    private 'schedule_config'?: SchedulerInfo;
    private 'parameter_config'?: Array<CustomMetadata>;
    private 'update_time'?: string;
    private 'user_name'?: string;
    public path?: string;
    private 'last_run_time'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'next_run_time'?: string;
    private 'duty_person'?: string;
    private 'update_type'?: string;
    private 'data_source_type'?: string;
    private 'task_config'?: object;
    private 'data_source_workspace_id'?: string;
    public constructor(name?: string, userId?: string, dirId?: string, scheduleConfig?: SchedulerInfo, dataSourceType?: string, taskConfig?: object) { 
        this['name'] = name;
        this['user_id'] = userId;
        this['dir_id'] = dirId;
        this['schedule_config'] = scheduleConfig;
        this['data_source_type'] = dataSourceType;
        this['task_config'] = taskConfig;
    }
    public withId(id: string): MetadataCollectionTask {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MetadataCollectionTask {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): MetadataCollectionTask {
        this['description'] = description;
        return this;
    }
    public withUserId(userId: string): MetadataCollectionTask {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withCreateTime(createTime: string): MetadataCollectionTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withProjectId(projectId: string): MetadataCollectionTask {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDirId(dirId: string): MetadataCollectionTask {
        this['dir_id'] = dirId;
        return this;
    }
    public set dirId(dirId: string  | undefined) {
        this['dir_id'] = dirId;
    }
    public get dirId(): string | undefined {
        return this['dir_id'];
    }
    public withScheduleConfig(scheduleConfig: SchedulerInfo): MetadataCollectionTask {
        this['schedule_config'] = scheduleConfig;
        return this;
    }
    public set scheduleConfig(scheduleConfig: SchedulerInfo  | undefined) {
        this['schedule_config'] = scheduleConfig;
    }
    public get scheduleConfig(): SchedulerInfo | undefined {
        return this['schedule_config'];
    }
    public withParameterConfig(parameterConfig: Array<CustomMetadata>): MetadataCollectionTask {
        this['parameter_config'] = parameterConfig;
        return this;
    }
    public set parameterConfig(parameterConfig: Array<CustomMetadata>  | undefined) {
        this['parameter_config'] = parameterConfig;
    }
    public get parameterConfig(): Array<CustomMetadata> | undefined {
        return this['parameter_config'];
    }
    public withUpdateTime(updateTime: string): MetadataCollectionTask {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withUserName(userName: string): MetadataCollectionTask {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPath(path: string): MetadataCollectionTask {
        this['path'] = path;
        return this;
    }
    public withLastRunTime(lastRunTime: string): MetadataCollectionTask {
        this['last_run_time'] = lastRunTime;
        return this;
    }
    public set lastRunTime(lastRunTime: string  | undefined) {
        this['last_run_time'] = lastRunTime;
    }
    public get lastRunTime(): string | undefined {
        return this['last_run_time'];
    }
    public withStartTime(startTime: string): MetadataCollectionTask {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): MetadataCollectionTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withNextRunTime(nextRunTime: string): MetadataCollectionTask {
        this['next_run_time'] = nextRunTime;
        return this;
    }
    public set nextRunTime(nextRunTime: string  | undefined) {
        this['next_run_time'] = nextRunTime;
    }
    public get nextRunTime(): string | undefined {
        return this['next_run_time'];
    }
    public withDutyPerson(dutyPerson: string): MetadataCollectionTask {
        this['duty_person'] = dutyPerson;
        return this;
    }
    public set dutyPerson(dutyPerson: string  | undefined) {
        this['duty_person'] = dutyPerson;
    }
    public get dutyPerson(): string | undefined {
        return this['duty_person'];
    }
    public withUpdateType(updateType: string): MetadataCollectionTask {
        this['update_type'] = updateType;
        return this;
    }
    public set updateType(updateType: string  | undefined) {
        this['update_type'] = updateType;
    }
    public get updateType(): string | undefined {
        return this['update_type'];
    }
    public withDataSourceType(dataSourceType: string): MetadataCollectionTask {
        this['data_source_type'] = dataSourceType;
        return this;
    }
    public set dataSourceType(dataSourceType: string  | undefined) {
        this['data_source_type'] = dataSourceType;
    }
    public get dataSourceType(): string | undefined {
        return this['data_source_type'];
    }
    public withTaskConfig(taskConfig: object): MetadataCollectionTask {
        this['task_config'] = taskConfig;
        return this;
    }
    public set taskConfig(taskConfig: object  | undefined) {
        this['task_config'] = taskConfig;
    }
    public get taskConfig(): object | undefined {
        return this['task_config'];
    }
    public withDataSourceWorkspaceId(dataSourceWorkspaceId: string): MetadataCollectionTask {
        this['data_source_workspace_id'] = dataSourceWorkspaceId;
        return this;
    }
    public set dataSourceWorkspaceId(dataSourceWorkspaceId: string  | undefined) {
        this['data_source_workspace_id'] = dataSourceWorkspaceId;
    }
    public get dataSourceWorkspaceId(): string | undefined {
        return this['data_source_workspace_id'];
    }
}