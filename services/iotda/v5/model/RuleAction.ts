import { ActionDeviceAlarm } from './ActionDeviceAlarm';
import { ActionDeviceCommand } from './ActionDeviceCommand';
import { ActionSmnForwarding } from './ActionSmnForwarding';


export class RuleAction {
    public type?: string;
    private 'device_command'?: ActionDeviceCommand;
    private 'smn_forwarding'?: ActionSmnForwarding;
    private 'device_alarm'?: ActionDeviceAlarm;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): RuleAction {
        this['type'] = type;
        return this;
    }
    public withDeviceCommand(deviceCommand: ActionDeviceCommand): RuleAction {
        this['device_command'] = deviceCommand;
        return this;
    }
    public set deviceCommand(deviceCommand: ActionDeviceCommand  | undefined) {
        this['device_command'] = deviceCommand;
    }
    public get deviceCommand(): ActionDeviceCommand | undefined {
        return this['device_command'];
    }
    public withSmnForwarding(smnForwarding: ActionSmnForwarding): RuleAction {
        this['smn_forwarding'] = smnForwarding;
        return this;
    }
    public set smnForwarding(smnForwarding: ActionSmnForwarding  | undefined) {
        this['smn_forwarding'] = smnForwarding;
    }
    public get smnForwarding(): ActionSmnForwarding | undefined {
        return this['smn_forwarding'];
    }
    public withDeviceAlarm(deviceAlarm: ActionDeviceAlarm): RuleAction {
        this['device_alarm'] = deviceAlarm;
        return this;
    }
    public set deviceAlarm(deviceAlarm: ActionDeviceAlarm  | undefined) {
        this['device_alarm'] = deviceAlarm;
    }
    public get deviceAlarm(): ActionDeviceAlarm | undefined {
        return this['device_alarm'];
    }
}