import { ShowUserChargeTypeResult } from './ShowUserChargeTypeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserChargeTypeResponse extends SdkResponse {
    public result?: ShowUserChargeTypeResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowUserChargeTypeResult): ShowUserChargeTypeResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowUserChargeTypeResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowUserChargeTypeResponse {
        this['status'] = status;
        return this;
    }
}