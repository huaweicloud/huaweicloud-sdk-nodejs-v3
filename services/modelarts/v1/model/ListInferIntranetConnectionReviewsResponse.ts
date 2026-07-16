import { IntranetConnectionInfo } from './IntranetConnectionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferIntranetConnectionReviewsResponse extends SdkResponse {
    public current?: number;
    public pages?: number;
    public size?: number;
    public total?: number;
    public data?: Array<IntranetConnectionInfo>;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListInferIntranetConnectionReviewsResponse {
        this['current'] = current;
        return this;
    }
    public withPages(pages: number): ListInferIntranetConnectionReviewsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListInferIntranetConnectionReviewsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInferIntranetConnectionReviewsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<IntranetConnectionInfo>): ListInferIntranetConnectionReviewsResponse {
        this['data'] = data;
        return this;
    }
}