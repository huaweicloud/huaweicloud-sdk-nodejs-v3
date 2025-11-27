import { ListViewResourceResponseBodyData } from './ListViewResourceResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourcesOfResourceViewResponse extends SdkResponse {
    public data?: Array<ListViewResourceResponseBodyData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<ListViewResourceResponseBodyData>): ListResourcesOfResourceViewResponse {
        this['data'] = data;
        return this;
    }
}