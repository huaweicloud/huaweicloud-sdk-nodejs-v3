import { IntranetConnectionInfo } from './IntranetConnectionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferIntranetConnectionApplicationsResponse extends SdkResponse {
    public current?: number;
    public pages?: number;
    public size?: number;
    public total?: number;
    public data?: Array<IntranetConnectionInfo>;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListInferIntranetConnectionApplicationsResponse {
        this['current'] = current;
        return this;
    }
    public withPages(pages: number): ListInferIntranetConnectionApplicationsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListInferIntranetConnectionApplicationsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInferIntranetConnectionApplicationsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<IntranetConnectionInfo>): ListInferIntranetConnectionApplicationsResponse {
        this['data'] = data;
        return this;
    }
}