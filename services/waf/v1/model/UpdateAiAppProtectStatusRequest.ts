import { AiAppProtectStatusRequest } from './AiAppProtectStatusRequest';


export class UpdateAiAppProtectStatusRequest {
    private 'app_id'?: string;
    public body?: AiAppProtectStatusRequest;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): UpdateAiAppProtectStatusRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: AiAppProtectStatusRequest): UpdateAiAppProtectStatusRequest {
        this['body'] = body;
        return this;
    }
}