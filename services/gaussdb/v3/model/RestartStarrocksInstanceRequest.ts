

export class RestartStarrocksInstanceRequest {
    private 'starrocks_instance_id'?: string;
    private 'X-Language'?: string;
    public constructor(starrocksInstanceId?: string) { 
        this['starrocks_instance_id'] = starrocksInstanceId;
    }
    public withStarrocksInstanceId(starrocksInstanceId: string): RestartStarrocksInstanceRequest {
        this['starrocks_instance_id'] = starrocksInstanceId;
        return this;
    }
    public set starrocksInstanceId(starrocksInstanceId: string  | undefined) {
        this['starrocks_instance_id'] = starrocksInstanceId;
    }
    public get starrocksInstanceId(): string | undefined {
        return this['starrocks_instance_id'];
    }
    public withXLanguage(xLanguage: string): RestartStarrocksInstanceRequest {
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