import { ActionDeviceAlarm } from './ActionDeviceAlarm';
import { ActionDeviceCommand } from './ActionDeviceCommand';
import { ActionDisForwarding } from './ActionDisForwarding';
import { ActionIoTAForwarding } from './ActionIoTAForwarding';
import { ActionKafkaForwarding } from './ActionKafkaForwarding';
import { ActionObsForwarding } from './ActionObsForwarding';
import { ActionRomaForwarding } from './ActionRomaForwarding';
import { ActionSmnForwarding } from './ActionSmnForwarding';


export class RuleAction {
    public type: string;
    public addition?: Array<string>;
    private 'smn_forwarding'?: ActionSmnForwarding | undefined;
    private 'device_alarm'?: ActionDeviceAlarm | undefined;
    private 'device_command'?: ActionDeviceCommand | undefined;
    private 'dis_forwarding'?: ActionDisForwarding | undefined;
    private 'obs_forwarding'?: ActionObsForwarding | undefined;
    private 'roma_forwarding'?: ActionRomaForwarding | undefined;
    private 'iota_forwarding'?: ActionIoTAForwarding | undefined;
    private 'kafka_forwarding'?: ActionKafkaForwarding | undefined;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: string): RuleAction {
        this['type'] = type;
        return this;
    }
    public withAddition(addition: Array<string>): RuleAction {
        this['addition'] = addition;
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
    public withDisForwarding(disForwarding: ActionDisForwarding): RuleAction {
        this['dis_forwarding'] = disForwarding;
        return this;
    }
    public set disForwarding(disForwarding: ActionDisForwarding | undefined) {
        this['dis_forwarding'] = disForwarding;
    }
    public get disForwarding() {
        return this['dis_forwarding'];
    }
    public withObsForwarding(obsForwarding: ActionObsForwarding): RuleAction {
        this['obs_forwarding'] = obsForwarding;
        return this;
    }
    public set obsForwarding(obsForwarding: ActionObsForwarding | undefined) {
        this['obs_forwarding'] = obsForwarding;
    }
    public get obsForwarding() {
        return this['obs_forwarding'];
    }
    public withRomaForwarding(romaForwarding: ActionRomaForwarding): RuleAction {
        this['roma_forwarding'] = romaForwarding;
        return this;
    }
    public set romaForwarding(romaForwarding: ActionRomaForwarding | undefined) {
        this['roma_forwarding'] = romaForwarding;
    }
    public get romaForwarding() {
        return this['roma_forwarding'];
    }
    public withIotaForwarding(iotaForwarding: ActionIoTAForwarding): RuleAction {
        this['iota_forwarding'] = iotaForwarding;
        return this;
    }
    public set iotaForwarding(iotaForwarding: ActionIoTAForwarding | undefined) {
        this['iota_forwarding'] = iotaForwarding;
    }
    public get iotaForwarding() {
        return this['iota_forwarding'];
    }
    public withKafkaForwarding(kafkaForwarding: ActionKafkaForwarding): RuleAction {
        this['kafka_forwarding'] = kafkaForwarding;
        return this;
    }
    public set kafkaForwarding(kafkaForwarding: ActionKafkaForwarding | undefined) {
        this['kafka_forwarding'] = kafkaForwarding;
    }
    public get kafkaForwarding() {
        return this['kafka_forwarding'];
    }
}