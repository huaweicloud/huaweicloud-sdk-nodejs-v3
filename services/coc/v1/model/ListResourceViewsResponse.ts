import { ListViewResponseBodyData } from './ListViewResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceViewsResponse extends SdkResponse {
    public data?: Array<ListViewResponseBodyData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<ListViewResponseBodyData>): ListResourceViewsResponse {
        this['data'] = data;
        return this;
    }
}