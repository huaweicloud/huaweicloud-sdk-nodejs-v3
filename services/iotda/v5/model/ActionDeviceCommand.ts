import { Cmd } from './Cmd';


export class ActionDeviceCommand {
    private 'device_id'?: string;
    public cmd?: Cmd;
    public constructor(cmd?: Cmd) { 
        this['cmd'] = cmd;
    }
    public withDeviceId(deviceId: string): ActionDeviceCommand {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withCmd(cmd: Cmd): ActionDeviceCommand {
        this['cmd'] = cmd;
        return this;
    }
}