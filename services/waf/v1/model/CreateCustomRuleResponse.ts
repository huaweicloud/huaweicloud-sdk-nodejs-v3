import { CustomAction } from './CustomAction';
import { CustomRuleConditions } from './CustomRuleConditions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCustomRuleResponse extends SdkResponse {
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
    public start?: number;
    public terminal?: number;
    public producer?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateCustomRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateCustomRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): CreateCustomRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withDescription(description: string): CreateCustomRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): CreateCustomRuleResponse {
        this['status'] = status;
        return this;
    }
    public withConditions(conditions: Array<CustomRuleConditions>): CreateCustomRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CustomAction): CreateCustomRuleResponse {
        this['action'] = action;
        return this;
    }
    public withActionMode(actionMode: boolean): CreateCustomRuleResponse {
        this['action_mode'] = actionMode;
        return this;
    }
    public set actionMode(actionMode: boolean | undefined) {
        this['action_mode'] = actionMode;
    }
    public get actionMode() {
        return this['action_mode'];
    }
    public withPriority(priority: number): CreateCustomRuleResponse {
        this['priority'] = priority;
        return this;
    }
    public withTimestamp(timestamp: number): CreateCustomRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStart(start: number): CreateCustomRuleResponse {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): CreateCustomRuleResponse {
        this['terminal'] = terminal;
        return this;
    }
    public withProducer(producer: number): CreateCustomRuleResponse {
        this['producer'] = producer;
        return this;
    }
}