import { ShowQuotaResponseBodyQuotas } from './ShowQuotaResponseBodyQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaResponse extends SdkResponse {
    private 'Quotas'?: ShowQuotaResponseBodyQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ShowQuotaResponseBodyQuotas): ShowQuotaResponse {
        this['Quotas'] = quotas;
        return this;
    }
    public set quotas(quotas: ShowQuotaResponseBodyQuotas  | undefined) {
        this['Quotas'] = quotas;
    }
    public get quotas(): ShowQuotaResponseBodyQuotas | undefined {
        return this['Quotas'];
    }
}