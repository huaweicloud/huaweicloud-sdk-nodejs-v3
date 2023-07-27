import { AppResetCreate } from './AppResetCreate';


export class ResettingAppSecretV2Request {
    private 'instance_id'?: string;
    private 'app_id'?: string;
    public body?: AppResetCreate;
    public constructor(instanceId?: string, appId?: string) { 
        this['instance_id'] = instanceId;
        this['app_id'] = appId;
    }
    public withInstanceId(instanceId: string): ResettingAppSecretV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppId(appId: string): ResettingAppSecretV2Request {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: AppResetCreate): ResettingAppSecretV2Request {
        this['body'] = body;
        return this;
    }
}