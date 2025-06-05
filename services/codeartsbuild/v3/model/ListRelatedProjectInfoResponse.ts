import { ListRelatedProjectInfoResult } from './ListRelatedProjectInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRelatedProjectInfoResponse extends SdkResponse {
    public result?: ListRelatedProjectInfoResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ListRelatedProjectInfoResult): ListRelatedProjectInfoResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListRelatedProjectInfoResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListRelatedProjectInfoResponse {
        this['status'] = status;
        return this;
    }
}