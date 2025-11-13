

export class ListPublications4SubscriptionRequestBody {
    private 'publication_instance_id'?: string;
    private 'publication_instance_name'?: string;
    private 'publication_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withPublicationInstanceId(publicationInstanceId: string): ListPublications4SubscriptionRequestBody {
        this['publication_instance_id'] = publicationInstanceId;
        return this;
    }
    public set publicationInstanceId(publicationInstanceId: string  | undefined) {
        this['publication_instance_id'] = publicationInstanceId;
    }
    public get publicationInstanceId(): string | undefined {
        return this['publication_instance_id'];
    }
    public withPublicationInstanceName(publicationInstanceName: string): ListPublications4SubscriptionRequestBody {
        this['publication_instance_name'] = publicationInstanceName;
        return this;
    }
    public set publicationInstanceName(publicationInstanceName: string  | undefined) {
        this['publication_instance_name'] = publicationInstanceName;
    }
    public get publicationInstanceName(): string | undefined {
        return this['publication_instance_name'];
    }
    public withPublicationName(publicationName: string): ListPublications4SubscriptionRequestBody {
        this['publication_name'] = publicationName;
        return this;
    }
    public set publicationName(publicationName: string  | undefined) {
        this['publication_name'] = publicationName;
    }
    public get publicationName(): string | undefined {
        return this['publication_name'];
    }
    public withOffset(offset: number): ListPublications4SubscriptionRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPublications4SubscriptionRequestBody {
        this['limit'] = limit;
        return this;
    }
}