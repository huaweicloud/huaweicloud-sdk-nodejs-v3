import { UpdateAppDisableStatusRequestBody } from './UpdateAppDisableStatusRequestBody';


export class UpdateAppDisableStatusRequest {
    private 'app_id'?: string;
    public body?: UpdateAppDisableStatusRequestBody;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): UpdateAppDisableStatusRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: UpdateAppDisableStatusRequestBody): UpdateAppDisableStatusRequest {
        this['body'] = body;
        return this;
    }
}