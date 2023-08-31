import { AppBaseResponse } from './AppBaseResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteApplicationResponse extends SdkResponse {
    public status?: string;
    public result?: AppBaseResponse;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteApplicationResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: AppBaseResponse): DeleteApplicationResponse {
        this['result'] = result;
        return this;
    }
}