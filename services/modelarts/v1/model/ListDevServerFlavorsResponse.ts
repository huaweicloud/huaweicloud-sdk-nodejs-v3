import { ServerFlavorinstanceResponse } from './ServerFlavorinstanceResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDevServerFlavorsResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServerFlavorinstanceResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListDevServerFlavorsResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServerFlavorinstanceResponse>): ListDevServerFlavorsResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListDevServerFlavorsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListDevServerFlavorsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListDevServerFlavorsResponse {
        this['total'] = total;
        return this;
    }
}