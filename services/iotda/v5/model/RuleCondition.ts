import { DailyTimerType } from './DailyTimerType';
import { DeviceDataCondition } from './DeviceDataCondition';
import { DeviceMessageCondition } from './DeviceMessageCondition';
import { DeviceStatusCondition } from './DeviceStatusCondition';
import { SimpleTimerType } from './SimpleTimerType';


export class RuleCondition {
    public type: string;
    private 'device_property_condition'?: DeviceDataCondition | undefined;
    private 'simple_timer_condition'?: SimpleTimerType | undefined;
    private 'daily_timer_condition'?: DailyTimerType | undefined;
    private 'device_message_condition'?: DeviceMessageCondition | undefined;
    private 'device_status_condition'?: DeviceStatusCondition | undefined;
    public constructor(type: any) { 
        this['type'] = type;
    }
    public withType(type: string): RuleCondition {
        this['type'] = type;
        return this;
    }
    public withDevicePropertyCondition(devicePropertyCondition: DeviceDataCondition): RuleCondition {
        this['device_property_condition'] = devicePropertyCondition;
        return this;
    }
    public set devicePropertyCondition(devicePropertyCondition: DeviceDataCondition | undefined) {
        this['device_property_condition'] = devicePropertyCondition;
    }
    public get devicePropertyCondition() {
        return this['device_property_condition'];
    }
    public withSimpleTimerCondition(simpleTimerCondition: SimpleTimerType): RuleCondition {
        this['simple_timer_condition'] = simpleTimerCondition;
        return this;
    }
    public set simpleTimerCondition(simpleTimerCondition: SimpleTimerType | undefined) {
        this['simple_timer_condition'] = simpleTimerCondition;
    }
    public get simpleTimerCondition() {
        return this['simple_timer_condition'];
    }
    public withDailyTimerCondition(dailyTimerCondition: DailyTimerType): RuleCondition {
        this['daily_timer_condition'] = dailyTimerCondition;
        return this;
    }
    public set dailyTimerCondition(dailyTimerCondition: DailyTimerType | undefined) {
        this['daily_timer_condition'] = dailyTimerCondition;
    }
    public get dailyTimerCondition() {
        return this['daily_timer_condition'];
    }
    public withDeviceMessageCondition(deviceMessageCondition: DeviceMessageCondition): RuleCondition {
        this['device_message_condition'] = deviceMessageCondition;
        return this;
    }
    public set deviceMessageCondition(deviceMessageCondition: DeviceMessageCondition | undefined) {
        this['device_message_condition'] = deviceMessageCondition;
    }
    public get deviceMessageCondition() {
        return this['device_message_condition'];
    }
    public withDeviceStatusCondition(deviceStatusCondition: DeviceStatusCondition): RuleCondition {
        this['device_status_condition'] = deviceStatusCondition;
        return this;
    }
    public set deviceStatusCondition(deviceStatusCondition: DeviceStatusCondition | undefined) {
        this['device_status_condition'] = deviceStatusCondition;
    }
    public get deviceStatusCondition() {
        return this['device_status_condition'];
    }
}