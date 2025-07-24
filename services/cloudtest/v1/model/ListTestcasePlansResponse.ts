import { ApiError } from './ApiError';
import { ResultValueListTestcasePlanVo } from './ResultValueListTestcasePlanVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTestcasePlansResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTestcasePlanVo;
    public error?: ApiError;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListTestcasePlansResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTestcasePlanVo): ListTestcasePlansResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ListTestcasePlansResponse {
        this['error'] = error;
        return this;
    }
}