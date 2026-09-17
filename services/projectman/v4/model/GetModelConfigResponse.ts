import { ModelConfigDTO } from './ModelConfigDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetModelConfigResponse extends SdkResponse {
    public status?: string;
    public result?: ModelConfigDTO;
    public message?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): GetModelConfigResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ModelConfigDTO): GetModelConfigResponse {
        this['result'] = result;
        return this;
    }
    public withMessage(message: string): GetModelConfigResponse {
        this['message'] = message;
        return this;
    }
}