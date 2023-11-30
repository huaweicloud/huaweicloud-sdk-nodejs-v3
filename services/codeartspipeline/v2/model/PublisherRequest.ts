

export class PublisherRequest {
    public name?: string;
    private 'user_id'?: string;
    public description?: string;
    private 'logo_url'?: string;
    public website?: string;
    private 'support_url'?: string;
    private 'source_url'?: string;
    private 'en_name'?: string;
    private 'publisher_unique_id'?: string;
    public constructor() { 
    }
    public withName(name: string): PublisherRequest {
        this['name'] = name;
        return this;
    }
    public withUserId(userId: string): PublisherRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withDescription(description: string): PublisherRequest {
        this['description'] = description;
        return this;
    }
    public withLogoUrl(logoUrl: string): PublisherRequest {
        this['logo_url'] = logoUrl;
        return this;
    }
    public set logoUrl(logoUrl: string  | undefined) {
        this['logo_url'] = logoUrl;
    }
    public get logoUrl(): string | undefined {
        return this['logo_url'];
    }
    public withWebsite(website: string): PublisherRequest {
        this['website'] = website;
        return this;
    }
    public withSupportUrl(supportUrl: string): PublisherRequest {
        this['support_url'] = supportUrl;
        return this;
    }
    public set supportUrl(supportUrl: string  | undefined) {
        this['support_url'] = supportUrl;
    }
    public get supportUrl(): string | undefined {
        return this['support_url'];
    }
    public withSourceUrl(sourceUrl: string): PublisherRequest {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withEnName(enName: string): PublisherRequest {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withPublisherUniqueId(publisherUniqueId: string): PublisherRequest {
        this['publisher_unique_id'] = publisherUniqueId;
        return this;
    }
    public set publisherUniqueId(publisherUniqueId: string  | undefined) {
        this['publisher_unique_id'] = publisherUniqueId;
    }
    public get publisherUniqueId(): string | undefined {
        return this['publisher_unique_id'];
    }
}