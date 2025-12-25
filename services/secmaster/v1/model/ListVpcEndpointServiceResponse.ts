import { VpcepServiceData } from './VpcepServiceData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpcEndpointServiceResponse extends SdkResponse {
    public count?: number;
    public records?: Array<VpcepServiceData>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListVpcEndpointServiceResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<VpcepServiceData>): ListVpcEndpointServiceResponse {
        this['records'] = records;
        return this;
    }
}