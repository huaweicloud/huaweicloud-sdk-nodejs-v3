import { DomainSetVo } from './DomainSetVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainSetDetailResponse extends SdkResponse {
    public data?: DomainSetVo;
    public constructor() { 
        super();
    }
    public withData(data: DomainSetVo): ShowDomainSetDetailResponse {
        this['data'] = data;
        return this;
    }
}