import { StateInfo } from './StateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckDeployStatusResponse extends SdkResponse {
    public result?: StateInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: StateInfo): CheckDeployStatusResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CheckDeployStatusResponse {
        this['status'] = status;
        return this;
    }
}