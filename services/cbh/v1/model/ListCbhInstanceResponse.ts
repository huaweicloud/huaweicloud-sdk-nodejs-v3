import { InstanceDetail } from './InstanceDetail';
import { QuotaDetail } from './QuotaDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCbhInstanceResponse extends SdkResponse {
    public total?: number;
    public quotaDetail?: QuotaDetail;
    public instance?: Array<InstanceDetail>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCbhInstanceResponse {
        this['total'] = total;
        return this;
    }
    public withQuotaDetail(quotaDetail: QuotaDetail): ListCbhInstanceResponse {
        this['quotaDetail'] = quotaDetail;
        return this;
    }
    public withInstance(instance: Array<InstanceDetail>): ListCbhInstanceResponse {
        this['instance'] = instance;
        return this;
    }
}