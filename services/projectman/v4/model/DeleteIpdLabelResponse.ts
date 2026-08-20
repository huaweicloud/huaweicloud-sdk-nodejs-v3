import { LabelEntity } from './LabelEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIpdLabelResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: LabelEntity;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteIpdLabelResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): DeleteIpdLabelResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: LabelEntity): DeleteIpdLabelResponse {
        this['result'] = result;
        return this;
    }
}