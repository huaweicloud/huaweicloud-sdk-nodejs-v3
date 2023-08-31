import { UpdateNatGatewayDnatRuleRequestBody } from './UpdateNatGatewayDnatRuleRequestBody';


export class UpdateNatGatewayDnatRuleRequest {
    private 'dnat_rule_id'?: string;
    public body?: UpdateNatGatewayDnatRuleRequestBody;
    public constructor(dnatRuleId?: string) { 
        this['dnat_rule_id'] = dnatRuleId;
    }
    public withDnatRuleId(dnatRuleId: string): UpdateNatGatewayDnatRuleRequest {
        this['dnat_rule_id'] = dnatRuleId;
        return this;
    }
    public set dnatRuleId(dnatRuleId: string  | undefined) {
        this['dnat_rule_id'] = dnatRuleId;
    }
    public get dnatRuleId(): string | undefined {
        return this['dnat_rule_id'];
    }
    public withBody(body: UpdateNatGatewayDnatRuleRequestBody): UpdateNatGatewayDnatRuleRequest {
        this['body'] = body;
        return this;
    }
}