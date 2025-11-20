

export class ListDbAgentJobHistoryStepsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'history_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, historyId?: string) { 
        this['instance_id'] = instanceId;
        this['history_id'] = historyId;
    }
    public withXLanguage(xLanguage: string): ListDbAgentJobHistoryStepsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListDbAgentJobHistoryStepsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withHistoryId(historyId: string): ListDbAgentJobHistoryStepsRequest {
        this['history_id'] = historyId;
        return this;
    }
    public set historyId(historyId: string  | undefined) {
        this['history_id'] = historyId;
    }
    public get historyId(): string | undefined {
        return this['history_id'];
    }
    public withOffset(offset: number): ListDbAgentJobHistoryStepsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDbAgentJobHistoryStepsRequest {
        this['limit'] = limit;
        return this;
    }
}