

export class ExceptRuleBo {
    public name?: string;
    public action?: string;
    public queues?: Array<string>;
    private 'except_rules'?: { [key: string]: string; };
    public constructor() { 
    }
    public withName(name: string): ExceptRuleBo {
        this['name'] = name;
        return this;
    }
    public withAction(action: string): ExceptRuleBo {
        this['action'] = action;
        return this;
    }
    public withQueues(queues: Array<string>): ExceptRuleBo {
        this['queues'] = queues;
        return this;
    }
    public withExceptRules(exceptRules: { [key: string]: string; }): ExceptRuleBo {
        this['except_rules'] = exceptRules;
        return this;
    }
    public set exceptRules(exceptRules: { [key: string]: string; }  | undefined) {
        this['except_rules'] = exceptRules;
    }
    public get exceptRules(): { [key: string]: string; } | undefined {
        return this['except_rules'];
    }
}