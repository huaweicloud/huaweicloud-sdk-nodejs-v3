import { ListRecordsResult } from './ListRecordsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecordsResponse extends SdkResponse {
    public result?: ListRecordsResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ListRecordsResult): ListRecordsResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListRecordsResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListRecordsResponse {
        this['status'] = status;
        return this;
    }
}