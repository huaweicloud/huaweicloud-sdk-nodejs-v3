

export class ListRecipientsStatusRequestBody {
    private 'email_address'?: string;
    public constructor(emailAddress?: string) { 
        this['email_address'] = emailAddress;
    }
    public withEmailAddress(emailAddress: string): ListRecipientsStatusRequestBody {
        this['email_address'] = emailAddress;
        return this;
    }
    public set emailAddress(emailAddress: string  | undefined) {
        this['email_address'] = emailAddress;
    }
    public get emailAddress(): string | undefined {
        return this['email_address'];
    }
}