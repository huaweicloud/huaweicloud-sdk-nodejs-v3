import { AclAccountResetPasswordBody } from './AclAccountResetPasswordBody';


export class ResetAclAccountPassWordRequest {
    private 'instance_id'?: string;
    private 'account_id'?: string;
    public body?: AclAccountResetPasswordBody;
    public constructor(instanceId?: string, accountId?: string) { 
        this['instance_id'] = instanceId;
        this['account_id'] = accountId;
    }
    public withInstanceId(instanceId: string): ResetAclAccountPassWordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAccountId(accountId: string): ResetAclAccountPassWordRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withBody(body: AclAccountResetPasswordBody): ResetAclAccountPassWordRequest {
        this['body'] = body;
        return this;
    }
}