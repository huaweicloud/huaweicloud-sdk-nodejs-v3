

export class ListQueuesRequest {
    private 'queue_type'?: string;
    public tags?: string;
    private 'with-charge-info'?: boolean;
    private 'with-priv'?: boolean;
    public constructor() { 
    }
    public withQueueType(queueType: string): ListQueuesRequest {
        this['queue_type'] = queueType;
        return this;
    }
    public set queueType(queueType: string  | undefined) {
        this['queue_type'] = queueType;
    }
    public get queueType(): string | undefined {
        return this['queue_type'];
    }
    public withTags(tags: string): ListQueuesRequest {
        this['tags'] = tags;
        return this;
    }
    public withWithChargeInfo(withChargeInfo: boolean): ListQueuesRequest {
        this['with-charge-info'] = withChargeInfo;
        return this;
    }
    public set withChargeInfo(withChargeInfo: boolean  | undefined) {
        this['with-charge-info'] = withChargeInfo;
    }
    public get withChargeInfo(): boolean | undefined {
        return this['with-charge-info'];
    }
    public withWithPriv(withPriv: boolean): ListQueuesRequest {
        this['with-priv'] = withPriv;
        return this;
    }
    public set withPriv(withPriv: boolean  | undefined) {
        this['with-priv'] = withPriv;
    }
    public get withPriv(): boolean | undefined {
        return this['with-priv'];
    }
}