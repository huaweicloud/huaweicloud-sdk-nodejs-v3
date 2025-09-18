import { CancelInfo } from './CancelInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopDeployTaskResponse extends SdkResponse {
    public result?: CancelInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: CancelInfo): StopDeployTaskResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): StopDeployTaskResponse {
        this['status'] = status;
        return this;
    }
}