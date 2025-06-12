import { ListKeystoreSearchResponseBodyResult } from './ListKeystoreSearchResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeystoreSearchResponse extends SdkResponse {
    public result?: ListKeystoreSearchResponseBodyResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ListKeystoreSearchResponseBodyResult): ListKeystoreSearchResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListKeystoreSearchResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListKeystoreSearchResponse {
        this['status'] = status;
        return this;
    }
}