import { PublicKeyList } from './PublicKeyList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSshKeysResponse extends SdkResponse {
    public error?: Error;
    public result?: PublicKeyList;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListSshKeysResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: PublicKeyList): ListSshKeysResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListSshKeysResponse {
        this['status'] = status;
        return this;
    }
}