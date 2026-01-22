import { AccountInfo } from './AccountInfo';


export class AccountDto {
    public accounts?: Array<AccountInfo>;
    public constructor() { 
    }
    public withAccounts(accounts: Array<AccountInfo>): AccountDto {
        this['accounts'] = accounts;
        return this;
    }
}