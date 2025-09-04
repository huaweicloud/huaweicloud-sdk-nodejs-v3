import { ShowDomainStatusResult } from './ShowDomainStatusResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainStatusResponse extends SdkResponse {
    public result?: ShowDomainStatusResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowDomainStatusResult): ShowDomainStatusResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowDomainStatusResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowDomainStatusResponse {
        this['status'] = status;
        return this;
    }
}