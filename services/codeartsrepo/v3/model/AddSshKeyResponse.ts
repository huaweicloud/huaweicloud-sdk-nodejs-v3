import { PublicKey } from './PublicKey';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddSshKeyResponse extends SdkResponse {
    public error?: Error;
    public result?: PublicKey;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): AddSshKeyResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: PublicKey): AddSshKeyResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AddSshKeyResponse {
        this['status'] = status;
        return this;
    }
}