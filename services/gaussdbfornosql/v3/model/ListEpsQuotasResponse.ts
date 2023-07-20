import { NoSqlQueryEpsQuotaInfo } from './NoSqlQueryEpsQuotaInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEpsQuotasResponse extends SdkResponse {
    private 'total_count'?: number;
    public quotas?: Array<NoSqlQueryEpsQuotaInfo>;
    public constructor() { 
        super();
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
    public withQuotas(quotas: Array<NoSqlQueryEpsQuotaInfo>): ListEpsQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}