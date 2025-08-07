import { TargetConfig } from './TargetConfig';


export class ScheduleTaskInfo {
    public id?: string;
    public name?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    private 'project_id'?: string;
    private 'create_time'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public order?: string;
    public status?: string;
    private 'datastore_type'?: string;
    private 'volume_type'?: string;
    private 'target_config'?: TargetConfig;
    public constructor() { 
    }
    public withId(id: string): ScheduleTaskInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScheduleTaskInfo {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): ScheduleTaskInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ScheduleTaskInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): ScheduleTaskInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withProjectId(projectId: string): ScheduleTaskInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateTime(createTime: string): ScheduleTaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): ScheduleTaskInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ScheduleTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOrder(order: string): ScheduleTaskInfo {
        this['order'] = order;
        return this;
    }
    public withStatus(status: string): ScheduleTaskInfo {
        this['status'] = status;
        return this;
    }
    public withDatastoreType(datastoreType: string): ScheduleTaskInfo {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withVolumeType(volumeType: string): ScheduleTaskInfo {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withTargetConfig(targetConfig: TargetConfig): ScheduleTaskInfo {
        this['target_config'] = targetConfig;
        return this;
    }
    public set targetConfig(targetConfig: TargetConfig  | undefined) {
        this['target_config'] = targetConfig;
    }
    public get targetConfig(): TargetConfig | undefined {
        return this['target_config'];
    }
}