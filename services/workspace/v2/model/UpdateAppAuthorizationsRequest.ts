import { AssignAppAuthorizationsReq } from './AssignAppAuthorizationsReq';


export class UpdateAppAuthorizationsRequest {
    private 'app_id'?: string;
    public body?: AssignAppAuthorizationsReq;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): UpdateAppAuthorizationsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: AssignAppAuthorizationsReq): UpdateAppAuthorizationsRequest {
        this['body'] = body;
        return this;
    }
}