import { AccountInfo } from './AccountInfo';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccountsResponse extends SdkResponse {
    private 'account_list'?: Array<AccountInfo>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withAccountList(accountList: Array<AccountInfo>): ListAccountsResponse {
        this['account_list'] = accountList;
        return this;
    }
    public set accountList(accountList: Array<AccountInfo>  | undefined) {
        this['account_list'] = accountList;
    }
    public get accountList(): Array<AccountInfo> | undefined {
        return this['account_list'];
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