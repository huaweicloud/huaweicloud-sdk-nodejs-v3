import { CreateApproverResultData } from './CreateApproverResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApproverResponse extends SdkResponse {
    public data?: CreateApproverResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateApproverResultData): CreateApproverResponse {
        this['data'] = data;
        return this;
    }
}