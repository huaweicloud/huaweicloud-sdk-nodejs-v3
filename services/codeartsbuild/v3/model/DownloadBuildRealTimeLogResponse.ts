import { OctopusV3LogResponseBodyResult } from './OctopusV3LogResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadBuildRealTimeLogResponse extends SdkResponse {
    public result?: OctopusV3LogResponseBodyResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: OctopusV3LogResponseBodyResult): DownloadBuildRealTimeLogResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): DownloadBuildRealTimeLogResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): DownloadBuildRealTimeLogResponse {
        this['status'] = status;
        return this;
    }
}