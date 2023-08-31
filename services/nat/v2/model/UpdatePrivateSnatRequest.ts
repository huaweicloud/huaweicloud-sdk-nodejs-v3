import { UpdatePrivateSnatOptionBody } from './UpdatePrivateSnatOptionBody';


export class UpdatePrivateSnatRequest {
    private 'snat_rule_id'?: string;
    public body?: UpdatePrivateSnatOptionBody;
    public constructor(snatRuleId?: string) { 
        this['snat_rule_id'] = snatRuleId;
    }
    public withSnatRuleId(snatRuleId: string): UpdatePrivateSnatRequest {
        this['snat_rule_id'] = snatRuleId;
        return this;
    }
    public set snatRuleId(snatRuleId: string  | undefined) {
        this['snat_rule_id'] = snatRuleId;
    }
    public get snatRuleId(): string | undefined {
        return this['snat_rule_id'];
    }
    public withBody(body: UpdatePrivateSnatOptionBody): UpdatePrivateSnatRequest {
        this['body'] = body;
        return this;
    }
}