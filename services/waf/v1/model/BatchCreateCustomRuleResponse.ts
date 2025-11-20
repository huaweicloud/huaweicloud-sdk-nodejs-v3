import { CustomAction } from './CustomAction';
import { CustomRuleConditions } from './CustomRuleConditions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateCustomRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public policyid?: string;
    public description?: string;
    public status?: number;
    public conditions?: Array<CustomRuleConditions>;
    public action?: CustomAction;
    private 'action_mode'?: boolean;
    public priority?: number;
    public timestamp?: number;
    public time?: boolean;
    public start?: number;
    public terminal?: number;
    public producer?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): BatchCreateCustomRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BatchCreateCustomRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): BatchCreateCustomRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withDescription(description: string): BatchCreateCustomRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): BatchCreateCustomRuleResponse {
        this['status'] = status;
        return this;
    }
    public withConditions(conditions: Array<CustomRuleConditions>): BatchCreateCustomRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CustomAction): BatchCreateCustomRuleResponse {
        this['action'] = action;
        return this;
    }
    public withActionMode(actionMode: boolean): BatchCreateCustomRuleResponse {
        this['action_mode'] = actionMode;
        return this;
    }
    public set actionMode(actionMode: boolean  | undefined) {
        this['action_mode'] = actionMode;
    }
    public get actionMode(): boolean | undefined {
        return this['action_mode'];
    }
    public withPriority(priority: number): BatchCreateCustomRuleResponse {
        this['priority'] = priority;
        return this;
    }
    public withTimestamp(timestamp: number): BatchCreateCustomRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withTime(time: boolean): BatchCreateCustomRuleResponse {
        this['time'] = time;
        return this;
    }
    public withStart(start: number): BatchCreateCustomRuleResponse {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): BatchCreateCustomRuleResponse {
        this['terminal'] = terminal;
        return this;
    }
    public withProducer(producer: number): BatchCreateCustomRuleResponse {
        this['producer'] = producer;
        return this;
    }
}