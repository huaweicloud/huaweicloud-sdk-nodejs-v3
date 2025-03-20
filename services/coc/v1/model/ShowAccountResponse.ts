import { AccountRsp } from './AccountRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAccountResponse extends SdkResponse {
    public count?: number;
    private 'account_list'?: Array<AccountRsp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowAccountResponse {
        this['count'] = count;
        return this;
    }
    public withAccountList(accountList: Array<AccountRsp>): ShowAccountResponse {
        this['account_list'] = accountList;
        return this;
    }
    public set accountList(accountList: Array<AccountRsp>  | undefined) {
        this['account_list'] = accountList;
    }
    public get accountList(): Array<AccountRsp> | undefined {
        return this['account_list'];
    }
}