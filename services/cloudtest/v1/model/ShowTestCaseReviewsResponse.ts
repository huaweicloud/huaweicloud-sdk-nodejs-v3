import { ApiError } from './ApiError';
import { ResultValueListTestCaseReviewVo } from './ResultValueListTestCaseReviewVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTestCaseReviewsResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTestCaseReviewVo;
    public error?: ApiError;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowTestCaseReviewsResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTestCaseReviewVo): ShowTestCaseReviewsResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ShowTestCaseReviewsResponse {
        this['error'] = error;
        return this;
    }
}