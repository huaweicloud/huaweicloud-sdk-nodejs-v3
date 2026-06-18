

export class InlineResponse2002OidcProviders {
    private 'provider_id'?: string;
    public name?: string;
    public description?: string;
    public url?: string;
    public urn?: string;
    private 'client_ids'?: Array<string>;
    public thumbprints?: Array<string>;
    private 'created_at'?: Date;
    public constructor(providerId?: string, name?: string, description?: string, url?: string, urn?: string, clientIds?: Array<string>, thumbprints?: Array<string>, createdAt?: Date) { 
        this['provider_id'] = providerId;
        this['name'] = name;
        this['description'] = description;
        this['url'] = url;
        this['urn'] = urn;
        this['client_ids'] = clientIds;
        this['thumbprints'] = thumbprints;
        this['created_at'] = createdAt;
    }
    public withProviderId(providerId: string): InlineResponse2002OidcProviders {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withName(name: string): InlineResponse2002OidcProviders {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InlineResponse2002OidcProviders {
        this['description'] = description;
        return this;
    }
    public withUrl(url: string): InlineResponse2002OidcProviders {
        this['url'] = url;
        return this;
    }
    public withUrn(urn: string): InlineResponse2002OidcProviders {
        this['urn'] = urn;
        return this;
    }
    public withClientIds(clientIds: Array<string>): InlineResponse2002OidcProviders {
        this['client_ids'] = clientIds;
        return this;
    }
    public set clientIds(clientIds: Array<string>  | undefined) {
        this['client_ids'] = clientIds;
    }
    public get clientIds(): Array<string> | undefined {
        return this['client_ids'];
    }
    public withThumbprints(thumbprints: Array<string>): InlineResponse2002OidcProviders {
        this['thumbprints'] = thumbprints;
        return this;
    }
    public withCreatedAt(createdAt: Date): InlineResponse2002OidcProviders {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}