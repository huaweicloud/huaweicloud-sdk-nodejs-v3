import { ListKeystoreResult } from './ListKeystoreResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeystoreResponse extends SdkResponse {
    public result?: Array<ListKeystoreResult>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ListKeystoreResult>): ListKeystoreResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListKeystoreResponse {
        this['status'] = status;
        return this;
    }
}