import { AppBaseResponse } from './AppBaseResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAppInfoResponse extends SdkResponse {
    public status?: string;
    public result?: AppBaseResponse;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateAppInfoResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: AppBaseResponse): UpdateAppInfoResponse {
        this['result'] = result;
        return this;
    }
}