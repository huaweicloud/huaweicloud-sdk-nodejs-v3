import { RealTimeLogResponseBodyResult } from './RealTimeLogResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadRealTimeLogResponse extends SdkResponse {
    public result?: RealTimeLogResponseBodyResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: RealTimeLogResponseBodyResult): DownloadRealTimeLogResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): DownloadRealTimeLogResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): DownloadRealTimeLogResponse {
        this['status'] = status;
        return this;
    }
}