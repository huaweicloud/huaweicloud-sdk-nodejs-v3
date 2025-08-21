

export class ShowNotificationSubscriptionRequest {
    private 'repository_id'?: number;
    public type?: ShowNotificationSubscriptionRequestTypeEnum | string;
    public constructor(repositoryId?: number, type?: string) { 
        this['repository_id'] = repositoryId;
        this['type'] = type;
    }
    public withRepositoryId(repositoryId: number): ShowNotificationSubscriptionRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withType(type: ShowNotificationSubscriptionRequestTypeEnum | string): ShowNotificationSubscriptionRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowNotificationSubscriptionRequestTypeEnum {
    INTERNAL_MESSAGE = 'internal_message',
    EMAIL = 'email',
    QYWEIXIN = 'qyweixin',
    FEISHU = 'feishu',
    DINGDING = 'dingding'
}
