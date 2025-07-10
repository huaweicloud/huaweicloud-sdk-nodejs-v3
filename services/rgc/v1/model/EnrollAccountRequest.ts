import { EnrollAccountRequestBody } from './EnrollAccountRequestBody';


export class EnrollAccountRequest {
    private 'managed_account_id'?: string;
    public body?: EnrollAccountRequestBody;
    public constructor(managedAccountId?: string) { 
        this['managed_account_id'] = managedAccountId;
    }
    public withManagedAccountId(managedAccountId: string): EnrollAccountRequest {
        this['managed_account_id'] = managedAccountId;
        return this;
    }
    public set managedAccountId(managedAccountId: string  | undefined) {
        this['managed_account_id'] = managedAccountId;
    }
    public get managedAccountId(): string | undefined {
        return this['managed_account_id'];
    }
    public withBody(body: EnrollAccountRequestBody): EnrollAccountRequest {
        this['body'] = body;
        return this;
    }
}