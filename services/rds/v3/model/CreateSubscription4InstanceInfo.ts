

export class CreateSubscription4InstanceInfo {
    private 'publication_id'?: string;
    private 'publication_name'?: string;
    public constructor(publicationId?: string) { 
        this['publication_id'] = publicationId;
    }
    public withPublicationId(publicationId: string): CreateSubscription4InstanceInfo {
        this['publication_id'] = publicationId;
        return this;
    }
    public set publicationId(publicationId: string  | undefined) {
        this['publication_id'] = publicationId;
    }
    public get publicationId(): string | undefined {
        return this['publication_id'];
    }
    public withPublicationName(publicationName: string): CreateSubscription4InstanceInfo {
        this['publication_name'] = publicationName;
        return this;
    }
    public set publicationName(publicationName: string  | undefined) {
        this['publication_name'] = publicationName;
    }
    public get publicationName(): string | undefined {
        return this['publication_name'];
    }
}