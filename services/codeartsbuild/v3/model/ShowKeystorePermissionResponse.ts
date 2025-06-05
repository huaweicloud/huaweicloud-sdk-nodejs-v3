import { ShowKeystorePermissionResponseBodyResult } from './ShowKeystorePermissionResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKeystorePermissionResponse extends SdkResponse {
    public status?: string;
    public error?: string;
    public result?: ShowKeystorePermissionResponseBodyResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowKeystorePermissionResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: string): ShowKeystorePermissionResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: ShowKeystorePermissionResponseBodyResult): ShowKeystorePermissionResponse {
        this['result'] = result;
        return this;
    }
}