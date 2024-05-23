

export class DelegatedAdministratorReqBody {
    private 'service_principal'?: string;
    private 'account_id'?: string;
    public constructor(servicePrincipal?: string, accountId?: string) { 
        this['service_principal'] = servicePrincipal;
        this['account_id'] = accountId;
    }
    public withServicePrincipal(servicePrincipal: string): DelegatedAdministratorReqBody {
        this['service_principal'] = servicePrincipal;
        return this;
    }
    public set servicePrincipal(servicePrincipal: string  | undefined) {
        this['service_principal'] = servicePrincipal;
    }
    public get servicePrincipal(): string | undefined {
        return this['service_principal'];
    }
    public withAccountId(accountId: string): DelegatedAdministratorReqBody {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
}