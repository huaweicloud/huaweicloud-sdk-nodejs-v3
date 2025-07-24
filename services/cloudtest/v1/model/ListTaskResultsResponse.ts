import { ApiError } from './ApiError';
import { ResultValueListTaskResultVo } from './ResultValueListTaskResultVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskResultsResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTaskResultVo;
    public error?: ApiError;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListTaskResultsResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTaskResultVo): ListTaskResultsResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ListTaskResultsResponse {
        this['error'] = error;
        return this;
    }
}