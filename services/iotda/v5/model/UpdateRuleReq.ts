

export class UpdateRuleReq {
    private 'rule_name'?: string;
    public description?: string;
    public select?: string;
    public where?: string;
    public active?: boolean;
    public constructor() { 
    }
    public withRuleName(ruleName: string): UpdateRuleReq {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withDescription(description: string): UpdateRuleReq {
        this['description'] = description;
        return this;
    }
    public withSelect(select: string): UpdateRuleReq {
        this['select'] = select;
        return this;
    }
    public withWhere(where: string): UpdateRuleReq {
        this['where'] = where;
        return this;
    }
    public withActive(active: boolean): UpdateRuleReq {
        this['active'] = active;
        return this;
    }
}