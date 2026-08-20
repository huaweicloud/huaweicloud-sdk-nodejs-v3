import { LabelListResponse } from './LabelListResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpdLabelsResponse extends SdkResponse {
    public result?: LabelListResponse;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withResult(result: LabelListResponse): ListIpdLabelsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListIpdLabelsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ListIpdLabelsResponse {
        this['message'] = message;
        return this;
    }
}