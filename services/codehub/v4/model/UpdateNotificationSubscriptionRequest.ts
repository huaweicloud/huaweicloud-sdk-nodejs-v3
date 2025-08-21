import { UpdateRepoNotificationSubscriptionDto } from './UpdateRepoNotificationSubscriptionDto';


export class UpdateNotificationSubscriptionRequest {
    private 'repository_id'?: number;
    public type?: UpdateNotificationSubscriptionRequestTypeEnum | string;
    public body?: UpdateRepoNotificationSubscriptionDto;
    public constructor(repositoryId?: number, type?: string) { 
        this['repository_id'] = repositoryId;
        this['type'] = type;
    }
    public withRepositoryId(repositoryId: number): UpdateNotificationSubscriptionRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withType(type: UpdateNotificationSubscriptionRequestTypeEnum | string): UpdateNotificationSubscriptionRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: UpdateRepoNotificationSubscriptionDto): UpdateNotificationSubscriptionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNotificationSubscriptionRequestTypeEnum {
    INTERNAL_MESSAGE = 'internal_message',
    EMAIL = 'email',
    QYWEIXIN = 'qyweixin',
    FEISHU = 'feishu',
    DINGDING = 'dingding'
}
