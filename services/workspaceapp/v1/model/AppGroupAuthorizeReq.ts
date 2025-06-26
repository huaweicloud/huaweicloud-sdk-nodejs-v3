import { AccountInfo } from './AccountInfo';


export class AppGroupAuthorizeReq {
    private 'app_group_ids'?: Array<string>;
    public accounts?: Array<AccountInfo>;
    public constructor(appGroupIds?: Array<string>, accounts?: Array<AccountInfo>) { 
        this['app_group_ids'] = appGroupIds;
        this['accounts'] = accounts;
    }
    public withAppGroupIds(appGroupIds: Array<string>): AppGroupAuthorizeReq {
        this['app_group_ids'] = appGroupIds;
        return this;
    }
    public set appGroupIds(appGroupIds: Array<string>  | undefined) {
        this['app_group_ids'] = appGroupIds;
    }
    public get appGroupIds(): Array<string> | undefined {
        return this['app_group_ids'];
    }
    public withAccounts(accounts: Array<AccountInfo>): AppGroupAuthorizeReq {
        this['accounts'] = accounts;
        return this;
    }
}