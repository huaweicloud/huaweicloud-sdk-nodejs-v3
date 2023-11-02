

export class ShowConfigHistoryDetailRequest {
    private 'instance_id'?: string;
    private 'history_id'?: string;
    public constructor(instanceId?: string, historyId?: string) { 
        this['instance_id'] = instanceId;
        this['history_id'] = historyId;
    }
    public withInstanceId(instanceId: string): ShowConfigHistoryDetailRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withHistoryId(historyId: string): ShowConfigHistoryDetailRequest {
        this['history_id'] = historyId;
        return this;
    }
    public set historyId(historyId: string  | undefined) {
        this['history_id'] = historyId;
    }
    public get historyId(): string | undefined {
        return this['history_id'];
    }
}