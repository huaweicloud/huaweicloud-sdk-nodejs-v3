import { LabelCreateResult } from './LabelCreateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIpdLabelResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: LabelCreateResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateIpdLabelResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): CreateIpdLabelResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: LabelCreateResult): CreateIpdLabelResponse {
        this['result'] = result;
        return this;
    }
}