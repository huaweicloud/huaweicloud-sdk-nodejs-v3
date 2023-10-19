import { AclAccountResp } from './AclAccountResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAclAccountsResponse extends SdkResponse {
    public accounts?: Array<AclAccountResp>;
    public constructor() { 
        super();
    }
    public withAccounts(accounts: Array<AclAccountResp>): ListAclAccountsResponse {
        this['accounts'] = accounts;
        return this;
    }
}