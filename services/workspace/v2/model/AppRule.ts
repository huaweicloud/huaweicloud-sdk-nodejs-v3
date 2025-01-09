import { Rule } from './Rule';


export class AppRule {
    public id?: string;
    public name?: string;
    public description?: string;
    public rule?: Rule;
    private 'rule_source'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): AppRule {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppRule {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AppRule {
        this['description'] = description;
        return this;
    }
    public withRule(rule: Rule): AppRule {
        this['rule'] = rule;
        return this;
    }
    public withRuleSource(ruleSource: string): AppRule {
        this['rule_source'] = ruleSource;
        return this;
    }
    public set ruleSource(ruleSource: string  | undefined) {
        this['rule_source'] = ruleSource;
    }
    public get ruleSource(): string | undefined {
        return this['rule_source'];
    }
    public withCreateTime(createTime: Date): AppRule {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): AppRule {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}