

export class DeleteActiveDirectoryDomainRequestBody {
    private 'service_account'?: string;
    public password?: string;
    public constructor(serviceAccount?: string, password?: string) { 
        this['service_account'] = serviceAccount;
        this['password'] = password;
    }
    public withServiceAccount(serviceAccount: string): DeleteActiveDirectoryDomainRequestBody {
        this['service_account'] = serviceAccount;
        return this;
    }
    public set serviceAccount(serviceAccount: string  | undefined) {
        this['service_account'] = serviceAccount;
    }
    public get serviceAccount(): string | undefined {
        return this['service_account'];
    }
    public withPassword(password: string): DeleteActiveDirectoryDomainRequestBody {
        this['password'] = password;
        return this;
    }
}