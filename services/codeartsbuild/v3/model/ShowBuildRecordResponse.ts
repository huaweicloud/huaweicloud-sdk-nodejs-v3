import { BuildRecord } from './BuildRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBuildRecordResponse extends SdkResponse {
    public result?: BuildRecord;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: BuildRecord): ShowBuildRecordResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowBuildRecordResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowBuildRecordResponse {
        this['status'] = status;
        return this;
    }
}