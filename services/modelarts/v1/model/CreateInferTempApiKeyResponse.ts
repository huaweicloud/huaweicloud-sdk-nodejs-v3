
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInferTempApiKeyResponse extends SdkResponse {
    private 'api_key'?: string;
    private 'expire_time'?: number;
    private 'create_time'?: number;
    public constructor() { 
        super();
    }
    public withApiKey(apiKey: string): CreateInferTempApiKeyResponse {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
    public withExpireTime(expireTime: number): CreateInferTempApiKeyResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withCreateTime(createTime: number): CreateInferTempApiKeyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}