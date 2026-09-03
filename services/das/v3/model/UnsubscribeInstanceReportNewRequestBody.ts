

export class UnsubscribeInstanceReportNewRequestBody {
    private 'subscribe_id'?: string;
    public constructor(subscribeId?: string) { 
        this['subscribe_id'] = subscribeId;
    }
    public withSubscribeId(subscribeId: string): UnsubscribeInstanceReportNewRequestBody {
        this['subscribe_id'] = subscribeId;
        return this;
    }
    public set subscribeId(subscribeId: string  | undefined) {
        this['subscribe_id'] = subscribeId;
    }
    public get subscribeId(): string | undefined {
        return this['subscribe_id'];
    }
}