

export class WorkflowAsset {
    public name?: string;
    public type?: string;
    private 'content_id'?: string;
    private 'subscription_id'?: string;
    private 'expired_at'?: string;
    public constructor() { 
    }
    public withName(name: string): WorkflowAsset {
        this['name'] = name;
        return this;
    }
    public withType(type: string): WorkflowAsset {
        this['type'] = type;
        return this;
    }
    public withContentId(contentId: string): WorkflowAsset {
        this['content_id'] = contentId;
        return this;
    }
    public set contentId(contentId: string  | undefined) {
        this['content_id'] = contentId;
    }
    public get contentId(): string | undefined {
        return this['content_id'];
    }
    public withSubscriptionId(subscriptionId: string): WorkflowAsset {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withExpiredAt(expiredAt: string): WorkflowAsset {
        this['expired_at'] = expiredAt;
        return this;
    }
    public set expiredAt(expiredAt: string  | undefined) {
        this['expired_at'] = expiredAt;
    }
    public get expiredAt(): string | undefined {
        return this['expired_at'];
    }
}