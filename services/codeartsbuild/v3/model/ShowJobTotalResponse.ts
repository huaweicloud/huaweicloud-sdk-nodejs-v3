import { TotalResponseBodyResult } from './TotalResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobTotalResponse extends SdkResponse {
    public result?: TotalResponseBodyResult;
    public status?: string;
    public error?: object;
    public constructor() { 
        super();
    }
    public withResult(result: TotalResponseBodyResult): ShowJobTotalResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowJobTotalResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowJobTotalResponse {
        this['error'] = error;
        return this;
    }
}