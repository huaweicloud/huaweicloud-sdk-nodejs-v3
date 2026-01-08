import { L7Rule } from './L7Rule';


export class PolicyLabel {
    public id?: string;
    public name?: string;
    public priority?: string;
    public action?: string;
    private 'admin_state_up'?: boolean;
    public rules?: Array<L7Rule>;
    public constructor(id?: string, name?: string, action?: string, adminStateUp?: boolean, rules?: Array<L7Rule>) { 
        this['id'] = id;
        this['name'] = name;
        this['action'] = action;
        this['admin_state_up'] = adminStateUp;
        this['rules'] = rules;
    }
    public withId(id: string): PolicyLabel {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PolicyLabel {
        this['name'] = name;
        return this;
    }
    public withPriority(priority: string): PolicyLabel {
        this['priority'] = priority;
        return this;
    }
    public withAction(action: string): PolicyLabel {
        this['action'] = action;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): PolicyLabel {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withRules(rules: Array<L7Rule>): PolicyLabel {
        this['rules'] = rules;
        return this;
    }
}