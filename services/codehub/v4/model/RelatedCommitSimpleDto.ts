

export class RelatedCommitSimpleDto {
    private 'related_id'?: string;
    private 'related_url'?: string;
    public constructor() { 
    }
    public withRelatedId(relatedId: string): RelatedCommitSimpleDto {
        this['related_id'] = relatedId;
        return this;
    }
    public set relatedId(relatedId: string  | undefined) {
        this['related_id'] = relatedId;
    }
    public get relatedId(): string | undefined {
        return this['related_id'];
    }
    public withRelatedUrl(relatedUrl: string): RelatedCommitSimpleDto {
        this['related_url'] = relatedUrl;
        return this;
    }
    public set relatedUrl(relatedUrl: string  | undefined) {
        this['related_url'] = relatedUrl;
    }
    public get relatedUrl(): string | undefined {
        return this['related_url'];
    }
}