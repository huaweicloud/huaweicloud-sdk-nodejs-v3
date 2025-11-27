import { UCSJob } from './UCSJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyJobsResponse extends SdkResponse {
    public items?: Array<UCSJob>;
    public kind?: string;
    public apiVersion?: string;
    public constructor() { 
        super();
    }
    public withItems(items: Array<UCSJob>): ListPolicyJobsResponse {
        this['items'] = items;
        return this;
    }
    public withKind(kind: string): ListPolicyJobsResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListPolicyJobsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
}