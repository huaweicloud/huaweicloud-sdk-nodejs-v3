import { SensitiveMaskResponseRules } from './SensitiveMaskResponseRules';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditSensitiveMasksNewResponse extends SdkResponse {
    public rules?: Array<SensitiveMaskResponseRules>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<SensitiveMaskResponseRules>): ListAuditSensitiveMasksNewResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotal(total: number): ListAuditSensitiveMasksNewResponse {
        this['total'] = total;
        return this;
    }
}