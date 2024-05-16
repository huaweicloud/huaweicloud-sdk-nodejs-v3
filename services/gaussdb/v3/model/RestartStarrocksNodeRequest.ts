

export class RestartStarrocksNodeRequest {
    private 'starrocks_node_id'?: string;
    private 'starrocks_instance_id'?: string;
    private 'X-Language'?: string;
    public constructor(starrocksNodeId?: string, starrocksInstanceId?: string) { 
        this['starrocks_node_id'] = starrocksNodeId;
        this['starrocks_instance_id'] = starrocksInstanceId;
    }
    public withStarrocksNodeId(starrocksNodeId: string): RestartStarrocksNodeRequest {
        this['starrocks_node_id'] = starrocksNodeId;
        return this;
    }
    public set starrocksNodeId(starrocksNodeId: string  | undefined) {
        this['starrocks_node_id'] = starrocksNodeId;
    }
    public get starrocksNodeId(): string | undefined {
        return this['starrocks_node_id'];
    }
    public withStarrocksInstanceId(starrocksInstanceId: string): RestartStarrocksNodeRequest {
        this['starrocks_instance_id'] = starrocksInstanceId;
        return this;
    }
    public set starrocksInstanceId(starrocksInstanceId: string  | undefined) {
        this['starrocks_instance_id'] = starrocksInstanceId;
    }
    public get starrocksInstanceId(): string | undefined {
        return this['starrocks_instance_id'];
    }
    public withXLanguage(xLanguage: string): RestartStarrocksNodeRequest {
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