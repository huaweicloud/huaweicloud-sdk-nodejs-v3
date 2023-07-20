

export class ListRedislogRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'log_type'?: string;
    public constructor(instanceId?: string, logType?: string) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
    }
    public withInstanceId(instanceId: string): ListRedislogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListRedislogRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRedislogRequest {
        this['limit'] = limit;
        return this;
    }
    public withLogType(logType: string): ListRedislogRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
}