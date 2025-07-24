import { CheckRecordDataInfo } from './CheckRecordDataInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckRecordResponse extends SdkResponse {
    public data?: Array<CheckRecordDataInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<CheckRecordDataInfo>): CheckRecordResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): CheckRecordResponse {
        this['total'] = total;
        return this;
    }
}