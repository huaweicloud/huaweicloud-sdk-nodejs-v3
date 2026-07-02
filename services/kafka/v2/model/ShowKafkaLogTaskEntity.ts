

export class ShowKafkaLogTaskEntity {
    public id?: string;
    private 'instance_id'?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'dashboard_id'?: string;
    public status?: string;
    private 'log_type'?: string;
    private 'log_file_name'?: string;
    private 'created_at'?: number;
    private 'updated_at'?: number;
    public constructor() { 
    }
    public withId(id: string): ShowKafkaLogTaskEntity {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ShowKafkaLogTaskEntity {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogGroupId(logGroupId: string): ShowKafkaLogTaskEntity {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ShowKafkaLogTaskEntity {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withDashboardId(dashboardId: string): ShowKafkaLogTaskEntity {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withStatus(status: string): ShowKafkaLogTaskEntity {
        this['status'] = status;
        return this;
    }
    public withLogType(logType: string): ShowKafkaLogTaskEntity {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
    public withLogFileName(logFileName: string): ShowKafkaLogTaskEntity {
        this['log_file_name'] = logFileName;
        return this;
    }
    public set logFileName(logFileName: string  | undefined) {
        this['log_file_name'] = logFileName;
    }
    public get logFileName(): string | undefined {
        return this['log_file_name'];
    }
    public withCreatedAt(createdAt: number): ShowKafkaLogTaskEntity {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: number): ShowKafkaLogTaskEntity {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
}