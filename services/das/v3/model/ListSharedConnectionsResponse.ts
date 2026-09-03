import { ConnSharedInfo } from './ConnSharedInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSharedConnectionsResponse extends SdkResponse {
    public total?: number;
    public data?: Array<ConnSharedInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSharedConnectionsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<ConnSharedInfo>): ListSharedConnectionsResponse {
        this['data'] = data;
        return this;
    }
}