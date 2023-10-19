import { ServiceSetRecords } from './ServiceSetRecords';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceSetsResponse extends SdkResponse {
    public data?: ServiceSetRecords;
    public constructor() { 
        super();
    }
    public withData(data: ServiceSetRecords): ListServiceSetsResponse {
        this['data'] = data;
        return this;
    }
}