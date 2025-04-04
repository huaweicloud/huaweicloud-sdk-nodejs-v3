import { UpdateAppReq } from './UpdateAppReq';


export class UpdateUploadedAppRequest {
    private 'app_id'?: string;
    public body?: UpdateAppReq;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): UpdateUploadedAppRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: UpdateAppReq): UpdateUploadedAppRequest {
        this['body'] = body;
        return this;
    }
}