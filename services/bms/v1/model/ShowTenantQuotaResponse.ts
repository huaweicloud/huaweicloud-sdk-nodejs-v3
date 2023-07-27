import { Absolute } from './Absolute';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantQuotaResponse extends SdkResponse {
    public absolute?: Absolute;
    public constructor() { 
        super();
    }
    public withAbsolute(absolute: Absolute): ShowTenantQuotaResponse {
        this['absolute'] = absolute;
        return this;
    }
}