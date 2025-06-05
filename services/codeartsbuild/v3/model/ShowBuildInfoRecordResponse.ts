import { BuildInfoRecord } from './BuildInfoRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBuildInfoRecordResponse extends SdkResponse {
    public result?: BuildInfoRecord;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: BuildInfoRecord): ShowBuildInfoRecordResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowBuildInfoRecordResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowBuildInfoRecordResponse {
        this['status'] = status;
        return this;
    }
}