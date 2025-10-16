

export class ListPublicationsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'publication_name'?: string;
    private 'publication_db_name'?: string;
    private 'subscriber_instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ListPublicationsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListPublicationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPublicationName(publicationName: string): ListPublicationsRequest {
        this['publication_name'] = publicationName;
        return this;
    }
    public set publicationName(publicationName: string  | undefined) {
        this['publication_name'] = publicationName;
    }
    public get publicationName(): string | undefined {
        return this['publication_name'];
    }
    public withPublicationDbName(publicationDbName: string): ListPublicationsRequest {
        this['publication_db_name'] = publicationDbName;
        return this;
    }
    public set publicationDbName(publicationDbName: string  | undefined) {
        this['publication_db_name'] = publicationDbName;
    }
    public get publicationDbName(): string | undefined {
        return this['publication_db_name'];
    }
    public withSubscriberInstanceId(subscriberInstanceId: string): ListPublicationsRequest {
        this['subscriber_instance_id'] = subscriberInstanceId;
        return this;
    }
    public set subscriberInstanceId(subscriberInstanceId: string  | undefined) {
        this['subscriber_instance_id'] = subscriberInstanceId;
    }
    public get subscriberInstanceId(): string | undefined {
        return this['subscriber_instance_id'];
    }
    public withOffset(offset: number): ListPublicationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPublicationsRequest {
        this['limit'] = limit;
        return this;
    }
}