import { ServerResponse } from './ServerResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncDevServersResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServerResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): SyncDevServersResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServerResponse>): SyncDevServersResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): SyncDevServersResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): SyncDevServersResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): SyncDevServersResponse {
        this['total'] = total;
        return this;
    }
}