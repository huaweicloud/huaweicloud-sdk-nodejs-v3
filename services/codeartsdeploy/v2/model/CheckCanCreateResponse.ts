import { CheckCanCreateResponseBodyResult } from './CheckCanCreateResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckCanCreateResponse extends SdkResponse {
    public result?: CheckCanCreateResponseBodyResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: CheckCanCreateResponseBodyResult): CheckCanCreateResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CheckCanCreateResponse {
        this['status'] = status;
        return this;
    }
}