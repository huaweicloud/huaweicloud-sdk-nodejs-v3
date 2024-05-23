import { CreateAccountStatusDto } from './CreateAccountStatusDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCreateAccountStatusResponse extends SdkResponse {
    private 'create_account_status'?: CreateAccountStatusDto;
    public constructor() { 
        super();
    }
    public withCreateAccountStatus(createAccountStatus: CreateAccountStatusDto): ShowCreateAccountStatusResponse {
        this['create_account_status'] = createAccountStatus;
        return this;
    }
    public set createAccountStatus(createAccountStatus: CreateAccountStatusDto  | undefined) {
        this['create_account_status'] = createAccountStatus;
    }
    public get createAccountStatus(): CreateAccountStatusDto | undefined {
        return this['create_account_status'];
    }
}