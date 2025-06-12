import { ShowDefaultProjectPermissionResponseBodyResult } from './ShowDefaultProjectPermissionResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDefaultProjectPermissionResponse extends SdkResponse {
    public result?: Array<ShowDefaultProjectPermissionResponseBodyResult>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ShowDefaultProjectPermissionResponseBodyResult>): ShowDefaultProjectPermissionResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowDefaultProjectPermissionResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowDefaultProjectPermissionResponse {
        this['status'] = status;
        return this;
    }
}