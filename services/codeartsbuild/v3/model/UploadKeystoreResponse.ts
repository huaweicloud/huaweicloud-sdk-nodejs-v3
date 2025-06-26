import { UploadKeystoreResult } from './UploadKeystoreResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadKeystoreResponse extends SdkResponse {
    public result?: UploadKeystoreResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: UploadKeystoreResult): UploadKeystoreResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): UploadKeystoreResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): UploadKeystoreResponse {
        this['status'] = status;
        return this;
    }
}