import { CustomAction } from './CustomAction';
import { CustomRuleConditions } from './CustomRuleConditions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCustomRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public policyid?: string;
    public description?: string;
    public status?: number;
    public conditions?: Array<CustomRuleConditions>;
    public action?: CustomAction;
    private 'action_mode'?: boolean | undefined;
    public priority?: number;
    public time?: boolean;
    public start?: number;
    public terminal?: number;
    public producer?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateCustomRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateCustomRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): UpdateCustomRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withDescription(description: string): UpdateCustomRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): UpdateCustomRuleResponse {
        this['status'] = status;
        return this;
    }
    public withConditions(conditions: Array<CustomRuleConditions>): UpdateCustomRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CustomAction): UpdateCustomRuleResponse {
        this['action'] = action;
        return this;
    }
    public withActionMode(actionMode: boolean): UpdateCustomRuleResponse {
        this['action_mode'] = actionMode;
        return this;
    }
    public set actionMode(actionMode: boolean | undefined) {
        this['action_mode'] = actionMode;
    }
    public get actionMode() {
        return this['action_mode'];
    }
    public withPriority(priority: number): UpdateCustomRuleResponse {
        this['priority'] = priority;
        return this;
    }
    public withTime(time: boolean): UpdateCustomRuleResponse {
        this['time'] = time;
        return this;
    }
    public withStart(start: number): UpdateCustomRuleResponse {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): UpdateCustomRuleResponse {
        this['terminal'] = terminal;
        return this;
    }
    public withProducer(producer: number): UpdateCustomRuleResponse {
        this['producer'] = producer;
        return this;
    }
}