import { StatusChangeResult } from './StatusChangeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangePlanStatusResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: StatusChangeResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ChangePlanStatusResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ChangePlanStatusResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: StatusChangeResult): ChangePlanStatusResponse {
        this['result'] = result;
        return this;
    }
}