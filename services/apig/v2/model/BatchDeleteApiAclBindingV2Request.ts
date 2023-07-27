import { AclBindingBatchDelete } from './AclBindingBatchDelete';


export class BatchDeleteApiAclBindingV2Request {
    private 'instance_id'?: string;
    public action?: string;
    public body?: AclBindingBatchDelete;
    public constructor(instanceId?: string, action?: string) { 
        this['instance_id'] = instanceId;
        this['action'] = action;
    }
    public withInstanceId(instanceId: string): BatchDeleteApiAclBindingV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAction(action: string): BatchDeleteApiAclBindingV2Request {
        this['action'] = action;
        return this;
    }
    public withBody(body: AclBindingBatchDelete): BatchDeleteApiAclBindingV2Request {
        this['body'] = body;
        return this;
    }
}