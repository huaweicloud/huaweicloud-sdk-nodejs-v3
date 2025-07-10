import { ExternalConfigRuleCompliance } from './ExternalConfigRuleCompliance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExternalConfigRuleCompliancesResponse extends SdkResponse {
    private 'account_id'?: string;
    private 'config_rule_compliances'?: Array<ExternalConfigRuleCompliance>;
    public constructor() { 
        super();
    }
    public withAccountId(accountId: string): ListExternalConfigRuleCompliancesResponse {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withConfigRuleCompliances(configRuleCompliances: Array<ExternalConfigRuleCompliance>): ListExternalConfigRuleCompliancesResponse {
        this['config_rule_compliances'] = configRuleCompliances;
        return this;
    }
    public set configRuleCompliances(configRuleCompliances: Array<ExternalConfigRuleCompliance>  | undefined) {
        this['config_rule_compliances'] = configRuleCompliances;
    }
    public get configRuleCompliances(): Array<ExternalConfigRuleCompliance> | undefined {
        return this['config_rule_compliances'];
    }
}