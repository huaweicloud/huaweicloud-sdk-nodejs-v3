import { ConditionGroup } from './ConditionGroup';
import { DeviceSide } from './DeviceSide';
import { RuleAction } from './RuleAction';


export class Rule {
    public name: string;
    public description?: string;
    private 'condition_group': ConditionGroup | undefined;
    public actions: Array<RuleAction>;
    private 'rule_type': string | undefined;
    public status?: string;
    private 'app_id'?: string | undefined;
    private 'device_side'?: DeviceSide | undefined;
    public constructor(name?: any, conditionGroup?: any, actions?: any, ruleType?: any) { 
        this['name'] = name;
        this['condition_group'] = conditionGroup;
        this['actions'] = actions;
        this['rule_type'] = ruleType;
    }
    public withName(name: string): Rule {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Rule {
        this['description'] = description;
        return this;
    }
    public withConditionGroup(conditionGroup: ConditionGroup): Rule {
        this['condition_group'] = conditionGroup;
        return this;
    }
    public set conditionGroup(conditionGroup: ConditionGroup | undefined) {
        this['condition_group'] = conditionGroup;
    }
    public get conditionGroup() {
        return this['condition_group'];
    }
    public withActions(actions: Array<RuleAction>): Rule {
        this['actions'] = actions;
        return this;
    }
    public withRuleType(ruleType: string): Rule {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType() {
        return this['rule_type'];
    }
    public withStatus(status: string): Rule {
        this['status'] = status;
        return this;
    }
    public withAppId(appId: string): Rule {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withDeviceSide(deviceSide: DeviceSide): Rule {
        this['device_side'] = deviceSide;
        return this;
    }
    public set deviceSide(deviceSide: DeviceSide | undefined) {
        this['device_side'] = deviceSide;
    }
    public get deviceSide() {
        return this['device_side'];
    }
}