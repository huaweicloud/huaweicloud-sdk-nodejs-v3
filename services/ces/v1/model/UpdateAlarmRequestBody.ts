import { AlarmActions } from './AlarmActions';
import { Condition } from './Condition';


export class UpdateAlarmRequestBody {
    private 'alarm_name'?: string;
    private 'alarm_description'?: string;
    public condition?: Condition;
    private 'alarm_action_enabled'?: boolean;
    private 'alarm_level'?: number;
    private 'alarm_type'?: UpdateAlarmRequestBodyAlarmTypeEnum | string;
    private 'alarm_actions'?: Array<AlarmActions>;
    private 'insufficientdata_actions'?: Array<AlarmActions>;
    private 'ok_actions'?: Array<AlarmActions>;
    public constructor() { 
    }
    public withAlarmName(alarmName: string): UpdateAlarmRequestBody {
        this['alarm_name'] = alarmName;
        return this;
    }
    public set alarmName(alarmName: string  | undefined) {
        this['alarm_name'] = alarmName;
    }
    public get alarmName(): string | undefined {
        return this['alarm_name'];
    }
    public withAlarmDescription(alarmDescription: string): UpdateAlarmRequestBody {
        this['alarm_description'] = alarmDescription;
        return this;
    }
    public set alarmDescription(alarmDescription: string  | undefined) {
        this['alarm_description'] = alarmDescription;
    }
    public get alarmDescription(): string | undefined {
        return this['alarm_description'];
    }
    public withCondition(condition: Condition): UpdateAlarmRequestBody {
        this['condition'] = condition;
        return this;
    }
    public withAlarmActionEnabled(alarmActionEnabled: boolean): UpdateAlarmRequestBody {
        this['alarm_action_enabled'] = alarmActionEnabled;
        return this;
    }
    public set alarmActionEnabled(alarmActionEnabled: boolean  | undefined) {
        this['alarm_action_enabled'] = alarmActionEnabled;
    }
    public get alarmActionEnabled(): boolean | undefined {
        return this['alarm_action_enabled'];
    }
    public withAlarmLevel(alarmLevel: number): UpdateAlarmRequestBody {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
    public withAlarmType(alarmType: UpdateAlarmRequestBodyAlarmTypeEnum | string): UpdateAlarmRequestBody {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: UpdateAlarmRequestBodyAlarmTypeEnum | string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): UpdateAlarmRequestBodyAlarmTypeEnum | string | undefined {
        return this['alarm_type'];
    }
    public withAlarmActions(alarmActions: Array<AlarmActions>): UpdateAlarmRequestBody {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<AlarmActions>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<AlarmActions> | undefined {
        return this['alarm_actions'];
    }
    public withInsufficientdataActions(insufficientdataActions: Array<AlarmActions>): UpdateAlarmRequestBody {
        this['insufficientdata_actions'] = insufficientdataActions;
        return this;
    }
    public set insufficientdataActions(insufficientdataActions: Array<AlarmActions>  | undefined) {
        this['insufficientdata_actions'] = insufficientdataActions;
    }
    public get insufficientdataActions(): Array<AlarmActions> | undefined {
        return this['insufficientdata_actions'];
    }
    public withOkActions(okActions: Array<AlarmActions>): UpdateAlarmRequestBody {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<AlarmActions>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<AlarmActions> | undefined {
        return this['ok_actions'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAlarmRequestBodyAlarmTypeEnum {
    EVENT_SYS = 'EVENT.SYS',
    EVENT_CUSTOM = 'EVENT.CUSTOM',
    RESOURCE_GROUP = 'RESOURCE_GROUP'
}
