import { CreateAppAccessKeyRequestBody } from './CreateAppAccessKeyRequestBody';


export class CreateAppAccessKeyRequest {
    private 'app_id'?: string;
    public body?: CreateAppAccessKeyRequestBody;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): CreateAppAccessKeyRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: CreateAppAccessKeyRequestBody): CreateAppAccessKeyRequest {
        this['body'] = body;
        return this;
    }
}