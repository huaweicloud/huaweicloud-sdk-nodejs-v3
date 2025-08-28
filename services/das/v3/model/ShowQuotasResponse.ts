
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: object;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: object): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}