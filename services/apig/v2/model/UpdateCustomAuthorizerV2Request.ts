import { AuthorizerCreate } from './AuthorizerCreate';


export class UpdateCustomAuthorizerV2Request {
    private 'instance_id'?: string;
    private 'authorizer_id'?: string;
    public body?: AuthorizerCreate;
    public constructor(instanceId?: string, authorizerId?: string) { 
        this['instance_id'] = instanceId;
        this['authorizer_id'] = authorizerId;
    }
    public withInstanceId(instanceId: string): UpdateCustomAuthorizerV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAuthorizerId(authorizerId: string): UpdateCustomAuthorizerV2Request {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withBody(body: AuthorizerCreate): UpdateCustomAuthorizerV2Request {
        this['body'] = body;
        return this;
    }
}