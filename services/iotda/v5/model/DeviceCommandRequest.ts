

export class DeviceCommandRequest {
    private 'service_id'?: string | undefined;
    private 'command_name'?: string | undefined;
    public paras: object;
    public constructor(paras?: any) { 
        this['paras'] = paras;
    }
    public withServiceId(serviceId: string): DeviceCommandRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId() {
        return this['service_id'];
    }
    public withCommandName(commandName: string): DeviceCommandRequest {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName() {
        return this['command_name'];
    }
    public withParas(paras: object): DeviceCommandRequest {
        this['paras'] = paras;
        return this;
    }
}