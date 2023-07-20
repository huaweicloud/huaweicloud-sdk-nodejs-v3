import { ConditionGroup } from './ConditionGroup';
import { DeviceSide } from './DeviceSide';
import { RuleAction } from './RuleAction';


export class RuleResponse {
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
    public constructor(name?: string, conditionGroup?: ConditionGroup, actions?: Array<RuleAction>, ruleType?: string) { 
        this['name'] = name;
        this['condition_group'] = conditionGroup;
        this['actions'] = actions;
        this['rule_type'] = ruleType;
    }
    public withRuleId(ruleId: string): RuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withName(name: string): RuleResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): RuleResponse {
        this['description'] = description;
        return this;
    }
    public withConditionGroup(conditionGroup: ConditionGroup): RuleResponse {
        this['condition_group'] = conditionGroup;
        return this;
    }
    public set conditionGroup(conditionGroup: ConditionGroup  | undefined) {
        this['condition_group'] = conditionGroup;
    }
    public get conditionGroup(): ConditionGroup | undefined {
        return this['condition_group'];
    }
    public withActions(actions: Array<RuleAction>): RuleResponse {
        this['actions'] = actions;
        return this;
    }
    public withRuleType(ruleType: string): RuleResponse {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withStatus(status: string): RuleResponse {
        this['status'] = status;
        return this;
    }
    public withAppId(appId: string): RuleResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withEdgeNodeIds(edgeNodeIds: Array<string>): RuleResponse {
        this['edge_node_ids'] = edgeNodeIds;
        return this;
    }
    public set edgeNodeIds(edgeNodeIds: Array<string>  | undefined) {
        this['edge_node_ids'] = edgeNodeIds;
    }
    public get edgeNodeIds(): Array<string> | undefined {
        return this['edge_node_ids'];
    }
    public withLastUpdateTime(lastUpdateTime: string): RuleResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
    public withDeviceSide(deviceSide: DeviceSide): RuleResponse {
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