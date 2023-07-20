import { DailyTimerType } from './DailyTimerType';
import { DeviceDataCondition } from './DeviceDataCondition';
import { DeviceLinkageStatusCondition } from './DeviceLinkageStatusCondition';
import { SimpleTimerType } from './SimpleTimerType';


export class RuleCondition {
    public type?: string;
    private 'device_property_condition'?: DeviceDataCondition;
    private 'simple_timer_condition'?: SimpleTimerType;
    private 'daily_timer_condition'?: DailyTimerType;
    private 'device_linkage_status_condition'?: DeviceLinkageStatusCondition;
    public constructor(type?: string) { 
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
    public set devicePropertyCondition(devicePropertyCondition: DeviceDataCondition  | undefined) {
        this['device_property_condition'] = devicePropertyCondition;
    }
    public get devicePropertyCondition(): DeviceDataCondition | undefined {
        return this['device_property_condition'];
    }
    public withSimpleTimerCondition(simpleTimerCondition: SimpleTimerType): RuleCondition {
        this['simple_timer_condition'] = simpleTimerCondition;
        return this;
    }
    public set simpleTimerCondition(simpleTimerCondition: SimpleTimerType  | undefined) {
        this['simple_timer_condition'] = simpleTimerCondition;
    }
    public get simpleTimerCondition(): SimpleTimerType | undefined {
        return this['simple_timer_condition'];
    }
    public withDailyTimerCondition(dailyTimerCondition: DailyTimerType): RuleCondition {
        this['daily_timer_condition'] = dailyTimerCondition;
        return this;
    }
    public set dailyTimerCondition(dailyTimerCondition: DailyTimerType  | undefined) {
        this['daily_timer_condition'] = dailyTimerCondition;
    }
    public get dailyTimerCondition(): DailyTimerType | undefined {
        return this['daily_timer_condition'];
    }
    public withDeviceLinkageStatusCondition(deviceLinkageStatusCondition: DeviceLinkageStatusCondition): RuleCondition {
        this['device_linkage_status_condition'] = deviceLinkageStatusCondition;
        return this;
    }
    public set deviceLinkageStatusCondition(deviceLinkageStatusCondition: DeviceLinkageStatusCondition  | undefined) {
        this['device_linkage_status_condition'] = deviceLinkageStatusCondition;
    }
    public get deviceLinkageStatusCondition(): DeviceLinkageStatusCondition | undefined {
        return this['device_linkage_status_condition'];
    }
}