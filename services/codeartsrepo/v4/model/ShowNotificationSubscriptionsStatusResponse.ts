import { RepoNotificationSubscriptionStateDto } from './RepoNotificationSubscriptionStateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNotificationSubscriptionsStatusResponse extends SdkResponse {
    private 'internal_message'?: RepoNotificationSubscriptionStateDto;
    public email?: RepoNotificationSubscriptionStateDto;
    public qyweixin?: RepoNotificationSubscriptionStateDto;
    public feishu?: RepoNotificationSubscriptionStateDto;
    public dingding?: RepoNotificationSubscriptionStateDto;
    public constructor() { 
        super();
    }
    public withInternalMessage(internalMessage: RepoNotificationSubscriptionStateDto): ShowNotificationSubscriptionsStatusResponse {
        this['internal_message'] = internalMessage;
        return this;
    }
    public set internalMessage(internalMessage: RepoNotificationSubscriptionStateDto  | undefined) {
        this['internal_message'] = internalMessage;
    }
    public get internalMessage(): RepoNotificationSubscriptionStateDto | undefined {
        return this['internal_message'];
    }
    public withEmail(email: RepoNotificationSubscriptionStateDto): ShowNotificationSubscriptionsStatusResponse {
        this['email'] = email;
        return this;
    }
    public withQyweixin(qyweixin: RepoNotificationSubscriptionStateDto): ShowNotificationSubscriptionsStatusResponse {
        this['qyweixin'] = qyweixin;
        return this;
    }
    public withFeishu(feishu: RepoNotificationSubscriptionStateDto): ShowNotificationSubscriptionsStatusResponse {
        this['feishu'] = feishu;
        return this;
    }
    public withDingding(dingding: RepoNotificationSubscriptionStateDto): ShowNotificationSubscriptionsStatusResponse {
        this['dingding'] = dingding;
        return this;
    }
}