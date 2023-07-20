import { ConditionGroup } from './ConditionGroup';
import { DeviceSide } from './DeviceSide';
import { RuleAction } from './RuleAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRuleResponse extends SdkResponse {
    private 'rule_id'?: string;
    public name?: string;
    public description?: string;
    private 'condition_group'?: ConditionGroup;
    public actions?: Array<RuleAction>;
    private 'rule_type'?: string;
    public status?: string;
    private 'app_id'?: string;
    private 'edge_node_ids'?: Array<string>;
    private 'last_update_time'?: string;
    private 'device_side'?: DeviceSide;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): CreateRuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withName(name: string): CreateRuleResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateRuleResponse {
        this['description'] = description;
        return this;
    }
    public withConditionGroup(conditionGroup: ConditionGroup): CreateRuleResponse {
        this['condition_group'] = conditionGroup;
        return this;
    }
    public set conditionGroup(conditionGroup: ConditionGroup  | undefined) {
        this['condition_group'] = conditionGroup;
    }
    public get conditionGroup(): ConditionGroup | undefined {
        return this['condition_group'];
    }
    public withActions(actions: Array<RuleAction>): CreateRuleResponse {
        this['actions'] = actions;
        return this;
    }
    public withRuleType(ruleType: string): CreateRuleResponse {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withStatus(status: string): CreateRuleResponse {
        this['status'] = status;
        return this;
    }
    public withAppId(appId: string): CreateRuleResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withEdgeNodeIds(edgeNodeIds: Array<string>): CreateRuleResponse {
        this['edge_node_ids'] = edgeNodeIds;
        return this;
    }
    public set edgeNodeIds(edgeNodeIds: Array<string>  | undefined) {
        this['edge_node_ids'] = edgeNodeIds;
    }
    public get edgeNodeIds(): Array<string> | undefined {
        return this['edge_node_ids'];
    }
    public withLastUpdateTime(lastUpdateTime: string): CreateRuleResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
    public withDeviceSide(deviceSide: DeviceSide): CreateRuleResponse {
        this['device_side'] = deviceSide;
        return this;
    }
    public set deviceSide(deviceSide: DeviceSide  | undefined) {
        this['device_side'] = deviceSide;
    }
    public get deviceSide(): DeviceSide | undefined {
        return this['device_side'];
    }
}