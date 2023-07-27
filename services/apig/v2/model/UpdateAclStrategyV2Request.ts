import { ApiAclCreate } from './ApiAclCreate';


export class UpdateAclStrategyV2Request {
    private 'instance_id'?: string;
    private 'acl_id'?: string;
    public body?: ApiAclCreate;
    public constructor(instanceId?: string, aclId?: string) { 
        this['instance_id'] = instanceId;
        this['acl_id'] = aclId;
    }
    public withInstanceId(instanceId: string): UpdateAclStrategyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAclId(aclId: string): UpdateAclStrategyV2Request {
        this['acl_id'] = aclId;
        return this;
    }
    public set aclId(aclId: string  | undefined) {
        this['acl_id'] = aclId;
    }
    public get aclId(): string | undefined {
        return this['acl_id'];
    }
    public withBody(body: ApiAclCreate): UpdateAclStrategyV2Request {
        this['body'] = body;
        return this;
    }
}