import { UpdateManagedAccountRequestBody } from './UpdateManagedAccountRequestBody';


export class UpdateManagedAccountRequest {
    private 'managed_account_id'?: string;
    public body?: UpdateManagedAccountRequestBody;
    public constructor(managedAccountId?: string) { 
        this['managed_account_id'] = managedAccountId;
    }
    public withManagedAccountId(managedAccountId: string): UpdateManagedAccountRequest {
        this['managed_account_id'] = managedAccountId;
        return this;
    }
    public set managedAccountId(managedAccountId: string  | undefined) {
        this['managed_account_id'] = managedAccountId;
    }
    public get managedAccountId(): string | undefined {
        return this['managed_account_id'];
    }
    public withBody(body: UpdateManagedAccountRequestBody): UpdateManagedAccountRequest {
        this['body'] = body;
        return this;
    }
}