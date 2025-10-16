import { ReplicationUserInfo } from './ReplicationUserInfo';


export class CreateSubscription4PublicationInfo {
    private 'subscription_instance_id'?: string;
    private 'user_info'?: ReplicationUserInfo;
    public constructor(subscriptionInstanceId?: string) { 
        this['subscription_instance_id'] = subscriptionInstanceId;
    }
    public withSubscriptionInstanceId(subscriptionInstanceId: string): CreateSubscription4PublicationInfo {
        this['subscription_instance_id'] = subscriptionInstanceId;
        return this;
    }
    public set subscriptionInstanceId(subscriptionInstanceId: string  | undefined) {
        this['subscription_instance_id'] = subscriptionInstanceId;
    }
    public get subscriptionInstanceId(): string | undefined {
        return this['subscription_instance_id'];
    }
    public withUserInfo(userInfo: ReplicationUserInfo): CreateSubscription4PublicationInfo {
        this['user_info'] = userInfo;
        return this;
    }
    public set userInfo(userInfo: ReplicationUserInfo  | undefined) {
        this['user_info'] = userInfo;
    }
    public get userInfo(): ReplicationUserInfo | undefined {
        return this['user_info'];
    }
}