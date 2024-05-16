

export class ListStarrocksInstanceInfoRequest {
    private 'instance_id'?: string;
    private 'starrocks_instance_id'?: string;
    private 'X-Language'?: string;
    public constructor(instanceId?: string, starrocksInstanceId?: string) { 
        this['instance_id'] = instanceId;
        this['starrocks_instance_id'] = starrocksInstanceId;
    }
    public withInstanceId(instanceId: string): ListStarrocksInstanceInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStarrocksInstanceId(starrocksInstanceId: string): ListStarrocksInstanceInfoRequest {
        this['starrocks_instance_id'] = starrocksInstanceId;
        return this;
    }
    public set starrocksInstanceId(starrocksInstanceId: string  | undefined) {
        this['starrocks_instance_id'] = starrocksInstanceId;
    }
    public get starrocksInstanceId(): string | undefined {
        return this['starrocks_instance_id'];
    }
    public withXLanguage(xLanguage: string): ListStarrocksInstanceInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}