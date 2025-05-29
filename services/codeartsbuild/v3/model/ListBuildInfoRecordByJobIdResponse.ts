import { ListBuildInfoRecordBodyResult } from './ListBuildInfoRecordBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBuildInfoRecordByJobIdResponse extends SdkResponse {
    public result?: ListBuildInfoRecordBodyResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ListBuildInfoRecordBodyResult): ListBuildInfoRecordByJobIdResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListBuildInfoRecordByJobIdResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListBuildInfoRecordByJobIdResponse {
        this['status'] = status;
        return this;
    }
}