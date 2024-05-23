import { CloseAccountStatusDto } from './CloseAccountStatusDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloseAccountStatusesResponse extends SdkResponse {
    private 'close_account_statuses'?: Array<CloseAccountStatusDto>;
    public constructor() { 
        super();
    }
    public withCloseAccountStatuses(closeAccountStatuses: Array<CloseAccountStatusDto>): ListCloseAccountStatusesResponse {
        this['close_account_statuses'] = closeAccountStatuses;
        return this;
    }
    public set closeAccountStatuses(closeAccountStatuses: Array<CloseAccountStatusDto>  | undefined) {
        this['close_account_statuses'] = closeAccountStatuses;
    }
    public get closeAccountStatuses(): Array<CloseAccountStatusDto> | undefined {
        return this['close_account_statuses'];
    }
}