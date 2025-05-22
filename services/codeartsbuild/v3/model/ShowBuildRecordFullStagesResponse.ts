import { FullStagesResult } from './FullStagesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBuildRecordFullStagesResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: FullStagesResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowBuildRecordFullStagesResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowBuildRecordFullStagesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: FullStagesResult): ShowBuildRecordFullStagesResponse {
        this['result'] = result;
        return this;
    }
}