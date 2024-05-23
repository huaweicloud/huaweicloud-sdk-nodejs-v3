

export class ShowCreateAccountStatusRequest {
    private 'create_account_status_id'?: string;
    public constructor(createAccountStatusId?: string) { 
        this['create_account_status_id'] = createAccountStatusId;
    }
    public withCreateAccountStatusId(createAccountStatusId: string): ShowCreateAccountStatusRequest {
        this['create_account_status_id'] = createAccountStatusId;
        return this;
    }
    public set createAccountStatusId(createAccountStatusId: string  | undefined) {
        this['create_account_status_id'] = createAccountStatusId;
    }
    public get createAccountStatusId(): string | undefined {
        return this['create_account_status_id'];
    }
}