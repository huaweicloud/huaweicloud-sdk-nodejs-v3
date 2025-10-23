import { BatchAlarmRulesBody } from './BatchAlarmRulesBody';
import { BatchUpdateActionRules } from './BatchUpdateActionRules';


export class BatchUpdateRequest {
    private 'alarm_rules'?: Array<BatchAlarmRulesBody>;
    private 'update_action_rules'?: Array<BatchUpdateActionRules>;
    private 'update_type'?: string;
    public constructor() { 
    }
    public withAlarmRules(alarmRules: Array<BatchAlarmRulesBody>): BatchUpdateRequest {
        this['alarm_rules'] = alarmRules;
        return this;
    }
    public set alarmRules(alarmRules: Array<BatchAlarmRulesBody>  | undefined) {
        this['alarm_rules'] = alarmRules;
    }
    public get alarmRules(): Array<BatchAlarmRulesBody> | undefined {
        return this['alarm_rules'];
    }
    public withUpdateActionRules(updateActionRules: Array<BatchUpdateActionRules>): BatchUpdateRequest {
        this['update_action_rules'] = updateActionRules;
        return this;
    }
    public set updateActionRules(updateActionRules: Array<BatchUpdateActionRules>  | undefined) {
        this['update_action_rules'] = updateActionRules;
    }
    public get updateActionRules(): Array<BatchUpdateActionRules> | undefined {
        return this['update_action_rules'];
    }
    public withUpdateType(updateType: string): BatchUpdateRequest {
        this['update_type'] = updateType;
        return this;
    }
    public set updateType(updateType: string  | undefined) {
        this['update_type'] = updateType;
    }
    public get updateType(): string | undefined {
        return this['update_type'];
    }
}