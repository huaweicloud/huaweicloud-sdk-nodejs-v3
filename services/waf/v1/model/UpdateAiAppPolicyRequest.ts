import { AiAppPolicyUpdateRequest } from './AiAppPolicyUpdateRequest';


export class UpdateAiAppPolicyRequest {
    private 'app_id'?: string;
    public body?: AiAppPolicyUpdateRequest;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): UpdateAiAppPolicyRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: AiAppPolicyUpdateRequest): UpdateAiAppPolicyRequest {
        this['body'] = body;
        return this;
    }
}