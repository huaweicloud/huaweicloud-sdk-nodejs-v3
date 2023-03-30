import { CustomAction } from './CustomAction';
import { CustomRuleConditions } from './CustomRuleConditions';


export class CustomRule {
    public id?: string;
    public policyid?: string;
    public description?: string;
    public status?: number;
    public conditions?: Array<CustomRuleConditions>;
    public action?: CustomAction;
    private 'action_mode'?: boolean | undefined;
    public priority?: number;
    public timestamp?: number;
    public time?: boolean;
    public start?: number;
    public terminal?: number;
    public producer?: number;
    public constructor() { 
    }
    public withId(id: string): CustomRule {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): CustomRule {
        this['policyid'] = policyid;
        return this;
    }
    public withDescription(description: string): CustomRule {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): CustomRule {
        this['status'] = status;
        return this;
    }
    public withConditions(conditions: Array<CustomRuleConditions>): CustomRule {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CustomAction): CustomRule {
        this['action'] = action;
        return this;
    }
    public withActionMode(actionMode: boolean): CustomRule {
        this['action_mode'] = actionMode;
        return this;
    }
    public set actionMode(actionMode: boolean | undefined) {
        this['action_mode'] = actionMode;
    }
    public get actionMode() {
        return this['action_mode'];
    }
    public withPriority(priority: number): CustomRule {
        this['priority'] = priority;
        return this;
    }
    public withTimestamp(timestamp: number): CustomRule {
        this['timestamp'] = timestamp;
        return this;
    }
    public withTime(time: boolean): CustomRule {
        this['time'] = time;
        return this;
    }
    public withStart(start: number): CustomRule {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): CustomRule {
        this['terminal'] = terminal;
        return this;
    }
    public withProducer(producer: number): CustomRule {
        this['producer'] = producer;
        return this;
    }
}