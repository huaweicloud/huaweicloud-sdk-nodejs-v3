import { ShowUserOverPackageQuotaResult } from './ShowUserOverPackageQuotaResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserOverPackageQuotaResponse extends SdkResponse {
    public result?: ShowUserOverPackageQuotaResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowUserOverPackageQuotaResult): ShowUserOverPackageQuotaResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowUserOverPackageQuotaResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowUserOverPackageQuotaResponse {
        this['status'] = status;
        return this;
    }
}