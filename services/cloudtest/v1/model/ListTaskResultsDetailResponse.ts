import { ApiError } from './ApiError';
import { ResultValueListTaskResulDetailtVo } from './ResultValueListTaskResulDetailtVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskResultsDetailResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTaskResulDetailtVo;
    public error?: ApiError;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListTaskResultsDetailResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTaskResulDetailtVo): ListTaskResultsDetailResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ListTaskResultsDetailResponse {
        this['error'] = error;
        return this;
    }
}