import { AddProtectResponse } from './AddProtectResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddProtectBranchV2Response extends SdkResponse {
    public error?: Error;
    public result?: AddProtectResponse;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): AddProtectBranchV2Response {
        this['error'] = error;
        return this;
    }
    public withResult(result: AddProtectResponse): AddProtectBranchV2Response {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AddProtectBranchV2Response {
        this['status'] = status;
        return this;
    }
}