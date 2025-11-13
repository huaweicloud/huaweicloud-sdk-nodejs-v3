

export class ListSubscriptionsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'publication_id'?: string;
    private 'is_cloud'?: boolean;
    private 'publication_name'?: string;
    private 'subscription_db_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ListSubscriptionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSubscriptionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPublicationId(publicationId: string): ListSubscriptionsRequest {
        this['publication_id'] = publicationId;
        return this;
    }
    public set publicationId(publicationId: string  | undefined) {
        this['publication_id'] = publicationId;
    }
    public get publicationId(): string | undefined {
        return this['publication_id'];
    }
    public withIsCloud(isCloud: boolean): ListSubscriptionsRequest {
        this['is_cloud'] = isCloud;
        return this;
    }
    public set isCloud(isCloud: boolean  | undefined) {
        this['is_cloud'] = isCloud;
    }
    public get isCloud(): boolean | undefined {
        return this['is_cloud'];
    }
    public withPublicationName(publicationName: string): ListSubscriptionsRequest {
        this['publication_name'] = publicationName;
        return this;
    }
    public set publicationName(publicationName: string  | undefined) {
        this['publication_name'] = publicationName;
    }
    public get publicationName(): string | undefined {
        return this['publication_name'];
    }
    public withSubscriptionDbName(subscriptionDbName: string): ListSubscriptionsRequest {
        this['subscription_db_name'] = subscriptionDbName;
        return this;
    }
    public set subscriptionDbName(subscriptionDbName: string  | undefined) {
        this['subscription_db_name'] = subscriptionDbName;
    }
    public get subscriptionDbName(): string | undefined {
        return this['subscription_db_name'];
    }
    public withOffset(offset: number): ListSubscriptionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubscriptionsRequest {
        this['limit'] = limit;
        return this;
    }
}