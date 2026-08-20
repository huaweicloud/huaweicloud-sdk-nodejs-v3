import { LabelUpdateResult } from './LabelUpdateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIpdLabelResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: LabelUpdateResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateIpdLabelResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): UpdateIpdLabelResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: LabelUpdateResult): UpdateIpdLabelResponse {
        this['result'] = result;
        return this;
    }
}