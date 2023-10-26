import { Dimension } from './Dimension';


export class QueryAlarmResult {
    private 'action_enabled'?: boolean;
    private 'alarm_actions'?: Array<string>;
    private 'alarm_advice'?: string;
    private 'alarm_description'?: string;
    private 'alarm_level'?: string;
    private 'alarm_rule_id'?: string;
    private 'alarm_rule_name'?: string;
    private 'comparison_operator'?: string;
    public dimensions?: Array<Dimension>;
    private 'evaluation_periods'?: number;
    private 'id_turn_on'?: boolean;
    private 'insufficient_data_actions'?: Array<string>;
    private 'metric_name'?: string;
    public namespace?: string;
    private 'ok_actions'?: Array<string>;
    public period?: number;
    private 'policy_name'?: string;
    public resources?: Array<string>;
    private 'state_reason'?: string;
    private 'state_updated_timestamp'?: string;
    private 'state_value'?: string;
    public statistic?: string;
    public threshold?: string;
    public type?: string;
    public unit?: string;
    public constructor() { 
    }
    public withActionEnabled(actionEnabled: boolean): QueryAlarmResult {
        this['action_enabled'] = actionEnabled;
        return this;
    }
    public set actionEnabled(actionEnabled: boolean  | undefined) {
        this['action_enabled'] = actionEnabled;
    }
    public get actionEnabled(): boolean | undefined {
        return this['action_enabled'];
    }
    public withAlarmActions(alarmActions: Array<string>): QueryAlarmResult {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<string>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<string> | undefined {
        return this['alarm_actions'];
    }
    public withAlarmAdvice(alarmAdvice: string): QueryAlarmResult {
        this['alarm_advice'] = alarmAdvice;
        return this;
    }
    public set alarmAdvice(alarmAdvice: string  | undefined) {
        this['alarm_advice'] = alarmAdvice;
    }
    public get alarmAdvice(): string | undefined {
        return this['alarm_advice'];
    }
    public withAlarmDescription(alarmDescription: string): QueryAlarmResult {
        this['alarm_description'] = alarmDescription;
        return this;
    }
    public set alarmDescription(alarmDescription: string  | undefined) {
        this['alarm_description'] = alarmDescription;
    }
    public get alarmDescription(): string | undefined {
        return this['alarm_description'];
    }
    public withAlarmLevel(alarmLevel: string): QueryAlarmResult {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): string | undefined {
        return this['alarm_level'];
    }
    public withAlarmRuleId(alarmRuleId: string): QueryAlarmResult {
        this['alarm_rule_id'] = alarmRuleId;
        return this;
    }
    public set alarmRuleId(alarmRuleId: string  | undefined) {
        this['alarm_rule_id'] = alarmRuleId;
    }
    public get alarmRuleId(): string | undefined {
        return this['alarm_rule_id'];
    }
    public withAlarmRuleName(alarmRuleName: string): QueryAlarmResult {
        this['alarm_rule_name'] = alarmRuleName;
        return this;
    }
    public set alarmRuleName(alarmRuleName: string  | undefined) {
        this['alarm_rule_name'] = alarmRuleName;
    }
    public get alarmRuleName(): string | undefined {
        return this['alarm_rule_name'];
    }
    public withComparisonOperator(comparisonOperator: string): QueryAlarmResult {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withDimensions(dimensions: Array<Dimension>): QueryAlarmResult {
        this['dimensions'] = dimensions;
        return this;
    }
    public withEvaluationPeriods(evaluationPeriods: number): QueryAlarmResult {
        this['evaluation_periods'] = evaluationPeriods;
        return this;
    }
    public set evaluationPeriods(evaluationPeriods: number  | undefined) {
        this['evaluation_periods'] = evaluationPeriods;
    }
    public get evaluationPeriods(): number | undefined {
        return this['evaluation_periods'];
    }
    public withIdTurnOn(idTurnOn: boolean): QueryAlarmResult {
        this['id_turn_on'] = idTurnOn;
        return this;
    }
    public set idTurnOn(idTurnOn: boolean  | undefined) {
        this['id_turn_on'] = idTurnOn;
    }
    public get idTurnOn(): boolean | undefined {
        return this['id_turn_on'];
    }
    public withInsufficientDataActions(insufficientDataActions: Array<string>): QueryAlarmResult {
        this['insufficient_data_actions'] = insufficientDataActions;
        return this;
    }
    public set insufficientDataActions(insufficientDataActions: Array<string>  | undefined) {
        this['insufficient_data_actions'] = insufficientDataActions;
    }
    public get insufficientDataActions(): Array<string> | undefined {
        return this['insufficient_data_actions'];
    }
    public withMetricName(metricName: string): QueryAlarmResult {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withNamespace(namespace: string): QueryAlarmResult {
        this['namespace'] = namespace;
        return this;
    }
    public withOkActions(okActions: Array<string>): QueryAlarmResult {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<string>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<string> | undefined {
        return this['ok_actions'];
    }
    public withPeriod(period: number): QueryAlarmResult {
        this['period'] = period;
        return this;
    }
    public withPolicyName(policyName: string): QueryAlarmResult {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withResources(resources: Array<string>): QueryAlarmResult {
        this['resources'] = resources;
        return this;
    }
    public withStateReason(stateReason: string): QueryAlarmResult {
        this['state_reason'] = stateReason;
        return this;
    }
    public set stateReason(stateReason: string  | undefined) {
        this['state_reason'] = stateReason;
    }
    public get stateReason(): string | undefined {
        return this['state_reason'];
    }
    public withStateUpdatedTimestamp(stateUpdatedTimestamp: string): QueryAlarmResult {
        this['state_updated_timestamp'] = stateUpdatedTimestamp;
        return this;
    }
    public set stateUpdatedTimestamp(stateUpdatedTimestamp: string  | undefined) {
        this['state_updated_timestamp'] = stateUpdatedTimestamp;
    }
    public get stateUpdatedTimestamp(): string | undefined {
        return this['state_updated_timestamp'];
    }
    public withStateValue(stateValue: string): QueryAlarmResult {
        this['state_value'] = stateValue;
        return this;
    }
    public set stateValue(stateValue: string  | undefined) {
        this['state_value'] = stateValue;
    }
    public get stateValue(): string | undefined {
        return this['state_value'];
    }
    public withStatistic(statistic: string): QueryAlarmResult {
        this['statistic'] = statistic;
        return this;
    }
    public withThreshold(threshold: string): QueryAlarmResult {
        this['threshold'] = threshold;
        return this;
    }
    public withType(type: string): QueryAlarmResult {
        this['type'] = type;
        return this;
    }
    public withUnit(unit: string): QueryAlarmResult {
        this['unit'] = unit;
        return this;
    }
}