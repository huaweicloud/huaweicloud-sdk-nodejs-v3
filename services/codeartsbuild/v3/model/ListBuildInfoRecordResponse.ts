import { ListBuildInfoRecordBodyResult } from './ListBuildInfoRecordBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBuildInfoRecordResponse extends SdkResponse {
    public result?: ListBuildInfoRecordBodyResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ListBuildInfoRecordBodyResult): ListBuildInfoRecordResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListBuildInfoRecordResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListBuildInfoRecordResponse {
        this['status'] = status;
        return this;
    }
}