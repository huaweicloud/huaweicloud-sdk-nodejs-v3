import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccountsForProvisionedPermissionSetResponse extends SdkResponse {
    private 'account_ids'?: Array<string>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withAccountIds(accountIds: Array<string>): ListAccountsForProvisionedPermissionSetResponse {
        this['account_ids'] = accountIds;
        return this;
    }
    public set accountIds(accountIds: Array<string>  | undefined) {
        this['account_ids'] = accountIds;
    }
    public get accountIds(): Array<string> | undefined {
        return this['account_ids'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListAccountsForProvisionedPermissionSetResponse {
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