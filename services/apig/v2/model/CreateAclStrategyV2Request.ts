import { ApiAclCreate } from './ApiAclCreate';


export class CreateAclStrategyV2Request {
    private 'instance_id'?: string;
    public body?: ApiAclCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateAclStrategyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ApiAclCreate): CreateAclStrategyV2Request {
        this['body'] = body;
        return this;
    }
}