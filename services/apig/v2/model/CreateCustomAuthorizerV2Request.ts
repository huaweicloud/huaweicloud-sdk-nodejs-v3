import { AuthorizerCreate } from './AuthorizerCreate';


export class CreateCustomAuthorizerV2Request {
    private 'instance_id'?: string;
    public body?: AuthorizerCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateCustomAuthorizerV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AuthorizerCreate): CreateCustomAuthorizerV2Request {
        this['body'] = body;
        return this;
    }
}