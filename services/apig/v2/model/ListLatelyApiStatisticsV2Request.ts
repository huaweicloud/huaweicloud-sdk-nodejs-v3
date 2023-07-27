

export class ListLatelyApiStatisticsV2Request {
    private 'instance_id'?: string;
    private 'api_id'?: string;
    public duration?: string;
    public constructor(instanceId?: string, apiId?: string, duration?: string) { 
        this['instance_id'] = instanceId;
        this['api_id'] = apiId;
        this['duration'] = duration;
    }
    public withInstanceId(instanceId: string): ListLatelyApiStatisticsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withApiId(apiId: string): ListLatelyApiStatisticsV2Request {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withDuration(duration: string): ListLatelyApiStatisticsV2Request {
        this['duration'] = duration;
        return this;
    }
}