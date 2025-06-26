import { ShowJobPermissionResult } from './ShowJobPermissionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectJobPermissionResponse extends SdkResponse {
    public result?: ShowJobPermissionResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowJobPermissionResult): ShowProjectJobPermissionResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowProjectJobPermissionResponse {
        this['status'] = status;
        return this;
    }
}