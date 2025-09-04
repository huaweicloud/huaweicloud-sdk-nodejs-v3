import { CreateAppVersionRequestBody } from './CreateAppVersionRequestBody';


export class CreateAppVersionRequest {
    private 'app_id'?: string;
    public version?: string;
    public body?: CreateAppVersionRequestBody;
    public constructor(appId?: string, version?: string) { 
        this['app_id'] = appId;
        this['version'] = version;
    }
    public withAppId(appId: string): CreateAppVersionRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withVersion(version: string): CreateAppVersionRequest {
        this['version'] = version;
        return this;
    }
    public withBody(body: CreateAppVersionRequestBody): CreateAppVersionRequest {
        this['body'] = body;
        return this;
    }
}