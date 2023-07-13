

export class ListRedislogRequest {
    private 'instance_id': string | undefined;
    public offset?: number;
    public limit?: number;
    private 'log_type': string | undefined;
    public constructor(instanceId?: any, logType?: any) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
    }
    public withInstanceId(instanceId: string): ListRedislogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
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
    public set logType(logType: string | undefined) {
        this['log_type'] = logType;
    }
    public get logType() {
        return this['log_type'];
    }
}