import { AppQuotaInfo } from './AppQuotaInfo';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppQuotasResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public quotas?: Array<AppQuotaInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListAppQuotasResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAppQuotasResponse {
        this['total'] = total;
        return this;
    }
    public withQuotas(quotas: Array<AppQuotaInfo>): ListAppQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}