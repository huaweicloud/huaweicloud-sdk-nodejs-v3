import { ConfigRuleCompliance } from './ConfigRuleCompliance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigRuleCompliancesResponse extends SdkResponse {
    private 'account_id'?: string;
    private 'config_rule_compliances'?: Array<ConfigRuleCompliance>;
    public constructor() { 
        super();
    }
    public withAccountId(accountId: string): ListConfigRuleCompliancesResponse {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withConfigRuleCompliances(configRuleCompliances: Array<ConfigRuleCompliance>): ListConfigRuleCompliancesResponse {
        this['config_rule_compliances'] = configRuleCompliances;
        return this;
    }
    public set configRuleCompliances(configRuleCompliances: Array<ConfigRuleCompliance>  | undefined) {
        this['config_rule_compliances'] = configRuleCompliances;
    }
    public get configRuleCompliances(): Array<ConfigRuleCompliance> | undefined {
        return this['config_rule_compliances'];
    }
}