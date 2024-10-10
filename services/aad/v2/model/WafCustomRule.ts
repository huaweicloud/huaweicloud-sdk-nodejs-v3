import { WafCustomCondition } from './WafCustomCondition';
import { WafCustomRuleAction } from './WafCustomRuleAction';


export class WafCustomRule {
    public id?: string;
    public name?: string;
    public time?: boolean;
    public start?: number;
    public terminal?: number;
    public priority?: number;
    public conditions?: Array<WafCustomCondition>;
    public action?: WafCustomRuleAction;
    private 'domain_name'?: string;
    private 'overseas_type'?: number;
    public constructor(time?: boolean, priority?: number) { 
        this['time'] = time;
        this['priority'] = priority;
    }
    public withId(id: string): WafCustomRule {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WafCustomRule {
        this['name'] = name;
        return this;
    }
    public withTime(time: boolean): WafCustomRule {
        this['time'] = time;
        return this;
    }
    public withStart(start: number): WafCustomRule {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): WafCustomRule {
        this['terminal'] = terminal;
        return this;
    }
    public withPriority(priority: number): WafCustomRule {
        this['priority'] = priority;
        return this;
    }
    public withConditions(conditions: Array<WafCustomCondition>): WafCustomRule {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: WafCustomRuleAction): WafCustomRule {
        this['action'] = action;
        return this;
    }
    public withDomainName(domainName: string): WafCustomRule {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withOverseasType(overseasType: number): WafCustomRule {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: number  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): number | undefined {
        return this['overseas_type'];
    }
}