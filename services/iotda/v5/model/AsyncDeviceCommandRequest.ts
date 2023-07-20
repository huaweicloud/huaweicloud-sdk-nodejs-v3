

export class AsyncDeviceCommandRequest {
    private 'service_id'?: string;
    private 'command_name'?: string;
    public paras?: object;
    private 'expire_time'?: number;
    private 'send_strategy'?: string;
    public constructor(paras?: object, sendStrategy?: string) { 
        this['paras'] = paras;
        this['send_strategy'] = sendStrategy;
    }
    public withServiceId(serviceId: string): AsyncDeviceCommandRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withCommandName(commandName: string): AsyncDeviceCommandRequest {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string  | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName(): string | undefined {
        return this['command_name'];
    }
    public withParas(paras: object): AsyncDeviceCommandRequest {
        this['paras'] = paras;
        return this;
    }
    public withExpireTime(expireTime: number): AsyncDeviceCommandRequest {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withSendStrategy(sendStrategy: string): AsyncDeviceCommandRequest {
        this['send_strategy'] = sendStrategy;
        return this;
    }
    public set sendStrategy(sendStrategy: string  | undefined) {
        this['send_strategy'] = sendStrategy;
    }
    public get sendStrategy(): string | undefined {
        return this['send_strategy'];
    }
}