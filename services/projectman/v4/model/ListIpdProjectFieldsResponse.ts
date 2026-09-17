import { FieldListResult } from './FieldListResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpdProjectFieldsResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: FieldListResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListIpdProjectFieldsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ListIpdProjectFieldsResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: FieldListResult): ListIpdProjectFieldsResponse {
        this['result'] = result;
        return this;
    }
}