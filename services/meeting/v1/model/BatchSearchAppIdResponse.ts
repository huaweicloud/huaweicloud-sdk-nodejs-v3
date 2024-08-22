import { AppIdInfoDTO } from './AppIdInfoDTO';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSearchAppIdResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<AppIdInfoDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): BatchSearchAppIdResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchSearchAppIdResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): BatchSearchAppIdResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<AppIdInfoDTO>): BatchSearchAppIdResponse {
        this['data'] = data;
        return this;
    }
}