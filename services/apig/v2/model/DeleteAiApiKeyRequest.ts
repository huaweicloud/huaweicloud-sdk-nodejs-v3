

export class DeleteAiApiKeyRequest {
    private 'instance_id'?: string;
    private 'app_id'?: string;
    private 'ai_api_key_id'?: string;
    public constructor(instanceId?: string, appId?: string, aiApiKeyId?: string) { 
        this['instance_id'] = instanceId;
        this['app_id'] = appId;
        this['ai_api_key_id'] = aiApiKeyId;
    }
    public withInstanceId(instanceId: string): DeleteAiApiKeyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppId(appId: string): DeleteAiApiKeyRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAiApiKeyId(aiApiKeyId: string): DeleteAiApiKeyRequest {
        this['ai_api_key_id'] = aiApiKeyId;
        return this;
    }
    public set aiApiKeyId(aiApiKeyId: string  | undefined) {
        this['ai_api_key_id'] = aiApiKeyId;
    }
    public get aiApiKeyId(): string | undefined {
        return this['ai_api_key_id'];
    }
}