import { UpdateMetricNotifyRuleReq } from './UpdateMetricNotifyRuleReq';


export class UpdateMetricNotifyRuleRequest {
    private 'rule_id'?: string;
    public body?: UpdateMetricNotifyRuleReq;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withRuleId(ruleId: string): UpdateMetricNotifyRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: UpdateMetricNotifyRuleReq): UpdateMetricNotifyRuleRequest {
        this['body'] = body;
        return this;
    }
}