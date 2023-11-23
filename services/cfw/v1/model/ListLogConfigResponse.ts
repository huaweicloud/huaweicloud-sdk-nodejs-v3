import { LogConfigDto } from './LogConfigDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogConfigResponse extends SdkResponse {
    public data?: LogConfigDto;
    public constructor() { 
        super();
    }
    public withData(data: LogConfigDto): ListLogConfigResponse {
        this['data'] = data;
        return this;
    }
}