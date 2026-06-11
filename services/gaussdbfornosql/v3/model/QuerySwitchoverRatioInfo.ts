

export class QuerySwitchoverRatioInfo {
    private 'instance_id'?: string;
    private 'switchover_ratio'?: number;
    private 'sync_delay'?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): QuerySwitchoverRatioInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSwitchoverRatio(switchoverRatio: number): QuerySwitchoverRatioInfo {
        this['switchover_ratio'] = switchoverRatio;
        return this;
    }
    public set switchoverRatio(switchoverRatio: number  | undefined) {
        this['switchover_ratio'] = switchoverRatio;
    }
    public get switchoverRatio(): number | undefined {
        return this['switchover_ratio'];
    }
    public withSyncDelay(syncDelay: number): QuerySwitchoverRatioInfo {
        this['sync_delay'] = syncDelay;
        return this;
    }
    public set syncDelay(syncDelay: number  | undefined) {
        this['sync_delay'] = syncDelay;
    }
    public get syncDelay(): number | undefined {
        return this['sync_delay'];
    }
}