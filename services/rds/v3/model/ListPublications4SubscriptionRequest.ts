import { ListPublications4SubscriptionRequestBody } from './ListPublications4SubscriptionRequestBody';


export class ListPublications4SubscriptionRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public body?: ListPublications4SubscriptionRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ListPublications4SubscriptionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListPublications4SubscriptionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListPublications4SubscriptionRequestBody): ListPublications4SubscriptionRequest {
        this['body'] = body;
        return this;
    }
}