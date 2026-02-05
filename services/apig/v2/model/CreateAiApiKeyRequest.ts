import { AiApiKeyCreate } from './AiApiKeyCreate';


export class CreateAiApiKeyRequest {
    private 'instance_id'?: string;
    private 'app_id'?: string;
    public body?: AiApiKeyCreate;
    public constructor(instanceId?: string, appId?: string) { 
        this['instance_id'] = instanceId;
        this['app_id'] = appId;
    }
    public withInstanceId(instanceId: string): CreateAiApiKeyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppId(appId: string): CreateAiApiKeyRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: AiApiKeyCreate): CreateAiApiKeyRequest {
        this['body'] = body;
        return this;
    }
}