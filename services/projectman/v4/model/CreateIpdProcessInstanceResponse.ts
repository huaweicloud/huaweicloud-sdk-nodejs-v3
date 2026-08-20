import { ProcessInstanceResponseResult } from './ProcessInstanceResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIpdProcessInstanceResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: ProcessInstanceResponseResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateIpdProcessInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): CreateIpdProcessInstanceResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: ProcessInstanceResponseResult): CreateIpdProcessInstanceResponse {
        this['result'] = result;
        return this;
    }
}