

export class CreateRedislogRequest {
    private 'instance_id'?: string;
    private 'query_time'?: CreateRedislogRequestQueryTimeEnum | number;
    private 'log_type'?: string;
    private 'replication_id'?: string;
    public constructor(instanceId?: string, logType?: string) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
    }
    public withInstanceId(instanceId: string): CreateRedislogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withQueryTime(queryTime: CreateRedislogRequestQueryTimeEnum | number): CreateRedislogRequest {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: CreateRedislogRequestQueryTimeEnum | number  | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime(): CreateRedislogRequestQueryTimeEnum | number | undefined {
        return this['query_time'];
    }
    public withLogType(logType: string): CreateRedislogRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
    public withReplicationId(replicationId: string): CreateRedislogRequest {
        this['replication_id'] = replicationId;
        return this;
    }
    public set replicationId(replicationId: string  | undefined) {
        this['replication_id'] = replicationId;
    }
    public get replicationId(): string | undefined {
        return this['replication_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRedislogRequestQueryTimeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_3 = 3,
    NUMBER_7 = 7
}
