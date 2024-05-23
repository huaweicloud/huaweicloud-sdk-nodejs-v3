import { AccountDto } from './AccountDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccountsResponse extends SdkResponse {
    public accounts?: Array<AccountDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withAccounts(accounts: Array<AccountDto>): ListAccountsResponse {
        this['accounts'] = accounts;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListAccountsResponse {
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