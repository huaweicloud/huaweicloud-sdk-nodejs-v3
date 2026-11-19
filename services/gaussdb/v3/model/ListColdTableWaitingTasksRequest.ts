

export class ListColdTableWaitingTasksRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ListColdTableWaitingTasksRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListColdTableWaitingTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListColdTableWaitingTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListColdTableWaitingTasksRequest {
        this['offset'] = offset;
        return this;
    }
}