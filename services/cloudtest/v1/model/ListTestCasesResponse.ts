import { ExternalTestCaseVo } from './ExternalTestCaseVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTestCasesResponse extends SdkResponse {
    public values?: Array<ExternalTestCaseVo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withValues(values: Array<ExternalTestCaseVo>): ListTestCasesResponse {
        this['values'] = values;
        return this;
    }
    public withTotal(total: number): ListTestCasesResponse {
        this['total'] = total;
        return this;
    }
}