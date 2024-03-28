import { UpdateApplicationDTO } from './UpdateApplicationDTO';


export class UpdateApplicationRequest {
    private 'Instance-Id'?: string;
    private 'app_id'?: string;
    public body?: UpdateApplicationDTO;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withInstanceId(instanceId: string): UpdateApplicationRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): UpdateApplicationRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: UpdateApplicationDTO): UpdateApplicationRequest {
        this['body'] = body;
        return this;
    }
}