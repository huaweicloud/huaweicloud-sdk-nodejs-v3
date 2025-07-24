import { ExternalUserCaseAndDefect } from './ExternalUserCaseAndDefect';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTestCaseAndDefectInfoResponse extends SdkResponse {
    public total?: number;
    public values?: Array<ExternalUserCaseAndDefect>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowTestCaseAndDefectInfoResponse {
        this['total'] = total;
        return this;
    }
    public withValues(values: Array<ExternalUserCaseAndDefect>): ShowTestCaseAndDefectInfoResponse {
        this['values'] = values;
        return this;
    }
}