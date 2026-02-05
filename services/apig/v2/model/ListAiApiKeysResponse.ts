import { AiApiKeyBaseInfo } from './AiApiKeyBaseInfo';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiApiKeysResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    private 'ai_api_keys'?: Array<AiApiKeyBaseInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListAiApiKeysResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAiApiKeysResponse {
        this['total'] = total;
        return this;
    }
    public withAiApiKeys(aiApiKeys: Array<AiApiKeyBaseInfo>): ListAiApiKeysResponse {
        this['ai_api_keys'] = aiApiKeys;
        return this;
    }
    public set aiApiKeys(aiApiKeys: Array<AiApiKeyBaseInfo>  | undefined) {
        this['ai_api_keys'] = aiApiKeys;
    }
    public get aiApiKeys(): Array<AiApiKeyBaseInfo> | undefined {
        return this['ai_api_keys'];
    }
}