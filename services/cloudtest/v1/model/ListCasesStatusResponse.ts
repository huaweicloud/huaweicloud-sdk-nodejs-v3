import { CommonResponseErrorOfobject } from './CommonResponseErrorOfobject';
import { QueryCasesStatusResponseV2 } from './QueryCasesStatusResponseV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCasesStatusResponse extends SdkResponse {
    public error?: CommonResponseErrorOfobject;
    public result?: QueryCasesStatusResponseV2;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: CommonResponseErrorOfobject): ListCasesStatusResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: QueryCasesStatusResponseV2): ListCasesStatusResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListCasesStatusResponse {
        this['status'] = status;
        return this;
    }
}