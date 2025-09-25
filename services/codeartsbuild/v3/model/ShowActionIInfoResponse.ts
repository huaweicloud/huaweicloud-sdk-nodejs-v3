import { OctopusV3LogResponseBodyResult } from './OctopusV3LogResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowActionIInfoResponse extends SdkResponse {
    public result?: OctopusV3LogResponseBodyResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: OctopusV3LogResponseBodyResult): ShowActionIInfoResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowActionIInfoResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowActionIInfoResponse {
        this['status'] = status;
        return this;
    }
}