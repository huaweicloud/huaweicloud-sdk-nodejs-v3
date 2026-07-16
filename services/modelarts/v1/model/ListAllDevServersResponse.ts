import { ServerResponse } from './ServerResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllDevServersResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServerResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListAllDevServersResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServerResponse>): ListAllDevServersResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListAllDevServersResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListAllDevServersResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAllDevServersResponse {
        this['total'] = total;
        return this;
    }
}