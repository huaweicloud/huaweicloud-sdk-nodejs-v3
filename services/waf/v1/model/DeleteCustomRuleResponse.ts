import { CustomAction } from './CustomAction';
import { CustomRuleConditions } from './CustomRuleConditions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCustomRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
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
        super();
    }
    public withId(id: string): DeleteCustomRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteCustomRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): DeleteCustomRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withDescription(description: string): DeleteCustomRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): DeleteCustomRuleResponse {
        this['status'] = status;
        return this;
    }
    public withConditions(conditions: Array<CustomRuleConditions>): DeleteCustomRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CustomAction): DeleteCustomRuleResponse {
        this['action'] = action;
        return this;
    }
    public withActionMode(actionMode: boolean): DeleteCustomRuleResponse {
        this['action_mode'] = actionMode;
        return this;
    }
    public set actionMode(actionMode: boolean | undefined) {
        this['action_mode'] = actionMode;
    }
    public get actionMode() {
        return this['action_mode'];
    }
    public withPriority(priority: number): DeleteCustomRuleResponse {
        this['priority'] = priority;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteCustomRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withTime(time: boolean): DeleteCustomRuleResponse {
        this['time'] = time;
        return this;
    }
    public withStart(start: number): DeleteCustomRuleResponse {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): DeleteCustomRuleResponse {
        this['terminal'] = terminal;
        return this;
    }
    public withProducer(producer: number): DeleteCustomRuleResponse {
        this['producer'] = producer;
        return this;
    }
}