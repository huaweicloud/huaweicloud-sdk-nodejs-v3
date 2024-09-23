import { AccountDto } from './AccountDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAccountResponse extends SdkResponse {
    public account?: AccountDto;
    public constructor() { 
        super();
    }
    public withAccount(account: AccountDto): UpdateAccountResponse {
        this['account'] = account;
        return this;
    }
}