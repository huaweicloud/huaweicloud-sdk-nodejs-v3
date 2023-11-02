import { SensitiveMaskResponseRules } from './SensitiveMaskResponseRules';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditSensitiveMasksResponse extends SdkResponse {
    public rules?: Array<SensitiveMaskResponseRules>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<SensitiveMaskResponseRules>): ListAuditSensitiveMasksResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotal(total: number): ListAuditSensitiveMasksResponse {
        this['total'] = total;
        return this;
    }
}