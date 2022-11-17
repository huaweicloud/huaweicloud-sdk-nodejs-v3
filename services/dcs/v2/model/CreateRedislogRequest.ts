

export class CreateRedislogRequest {
    private 'instance_id': string | undefined;
    private 'query_time'?: number | undefined;
    private 'log_type': string | undefined;
    private 'replication_id'?: string | undefined;
    public constructor(instanceId?: any, logType?: any) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
    }
    public withInstanceId(instanceId: string): CreateRedislogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withQueryTime(queryTime: number): CreateRedislogRequest {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: number | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime() {
        return this['query_time'];
    }
    public withLogType(logType: string): CreateRedislogRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string | undefined) {
        this['log_type'] = logType;
    }
    public get logType() {
        return this['log_type'];
    }
    public withReplicationId(replicationId: string): CreateRedislogRequest {
        this['replication_id'] = replicationId;
        return this;
    }
    public set replicationId(replicationId: string | undefined) {
        this['replication_id'] = replicationId;
    }
    public get replicationId() {
        return this['replication_id'];
    }
}