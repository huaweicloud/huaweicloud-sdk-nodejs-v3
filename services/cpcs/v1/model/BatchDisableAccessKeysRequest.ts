import { BatchAccessKeysRequestBody } from './BatchAccessKeysRequestBody';


export class BatchDisableAccessKeysRequest {
    private 'app_id'?: string;
    public body?: BatchAccessKeysRequestBody;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): BatchDisableAccessKeysRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: BatchAccessKeysRequestBody): BatchDisableAccessKeysRequest {
        this['body'] = body;
        return this;
    }
}