

export class LogConfigResponse {
    public type?: string;
    public status?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'deployment_id'?: string;
    public constructor(type?: string, status?: string) { 
        this['type'] = type;
        this['status'] = status;
    }
    public withType(type: string): LogConfigResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): LogConfigResponse {
        this['status'] = status;
        return this;
    }
    public withLogGroupId(logGroupId: string): LogConfigResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): LogConfigResponse {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withDeploymentId(deploymentId: string): LogConfigResponse {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
}