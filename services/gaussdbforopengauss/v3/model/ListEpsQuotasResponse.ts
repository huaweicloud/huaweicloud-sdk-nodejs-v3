import { ListQuotaResult } from './ListQuotaResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEpsQuotasResponse extends SdkResponse {
    private 'eps_quotas'?: Array<ListQuotaResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEpsQuotas(epsQuotas: Array<ListQuotaResult>): ListEpsQuotasResponse {
        this['eps_quotas'] = epsQuotas;
        return this;
    }
    public set epsQuotas(epsQuotas: Array<ListQuotaResult>  | undefined) {
        this['eps_quotas'] = epsQuotas;
    }
    public get epsQuotas(): Array<ListQuotaResult> | undefined {
        return this['eps_quotas'];
    }
    public withTotalCount(totalCount: number): ListEpsQuotasResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}