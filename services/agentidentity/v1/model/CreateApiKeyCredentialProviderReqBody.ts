import { Tag } from './Tag';


export class CreateApiKeyCredentialProviderReqBody {
    public name?: string;
    private 'api_key'?: string;
    public tags?: Array<Tag>;
    public constructor(name?: string, apiKey?: string) { 
        this['name'] = name;
        this['api_key'] = apiKey;
    }
    public withName(name: string): CreateApiKeyCredentialProviderReqBody {
        this['name'] = name;
        return this;
    }
    public withApiKey(apiKey: string): CreateApiKeyCredentialProviderReqBody {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
    public withTags(tags: Array<Tag>): CreateApiKeyCredentialProviderReqBody {
        this['tags'] = tags;
        return this;
    }
}