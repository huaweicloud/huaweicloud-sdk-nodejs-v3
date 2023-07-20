

export class DeviceCommandRequest {
    private 'service_id'?: string;
    private 'command_name'?: string;
    public paras?: object;
    public constructor(paras?: object) { 
        this['paras'] = paras;
    }
    public withServiceId(serviceId: string): DeviceCommandRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withCommandName(commandName: string): DeviceCommandRequest {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string  | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName(): string | undefined {
        return this['command_name'];
    }
    public withParas(paras: object): DeviceCommandRequest {
        this['paras'] = paras;
        return this;
    }
}