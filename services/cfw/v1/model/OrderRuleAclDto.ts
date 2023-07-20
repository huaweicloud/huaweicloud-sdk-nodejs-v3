

export class OrderRuleAclDto {
    private 'dest_rule_id'?: string;
    public top?: number;
    public constructor() { 
    }
    public withDestRuleId(destRuleId: string): OrderRuleAclDto {
        this['dest_rule_id'] = destRuleId;
        return this;
    }
    public set destRuleId(destRuleId: string  | undefined) {
        this['dest_rule_id'] = destRuleId;
    }
    public get destRuleId(): string | undefined {
        return this['dest_rule_id'];
    }
    public withTop(top: number): OrderRuleAclDto {
        this['top'] = top;
        return this;
    }
}