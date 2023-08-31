import { AppBaseResponse } from './AppBaseResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAppResponse extends SdkResponse {
    public status?: string;
    public result?: AppBaseResponse;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateAppResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: AppBaseResponse): CreateAppResponse {
        this['result'] = result;
        return this;
    }
}