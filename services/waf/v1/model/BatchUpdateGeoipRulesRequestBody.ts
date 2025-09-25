import { PolicyRuleIdRequestBody } from './PolicyRuleIdRequestBody';
import { PolicyRuleIdRequestBodyPolicyRuleIds } from './PolicyRuleIdRequestBodyPolicyRuleIds';


export class BatchUpdateGeoipRulesRequestBody {
    private 'policy_rule_ids'?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>;
    public status?: number;
    public name?: string;
    public geoip?: string;
    public white?: number;
    public constructor() { 
    }
    public withPolicyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>): BatchUpdateGeoipRulesRequestBody {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<PolicyRuleIdRequestBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
    public withStatus(status: number): BatchUpdateGeoipRulesRequestBody {
        this['status'] = status;
        return this;
    }
    public withName(name: string): BatchUpdateGeoipRulesRequestBody {
        this['name'] = name;
        return this;
    }
    public withGeoip(geoip: string): BatchUpdateGeoipRulesRequestBody {
        this['geoip'] = geoip;
        return this;
    }
    public withWhite(white: number): BatchUpdateGeoipRulesRequestBody {
        this['white'] = white;
        return this;
    }
}