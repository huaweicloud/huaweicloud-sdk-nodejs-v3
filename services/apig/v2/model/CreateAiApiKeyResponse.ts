import { AiApiKeyCreate } from './AiApiKeyCreate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAiApiKeyResponse extends SdkResponse {
    private 'ai_api_key'?: string;
    public alias?: string;
    private 'app_id'?: string;
    private 'create_time'?: Date;
    public id?: string;
    public constructor() { 
        super();
    }
    public withAiApiKey(aiApiKey: string): CreateAiApiKeyResponse {
        this['ai_api_key'] = aiApiKey;
        return this;
    }
    public set aiApiKey(aiApiKey: string  | undefined) {
        this['ai_api_key'] = aiApiKey;
    }
    public get aiApiKey(): string | undefined {
        return this['ai_api_key'];
    }
    public withAlias(alias: string): CreateAiApiKeyResponse {
        this['alias'] = alias;
        return this;
    }
    public withAppId(appId: string): CreateAiApiKeyResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withCreateTime(createTime: Date): CreateAiApiKeyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withId(id: string): CreateAiApiKeyResponse {
        this['id'] = id;
        return this;
    }
}