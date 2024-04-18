import { Dimension } from './Dimension';


export class AlarmRuleParam {
    private 'action_enabled'?: boolean;
    private 'alarm_actions'?: Array<string>;
    private 'alarm_advice'?: string;
    private 'alarm_description'?: string;
    private 'alarm_level'?: AlarmRuleParamAlarmLevelEnum | number;
    private 'alarm_rule_name'?: string;
    private 'comparison_operator'?: AlarmRuleParamComparisonOperatorEnum | string;
    public dimensions?: Array<Dimension>;
    private 'evaluation_periods'?: number;
    private 'is_turn_on'?: boolean;
    private 'insufficient_data_actions'?: Array<string>;
    private 'metric_name'?: string;
    public namespace?: string;
    private 'ok_actions'?: Array<string>;
    public period?: AlarmRuleParamPeriodEnum | number;
    public statistic?: AlarmRuleParamStatisticEnum | string;
    public threshold?: string;
    public unit?: string;
    public constructor(alarmLevel?: number, alarmRuleName?: string, comparisonOperator?: string, dimensions?: Array<Dimension>, evaluationPeriods?: number, metricName?: string, namespace?: string, period?: number, statistic?: string, threshold?: string, unit?: string) { 
        this['alarm_level'] = alarmLevel;
        this['alarm_rule_name'] = alarmRuleName;
        this['comparison_operator'] = comparisonOperator;
        this['dimensions'] = dimensions;
        this['evaluation_periods'] = evaluationPeriods;
        this['metric_name'] = metricName;
        this['namespace'] = namespace;
        this['period'] = period;
        this['statistic'] = statistic;
        this['threshold'] = threshold;
        this['unit'] = unit;
    }
    public withActionEnabled(actionEnabled: boolean): AlarmRuleParam {
        this['action_enabled'] = actionEnabled;
        return this;
    }
    public set actionEnabled(actionEnabled: boolean  | undefined) {
        this['action_enabled'] = actionEnabled;
    }
    public get actionEnabled(): boolean | undefined {
        return this['action_enabled'];
    }
    public withAlarmActions(alarmActions: Array<string>): AlarmRuleParam {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<string>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<string> | undefined {
        return this['alarm_actions'];
    }
    public withAlarmAdvice(alarmAdvice: string): AlarmRuleParam {
        this['alarm_advice'] = alarmAdvice;
        return this;
    }
    public set alarmAdvice(alarmAdvice: string  | undefined) {
        this['alarm_advice'] = alarmAdvice;
    }
    public get alarmAdvice(): string | undefined {
        return this['alarm_advice'];
    }
    public withAlarmDescription(alarmDescription: string): AlarmRuleParam {
        this['alarm_description'] = alarmDescription;
        return this;
    }
    public set alarmDescription(alarmDescription: string  | undefined) {
        this['alarm_description'] = alarmDescription;
    }
    public get alarmDescription(): string | undefined {
        return this['alarm_description'];
    }
    public withAlarmLevel(alarmLevel: AlarmRuleParamAlarmLevelEnum | number): AlarmRuleParam {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: AlarmRuleParamAlarmLevelEnum | number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): AlarmRuleParamAlarmLevelEnum | number | undefined {
        return this['alarm_level'];
    }
    public withAlarmRuleName(alarmRuleName: string): AlarmRuleParam {
        this['alarm_rule_name'] = alarmRuleName;
        return this;
    }
    public set alarmRuleName(alarmRuleName: string  | undefined) {
        this['alarm_rule_name'] = alarmRuleName;
    }
    public get alarmRuleName(): string | undefined {
        return this['alarm_rule_name'];
    }
    public withComparisonOperator(comparisonOperator: AlarmRuleParamComparisonOperatorEnum | string): AlarmRuleParam {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: AlarmRuleParamComparisonOperatorEnum | string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): AlarmRuleParamComparisonOperatorEnum | string | undefined {
        return this['comparison_operator'];
    }
    public withDimensions(dimensions: Array<Dimension>): AlarmRuleParam {
        this['dimensions'] = dimensions;
        return this;
    }
    public withEvaluationPeriods(evaluationPeriods: number): AlarmRuleParam {
        this['evaluation_periods'] = evaluationPeriods;
        return this;
    }
    public set evaluationPeriods(evaluationPeriods: number  | undefined) {
        this['evaluation_periods'] = evaluationPeriods;
    }
    public get evaluationPeriods(): number | undefined {
        return this['evaluation_periods'];
    }
    public withIsTurnOn(isTurnOn: boolean): AlarmRuleParam {
        this['is_turn_on'] = isTurnOn;
        return this;
    }
    public set isTurnOn(isTurnOn: boolean  | undefined) {
        this['is_turn_on'] = isTurnOn;
    }
    public get isTurnOn(): boolean | undefined {
        return this['is_turn_on'];
    }
    public withInsufficientDataActions(insufficientDataActions: Array<string>): AlarmRuleParam {
        this['insufficient_data_actions'] = insufficientDataActions;
        return this;
    }
    public set insufficientDataActions(insufficientDataActions: Array<string>  | undefined) {
        this['insufficient_data_actions'] = insufficientDataActions;
    }
    public get insufficientDataActions(): Array<string> | undefined {
        return this['insufficient_data_actions'];
    }
    public withMetricName(metricName: string): AlarmRuleParam {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withNamespace(namespace: string): AlarmRuleParam {
        this['namespace'] = namespace;
        return this;
    }
    public withOkActions(okActions: Array<string>): AlarmRuleParam {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<string>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<string> | undefined {
        return this['ok_actions'];
    }
    public withPeriod(period: AlarmRuleParamPeriodEnum | number): AlarmRuleParam {
        this['period'] = period;
        return this;
    }
    public withStatistic(statistic: AlarmRuleParamStatisticEnum | string): AlarmRuleParam {
        this['statistic'] = statistic;
        return this;
    }
    public withThreshold(threshold: string): AlarmRuleParam {
        this['threshold'] = threshold;
        return this;
    }
    public withUnit(unit: string): AlarmRuleParam {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmRuleParamAlarmLevelEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
/**
    * @export
    * @enum {string}
    */
export enum AlarmRuleParamComparisonOperatorEnum {
    LessThan = '<',
    GreaterThan = '>',
    LessThanOrEqualTo = '<=',
    GreaterThanOrEqualTo = '>='
}
/**
    * @export
    * @enum {string}
    */
export enum AlarmRuleParamPeriodEnum {
    NUMBER_60000 = 60000,
    NUMBER_300000 = 300000,
    NUMBER_900000 = 900000,
    NUMBER_3600000 = 3600000
}
/**
    * @export
    * @enum {string}
    */
export enum AlarmRuleParamStatisticEnum {
    MAXIMUM = 'maximum',
    MINIMUM = 'minimum',
    AVERAGE = 'average',
    SUM = 'sum',
    SAMPLECOUNT = 'sampleCount'
}
