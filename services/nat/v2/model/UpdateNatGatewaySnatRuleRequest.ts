import { UpdateNatGatewaySnatRuleRequestOption } from './UpdateNatGatewaySnatRuleRequestOption';


export class UpdateNatGatewaySnatRuleRequest {
    private 'snat_rule_id'?: string;
    public body?: UpdateNatGatewaySnatRuleRequestOption;
    public constructor(snatRuleId?: string) { 
        this['snat_rule_id'] = snatRuleId;
    }
    public withSnatRuleId(snatRuleId: string): UpdateNatGatewaySnatRuleRequest {
        this['snat_rule_id'] = snatRuleId;
        return this;
    }
    public set snatRuleId(snatRuleId: string  | undefined) {
        this['snat_rule_id'] = snatRuleId;
    }
    public get snatRuleId(): string | undefined {
        return this['snat_rule_id'];
    }
    public withBody(body: UpdateNatGatewaySnatRuleRequestOption): UpdateNatGatewaySnatRuleRequest {
        this['body'] = body;
        return this;
    }
}