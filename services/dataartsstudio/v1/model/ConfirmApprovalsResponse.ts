import { ConfirmApprovalsResultData } from './ConfirmApprovalsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmApprovalsResponse extends SdkResponse {
    public data?: ConfirmApprovalsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ConfirmApprovalsResultData): ConfirmApprovalsResponse {
        this['data'] = data;
        return this;
    }
}