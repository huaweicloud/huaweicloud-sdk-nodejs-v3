import { Advanced } from './Advanced';
import { Condition } from './Condition';


export class IgnoreRuleBody {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public url?: string;
    public rule?: string;
    public mode?: number;
    private 'url_logic'?: string | undefined;
    public conditions?: Array<Condition>;
    public domain?: Array<string>;
    public advanced?: Array<Advanced>;
    public constructor() { 
    }
    public withId(id: string): IgnoreRuleBody {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): IgnoreRuleBody {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): IgnoreRuleBody {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): IgnoreRuleBody {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): IgnoreRuleBody {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): IgnoreRuleBody {
        this['url'] = url;
        return this;
    }
    public withRule(rule: string): IgnoreRuleBody {
        this['rule'] = rule;
        return this;
    }
    public withMode(mode: number): IgnoreRuleBody {
        this['mode'] = mode;
        return this;
    }
    public withUrlLogic(urlLogic: string): IgnoreRuleBody {
        this['url_logic'] = urlLogic;
        return this;
    }
    public set urlLogic(urlLogic: string | undefined) {
        this['url_logic'] = urlLogic;
    }
    public get urlLogic() {
        return this['url_logic'];
    }
    public withConditions(conditions: Array<Condition>): IgnoreRuleBody {
        this['conditions'] = conditions;
        return this;
    }
    public withDomain(domain: Array<string>): IgnoreRuleBody {
        this['domain'] = domain;
        return this;
    }
    public withAdvanced(advanced: Array<Advanced>): IgnoreRuleBody {
        this['advanced'] = advanced;
        return this;
    }
}