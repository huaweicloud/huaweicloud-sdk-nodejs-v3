import { ApiAuthCreate } from './ApiAuthCreate';


export class CreateAuthorizingAppsV2Request {
    private 'instance_id'?: string;
    public body?: ApiAuthCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateAuthorizingAppsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ApiAuthCreate): CreateAuthorizingAppsV2Request {
        this['body'] = body;
        return this;
    }
}