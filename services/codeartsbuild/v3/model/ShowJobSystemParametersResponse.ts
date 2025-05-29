import { SystemParametersResult } from './SystemParametersResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobSystemParametersResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: Array<SystemParametersResult>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowJobSystemParametersResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowJobSystemParametersResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: Array<SystemParametersResult>): ShowJobSystemParametersResponse {
        this['result'] = result;
        return this;
    }
}