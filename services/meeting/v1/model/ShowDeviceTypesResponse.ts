import { QueryDeviceTypeResultDTO } from './QueryDeviceTypeResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeviceTypesResponse extends SdkResponse {
    public body?: Array<QueryDeviceTypeResultDTO>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<QueryDeviceTypeResultDTO>): ShowDeviceTypesResponse {
        this['body'] = body;
        return this;
    }
}