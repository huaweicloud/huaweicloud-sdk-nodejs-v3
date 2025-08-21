import { AccessDetailVO } from './AccessDetailVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAccessDetailResponse extends SdkResponse {
    public data?: AccessDetailVO;
    public constructor() { 
        super();
    }
    public withData(data: AccessDetailVO): ShowAccessDetailResponse {
        this['data'] = data;
        return this;
    }
}