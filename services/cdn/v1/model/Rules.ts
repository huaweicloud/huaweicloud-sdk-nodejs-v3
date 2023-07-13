

export class Rules {
    private 'rule_type': number | undefined;
    public content?: string;
    public ttl: number;
    private 'ttl_type': number | undefined;
    public priority: number;
    public constructor(ruleType?: any, ttl?: any, ttlType?: any, priority?: any) { 
        this['rule_type'] = ruleType;
        this['ttl'] = ttl;
        this['ttl_type'] = ttlType;
        this['priority'] = priority;
    }
    public withRuleType(ruleType: number): Rules {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: number | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType() {
        return this['rule_type'];
    }
    public withContent(content: string): Rules {
        this['content'] = content;
        return this;
    }
    public withTtl(ttl: number): Rules {
        this['ttl'] = ttl;
        return this;
    }
    public withTtlType(ttlType: number): Rules {
        this['ttl_type'] = ttlType;
        return this;
    }
    public set ttlType(ttlType: number | undefined) {
        this['ttl_type'] = ttlType;
    }
    public get ttlType() {
        return this['ttl_type'];
    }
    public withPriority(priority: number): Rules {
        this['priority'] = priority;
        return this;
    }
}