import { Workload } from './Workload';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkLoadsResponse extends SdkResponse {
    public body?: Array<Workload>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<Workload>): ListWorkLoadsResponse {
        this['body'] = body;
        return this;
    }
}