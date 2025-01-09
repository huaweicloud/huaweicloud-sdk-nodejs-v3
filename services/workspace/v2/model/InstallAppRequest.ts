import { AutoInstallAppReq } from './AutoInstallAppReq';


export class InstallAppRequest {
    private 'app_id'?: string;
    public body?: AutoInstallAppReq;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): InstallAppRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: AutoInstallAppReq): InstallAppRequest {
        this['body'] = body;
        return this;
    }
}