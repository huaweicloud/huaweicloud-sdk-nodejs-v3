import { Dimension } from './Dimension';


export class UpdateAlarmRuleParam {
    private 'action_enabled'?: boolean;
    private 'alarm_actions'?: Array<string>;
    private 'alarm_advice'?: string;
    private 'alarm_description'?: string;
    private 'alarm_level'?: UpdateAlarmRuleParamAlarmLevelEnum | number;
    private 'alarm_rule_name'?: string;
    private 'comparison_operator'?: UpdateAlarmRuleParamComparisonOperatorEnum | string;
    public dimensions?: Array<Dimension>;
    private 'evaluation_periods'?: number;
    private 'is_turn_on'?: boolean;
    private 'insufficient_data_actions'?: Array<string>;
    private 'metric_name'?: string;
    public namespace?: string;
    private 'ok_actions'?: Array<string>;
    public period?: UpdateAlarmRuleParamPeriodEnum | number;
    public statistic?: UpdateAlarmRuleParamStatisticEnum | string;
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
    public withActionEnabled(actionEnabled: boolean): UpdateAlarmRuleParam {
        this['action_enabled'] = actionEnabled;
        return this;
    }
    public set actionEnabled(actionEnabled: boolean  | undefined) {
        this['action_enabled'] = actionEnabled;
    }
    public get actionEnabled(): boolean | undefined {
        return this['action_enabled'];
    }
    public withAlarmActions(alarmActions: Array<string>): UpdateAlarmRuleParam {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<string>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<string> | undefined {
        return this['alarm_actions'];
    }
    public withAlarmAdvice(alarmAdvice: string): UpdateAlarmRuleParam {
        this['alarm_advice'] = alarmAdvice;
        return this;
    }
    public set alarmAdvice(alarmAdvice: string  | undefined) {
        this['alarm_advice'] = alarmAdvice;
    }
    public get alarmAdvice(): string | undefined {
        return this['alarm_advice'];
    }
    public withAlarmDescription(alarmDescription: string): UpdateAlarmRuleParam {
        this['alarm_description'] = alarmDescription;
        return this;
    }
    public set alarmDescription(alarmDescription: string  | undefined) {
        this['alarm_description'] = alarmDescription;
    }
    public get alarmDescription(): string | undefined {
        return this['alarm_description'];
    }
    public withAlarmLevel(alarmLevel: UpdateAlarmRuleParamAlarmLevelEnum | number): UpdateAlarmRuleParam {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: UpdateAlarmRuleParamAlarmLevelEnum | number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): UpdateAlarmRuleParamAlarmLevelEnum | number | undefined {
        return this['alarm_level'];
    }
    public withAlarmRuleName(alarmRuleName: string): UpdateAlarmRuleParam {
        this['alarm_rule_name'] = alarmRuleName;
        return this;
    }
    public set alarmRuleName(alarmRuleName: string  | undefined) {
        this['alarm_rule_name'] = alarmRuleName;
    }
    public get alarmRuleName(): string | undefined {
        return this['alarm_rule_name'];
    }
    public withComparisonOperator(comparisonOperator: UpdateAlarmRuleParamComparisonOperatorEnum | string): UpdateAlarmRuleParam {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: UpdateAlarmRuleParamComparisonOperatorEnum | string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): UpdateAlarmRuleParamComparisonOperatorEnum | string | undefined {
        return this['comparison_operator'];
    }
    public withDimensions(dimensions: Array<Dimension>): UpdateAlarmRuleParam {
        this['dimensions'] = dimensions;
        return this;
    }
    public withEvaluationPeriods(evaluationPeriods: number): UpdateAlarmRuleParam {
        this['evaluation_periods'] = evaluationPeriods;
        return this;
    }
    public set evaluationPeriods(evaluationPeriods: number  | undefined) {
        this['evaluation_periods'] = evaluationPeriods;
    }
    public get evaluationPeriods(): number | undefined {
        return this['evaluation_periods'];
    }
    public withIsTurnOn(isTurnOn: boolean): UpdateAlarmRuleParam {
        this['is_turn_on'] = isTurnOn;
        return this;
    }
    public set isTurnOn(isTurnOn: boolean  | undefined) {
        this['is_turn_on'] = isTurnOn;
    }
    public get isTurnOn(): boolean | undefined {
        return this['is_turn_on'];
    }
    public withInsufficientDataActions(insufficientDataActions: Array<string>): UpdateAlarmRuleParam {
        this['insufficient_data_actions'] = insufficientDataActions;
        return this;
    }
    public set insufficientDataActions(insufficientDataActions: Array<string>  | undefined) {
        this['insufficient_data_actions'] = insufficientDataActions;
    }
    public get insufficientDataActions(): Array<string> | undefined {
        return this['insufficient_data_actions'];
    }
    public withMetricName(metricName: string): UpdateAlarmRuleParam {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withNamespace(namespace: string): UpdateAlarmRuleParam {
        this['namespace'] = namespace;
        return this;
    }
    public withOkActions(okActions: Array<string>): UpdateAlarmRuleParam {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<string>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<string> | undefined {
        return this['ok_actions'];
    }
    public withPeriod(period: UpdateAlarmRuleParamPeriodEnum | number): UpdateAlarmRuleParam {
        this['period'] = period;
        return this;
    }
    public withStatistic(statistic: UpdateAlarmRuleParamStatisticEnum | string): UpdateAlarmRuleParam {
        this['statistic'] = statistic;
        return this;
    }
    public withThreshold(threshold: string): UpdateAlarmRuleParam {
        this['threshold'] = threshold;
        return this;
    }
    public withUnit(unit: string): UpdateAlarmRuleParam {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAlarmRuleParamAlarmLevelEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateAlarmRuleParamComparisonOperatorEnum {
    LessThan = '<',
    GreaterThan = '>',
    LessThanOrEqualTo = '<=',
    GreaterThanOrEqualTo = '>='
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateAlarmRuleParamPeriodEnum {
    NUMBER_60000 = 60000,
    NUMBER_300000 = 300000,
    NUMBER_900000 = 900000,
    NUMBER_36000000 = 36000000
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateAlarmRuleParamStatisticEnum {
    MAXIMUM = 'maximum',
    MINIMUM = 'minimum',
    AVERAGE = 'average',
    SUM = 'sum',
    SAMPLECOUNT = 'sampleCount'
}
