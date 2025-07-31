import { AccessTopVO } from './AccessTopVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAccessTopResponse extends SdkResponse {
    public data?: AccessTopVO;
    public constructor() { 
        super();
    }
    public withData(data: AccessTopVO): ShowAccessTopResponse {
        this['data'] = data;
        return this;
    }
}