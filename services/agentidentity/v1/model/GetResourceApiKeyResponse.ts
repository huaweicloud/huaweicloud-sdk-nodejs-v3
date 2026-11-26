
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetResourceApiKeyResponse extends SdkResponse {
    private 'api_key'?: string;
    public constructor() { 
        super();
    }
    public withApiKey(apiKey: string): GetResourceApiKeyResponse {
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