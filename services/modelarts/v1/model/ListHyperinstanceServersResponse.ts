import { ServerResponse } from './ServerResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHyperinstanceServersResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServerResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListHyperinstanceServersResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServerResponse>): ListHyperinstanceServersResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListHyperinstanceServersResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListHyperinstanceServersResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListHyperinstanceServersResponse {
        this['total'] = total;
        return this;
    }
}