import { ManagedAccount } from './ManagedAccount';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListManagedAccountsResponse extends SdkResponse {
    private 'managed_accounts'?: Array<ManagedAccount>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withManagedAccounts(managedAccounts: Array<ManagedAccount>): ListManagedAccountsResponse {
        this['managed_accounts'] = managedAccounts;
        return this;
    }
    public set managedAccounts(managedAccounts: Array<ManagedAccount>  | undefined) {
        this['managed_accounts'] = managedAccounts;
    }
    public get managedAccounts(): Array<ManagedAccount> | undefined {
        return this['managed_accounts'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListManagedAccountsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}