import { Workload } from './Workload';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkloadsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public items?: Array<Workload>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListWorkloadsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListWorkloadsResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<Workload>): ListWorkloadsResponse {
        this['items'] = items;
        return this;
    }
}