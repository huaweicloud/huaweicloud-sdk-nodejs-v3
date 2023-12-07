import { DataClassificationGroupQueryDTO } from './DataClassificationGroupQueryDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityDataClassificationRuleGroupsResponse extends SdkResponse {
    private 'rule_groups'?: Array<DataClassificationGroupQueryDTO>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRuleGroups(ruleGroups: Array<DataClassificationGroupQueryDTO>): ListSecurityDataClassificationRuleGroupsResponse {
        this['rule_groups'] = ruleGroups;
        return this;
    }
    public set ruleGroups(ruleGroups: Array<DataClassificationGroupQueryDTO>  | undefined) {
        this['rule_groups'] = ruleGroups;
    }
    public get ruleGroups(): Array<DataClassificationGroupQueryDTO> | undefined {
        return this['rule_groups'];
    }
    public withTotal(total: number): ListSecurityDataClassificationRuleGroupsResponse {
        this['total'] = total;
        return this;
    }
}