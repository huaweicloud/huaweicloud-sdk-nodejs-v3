

export class SubscriptionOperateReq {
    private 'subscription_ids'?: Array<string>;
    public operation?: SubscriptionOperateReqOperationEnum | string;
    public constructor() { 
    }
    public withSubscriptionIds(subscriptionIds: Array<string>): SubscriptionOperateReq {
        this['subscription_ids'] = subscriptionIds;
        return this;
    }
    public set subscriptionIds(subscriptionIds: Array<string>  | undefined) {
        this['subscription_ids'] = subscriptionIds;
    }
    public get subscriptionIds(): Array<string> | undefined {
        return this['subscription_ids'];
    }
    public withOperation(operation: SubscriptionOperateReqOperationEnum | string): SubscriptionOperateReq {
        this['operation'] = operation;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubscriptionOperateReqOperationEnum {
    DISABLE = 'DISABLE',
    ENABLE = 'ENABLE'
}
