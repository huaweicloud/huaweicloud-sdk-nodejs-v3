import { UpdateAclAccountRemarkRequestBody } from './UpdateAclAccountRemarkRequestBody';


export class UpdateAclAccountRemarkRequest {
    private 'instance_id'?: string;
    private 'account_id'?: string;
    public body?: UpdateAclAccountRemarkRequestBody;
    public constructor(instanceId?: string, accountId?: string) { 
        this['instance_id'] = instanceId;
        this['account_id'] = accountId;
    }
    public withInstanceId(instanceId: string): UpdateAclAccountRemarkRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAccountId(accountId: string): UpdateAclAccountRemarkRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withBody(body: UpdateAclAccountRemarkRequestBody): UpdateAclAccountRemarkRequest {
        this['body'] = body;
        return this;
    }
}