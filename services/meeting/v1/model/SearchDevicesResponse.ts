import { Pages } from './Pages';
import { QueryDeviceResultDTO } from './QueryDeviceResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchDevicesResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QueryDeviceResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchDevicesResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchDevicesResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchDevicesResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QueryDeviceResultDTO>): SearchDevicesResponse {
        this['data'] = data;
        return this;
    }
}