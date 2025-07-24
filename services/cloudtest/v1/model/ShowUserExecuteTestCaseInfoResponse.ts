import { ExternalUserExecuteInfo } from './ExternalUserExecuteInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserExecuteTestCaseInfoResponse extends SdkResponse {
    public total?: number;
    public values?: Array<ExternalUserExecuteInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowUserExecuteTestCaseInfoResponse {
        this['total'] = total;
        return this;
    }
    public withValues(values: Array<ExternalUserExecuteInfo>): ShowUserExecuteTestCaseInfoResponse {
        this['values'] = values;
        return this;
    }
}