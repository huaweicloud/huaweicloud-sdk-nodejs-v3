import { ListEndPointsResultResponseBodyResult } from './ListEndPointsResultResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndPointsResponse extends SdkResponse {
    public result?: ListEndPointsResultResponseBodyResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ListEndPointsResultResponseBodyResult): ListEndPointsResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListEndPointsResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListEndPointsResponse {
        this['status'] = status;
        return this;
    }
}