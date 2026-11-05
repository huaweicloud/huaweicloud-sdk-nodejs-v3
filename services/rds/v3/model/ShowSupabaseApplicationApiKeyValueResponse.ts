
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSupabaseApplicationApiKeyValueResponse extends SdkResponse {
    private 'api_key'?: string;
    public constructor() { 
        super();
    }
    public withApiKey(apiKey: string): ShowSupabaseApplicationApiKeyValueResponse {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
}