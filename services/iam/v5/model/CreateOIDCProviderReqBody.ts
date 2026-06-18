

export class CreateOIDCProviderReqBody {
    public url?: string;
    public name?: string;
    private 'client_ids'?: Array<string>;
    public thumbprints?: Array<string>;
    public description?: string;
    public constructor(url?: string, name?: string, clientIds?: Array<string>) { 
        this['url'] = url;
        this['name'] = name;
        this['client_ids'] = clientIds;
    }
    public withUrl(url: string): CreateOIDCProviderReqBody {
        this['url'] = url;
        return this;
    }
    public withName(name: string): CreateOIDCProviderReqBody {
        this['name'] = name;
        return this;
    }
    public withClientIds(clientIds: Array<string>): CreateOIDCProviderReqBody {
        this['client_ids'] = clientIds;
        return this;
    }
    public set clientIds(clientIds: Array<string>  | undefined) {
        this['client_ids'] = clientIds;
    }
    public get clientIds(): Array<string> | undefined {
        return this['client_ids'];
    }
    public withThumbprints(thumbprints: Array<string>): CreateOIDCProviderReqBody {
        this['thumbprints'] = thumbprints;
        return this;
    }
    public withDescription(description: string): CreateOIDCProviderReqBody {
        this['description'] = description;
        return this;
    }
}