import { ServerHyperinstanceResponse } from './ServerHyperinstanceResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllHyperinstancesResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServerHyperinstanceResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListAllHyperinstancesResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServerHyperinstanceResponse>): ListAllHyperinstancesResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListAllHyperinstancesResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListAllHyperinstancesResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAllHyperinstancesResponse {
        this['total'] = total;
        return this;
    }
}