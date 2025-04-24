import { ConnectionInfo } from './ConnectionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectionsResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<ConnectionInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListConnectionsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListConnectionsResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<ConnectionInfo>): ListConnectionsResponse {
        this['items'] = items;
        return this;
    }
}