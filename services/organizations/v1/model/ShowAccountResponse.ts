import { AccountDto } from './AccountDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAccountResponse extends SdkResponse {
    public account?: AccountDto;
    public constructor() { 
        super();
    }
    public withAccount(account: AccountDto): ShowAccountResponse {
        this['account'] = account;
        return this;
    }
}