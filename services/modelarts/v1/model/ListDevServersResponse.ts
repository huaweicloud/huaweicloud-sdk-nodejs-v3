import { ServerResponse } from './ServerResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDevServersResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServerResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListDevServersResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServerResponse>): ListDevServersResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListDevServersResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListDevServersResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListDevServersResponse {
        this['total'] = total;
        return this;
    }
}