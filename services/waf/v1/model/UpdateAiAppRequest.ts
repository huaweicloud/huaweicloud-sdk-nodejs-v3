import { AiAppUpdateRequest } from './AiAppUpdateRequest';


export class UpdateAiAppRequest {
    private 'app_id'?: string;
    public body?: AiAppUpdateRequest;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): UpdateAiAppRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: AiAppUpdateRequest): UpdateAiAppRequest {
        this['body'] = body;
        return this;
    }
}