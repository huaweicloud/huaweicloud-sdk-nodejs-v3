

export class SubscriptionOperateRespEvents {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'subscription_id'?: string;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): SubscriptionOperateRespEvents {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): SubscriptionOperateRespEvents {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withSubscriptionId(subscriptionId: string): SubscriptionOperateRespEvents {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
}