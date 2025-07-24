import { ExternalTestCaseHistoryVo } from './ExternalTestCaseHistoryVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTestCaseHistoriesResponse extends SdkResponse {
    public total?: number;
    public values?: Array<ExternalTestCaseHistoryVo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTestCaseHistoriesResponse {
        this['total'] = total;
        return this;
    }
    public withValues(values: Array<ExternalTestCaseHistoryVo>): ListTestCaseHistoriesResponse {
        this['values'] = values;
        return this;
    }
}