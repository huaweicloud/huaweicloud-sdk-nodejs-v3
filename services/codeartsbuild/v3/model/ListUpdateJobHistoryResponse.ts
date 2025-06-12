import { JobUpdateRecordListVoResult } from './JobUpdateRecordListVoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpdateJobHistoryResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: JobUpdateRecordListVoResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListUpdateJobHistoryResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ListUpdateJobHistoryResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: JobUpdateRecordListVoResult): ListUpdateJobHistoryResponse {
        this['result'] = result;
        return this;
    }
}