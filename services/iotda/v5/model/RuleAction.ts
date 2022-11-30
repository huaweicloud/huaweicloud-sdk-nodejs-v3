import { ActionDeviceAlarm } from './ActionDeviceAlarm';
import { ActionDeviceCommand } from './ActionDeviceCommand';
import { ActionSmnForwarding } from './ActionSmnForwarding';


export class RuleAction {
    public type: string;
    private 'smn_forwarding'?: ActionSmnForwarding | undefined;
    private 'device_alarm'?: ActionDeviceAlarm | undefined;
    private 'device_command'?: ActionDeviceCommand | undefined;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: string): RuleAction {
        this['type'] = type;
        return this;
    }
    public withSmnForwarding(smnForwarding: ActionSmnForwarding): RuleAction {
        this['smn_forwarding'] = smnForwarding;
        return this;
    }
    public set smnForwarding(smnForwarding: ActionSmnForwarding | undefined) {
        this['smn_forwarding'] = smnForwarding;
    }
    public get smnForwarding() {
        return this['smn_forwarding'];
    }
    public withDeviceAlarm(deviceAlarm: ActionDeviceAlarm): RuleAction {
        this['device_alarm'] = deviceAlarm;
        return this;
    }
    public set deviceAlarm(deviceAlarm: ActionDeviceAlarm | undefined) {
        this['device_alarm'] = deviceAlarm;
    }
    public get deviceAlarm() {
        return this['device_alarm'];
    }
    public withDeviceCommand(deviceCommand: ActionDeviceCommand): RuleAction {
        this['device_command'] = deviceCommand;
        return this;
    }
    public set deviceCommand(deviceCommand: ActionDeviceCommand | undefined) {
        this['device_command'] = deviceCommand;
    }
    public get deviceCommand() {
        return this['device_command'];
    }
}