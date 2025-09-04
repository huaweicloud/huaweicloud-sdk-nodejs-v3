import { DomainStatuses } from './DomainStatuses';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainsStatusesResponse extends SdkResponse {
    public result?: Array<DomainStatuses>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<DomainStatuses>): ShowDomainsStatusesResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowDomainsStatusesResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowDomainsStatusesResponse {
        this['status'] = status;
        return this;
    }
}