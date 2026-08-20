import { FieldVO } from './FieldVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpdFieldsV2Response extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: Array<FieldVO>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowIpdFieldsV2Response {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowIpdFieldsV2Response {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<FieldVO>): ShowIpdFieldsV2Response {
        this['result'] = result;
        return this;
    }
}