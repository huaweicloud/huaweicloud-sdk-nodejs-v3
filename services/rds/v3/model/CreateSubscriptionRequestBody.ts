import { CreateSubscriptionInfo } from './CreateSubscriptionInfo';


export class CreateSubscriptionRequestBody {
    public subscriptions?: Array<CreateSubscriptionInfo>;
    private 'current_publication_id'?: string;
    public constructor(subscriptions?: Array<CreateSubscriptionInfo>) { 
        this['subscriptions'] = subscriptions;
    }
    public withSubscriptions(subscriptions: Array<CreateSubscriptionInfo>): CreateSubscriptionRequestBody {
        this['subscriptions'] = subscriptions;
        return this;
    }
    public withCurrentPublicationId(currentPublicationId: string): CreateSubscriptionRequestBody {
        this['current_publication_id'] = currentPublicationId;
        return this;
    }
    public set currentPublicationId(currentPublicationId: string  | undefined) {
        this['current_publication_id'] = currentPublicationId;
    }
    public get currentPublicationId(): string | undefined {
        return this['current_publication_id'];
    }
}