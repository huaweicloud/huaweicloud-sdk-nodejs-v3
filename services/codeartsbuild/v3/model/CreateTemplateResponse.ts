import { StatusSuccessResultWithUUIDResult } from './StatusSuccessResultWithUUIDResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemplateResponse extends SdkResponse {
    public status?: string;
    public result?: StatusSuccessResultWithUUIDResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateTemplateResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: StatusSuccessResultWithUUIDResult): CreateTemplateResponse {
        this['result'] = result;
        return this;
    }
}