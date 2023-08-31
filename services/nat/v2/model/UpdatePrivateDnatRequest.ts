import { UpdatePrivateDnatRequestBody } from './UpdatePrivateDnatRequestBody';


export class UpdatePrivateDnatRequest {
    private 'dnat_rule_id'?: string;
    public body?: UpdatePrivateDnatRequestBody;
    public constructor(dnatRuleId?: string) { 
        this['dnat_rule_id'] = dnatRuleId;
    }
    public withDnatRuleId(dnatRuleId: string): UpdatePrivateDnatRequest {
        this['dnat_rule_id'] = dnatRuleId;
        return this;
    }
    public set dnatRuleId(dnatRuleId: string  | undefined) {
        this['dnat_rule_id'] = dnatRuleId;
    }
    public get dnatRuleId(): string | undefined {
        return this['dnat_rule_id'];
    }
    public withBody(body: UpdatePrivateDnatRequestBody): UpdatePrivateDnatRequest {
        this['body'] = body;
        return this;
    }
}