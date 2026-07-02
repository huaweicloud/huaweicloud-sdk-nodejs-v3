

export class ScheduledTaskV3 {
    private 'create_time'?: Date;
    private 'datastore_type'?: string;
    private 'end_time'?: Date;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    private 'project_id'?: string;
    private 'proxy_id'?: string;
    private 'proxy_name'?: string;
    private 'start_time'?: Date;
    private 'target_config'?: { [key: string]: string; };
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'task_order'?: number;
    private 'task_status'?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: Date): ScheduledTaskV3 {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withDatastoreType(datastoreType: string): ScheduledTaskV3 {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withEndTime(endTime: Date): ScheduledTaskV3 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withInstanceId(instanceId: string): ScheduledTaskV3 {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ScheduledTaskV3 {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): ScheduledTaskV3 {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withProjectId(projectId: string): ScheduledTaskV3 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProxyId(proxyId: string): ScheduledTaskV3 {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withProxyName(proxyName: string): ScheduledTaskV3 {
        this['proxy_name'] = proxyName;
        return this;
    }
    public set proxyName(proxyName: string  | undefined) {
        this['proxy_name'] = proxyName;
    }
    public get proxyName(): string | undefined {
        return this['proxy_name'];
    }
    public withStartTime(startTime: Date): ScheduledTaskV3 {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withTargetConfig(targetConfig: { [key: string]: string; }): ScheduledTaskV3 {
        this['target_config'] = targetConfig;
        return this;
    }
    public set targetConfig(targetConfig: { [key: string]: string; }  | undefined) {
        this['target_config'] = targetConfig;
    }
    public get targetConfig(): { [key: string]: string; } | undefined {
        return this['target_config'];
    }
    public withTaskId(taskId: string): ScheduledTaskV3 {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ScheduledTaskV3 {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskOrder(taskOrder: number): ScheduledTaskV3 {
        this['task_order'] = taskOrder;
        return this;
    }
    public set taskOrder(taskOrder: number  | undefined) {
        this['task_order'] = taskOrder;
    }
    public get taskOrder(): number | undefined {
        return this['task_order'];
    }
    public withTaskStatus(taskStatus: string): ScheduledTaskV3 {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
}