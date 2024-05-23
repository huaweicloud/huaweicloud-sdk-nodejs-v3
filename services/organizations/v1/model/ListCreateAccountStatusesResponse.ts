import { CreateAccountStatusDto } from './CreateAccountStatusDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCreateAccountStatusesResponse extends SdkResponse {
    private 'create_account_statuses'?: Array<CreateAccountStatusDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withCreateAccountStatuses(createAccountStatuses: Array<CreateAccountStatusDto>): ListCreateAccountStatusesResponse {
        this['create_account_statuses'] = createAccountStatuses;
        return this;
    }
    public set createAccountStatuses(createAccountStatuses: Array<CreateAccountStatusDto>  | undefined) {
        this['create_account_statuses'] = createAccountStatuses;
    }
    public get createAccountStatuses(): Array<CreateAccountStatusDto> | undefined {
        return this['create_account_statuses'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListCreateAccountStatusesResponse {
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