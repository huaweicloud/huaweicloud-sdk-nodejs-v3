import { Tag } from './Tag';


export class UpdateApiKeyCredentialProviderReqBody {
    private 'api_key'?: string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withApiKey(apiKey: string): UpdateApiKeyCredentialProviderReqBody {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
    public withTags(tags: Array<Tag>): UpdateApiKeyCredentialProviderReqBody {
        this['tags'] = tags;
        return this;
    }
}