

export class Cmd {
    private 'command_name'?: string;
    private 'command_body'?: object;
    private 'service_id'?: string;
    private 'buffer_timeout'?: number;
    private 'response_timeout'?: number;
    public mode?: string;
    public constructor(commandName?: string, commandBody?: object, serviceId?: string) { 
        this['command_name'] = commandName;
        this['command_body'] = commandBody;
        this['service_id'] = serviceId;
    }
    public withCommandName(commandName: string): Cmd {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string  | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName(): string | undefined {
        return this['command_name'];
    }
    public withCommandBody(commandBody: object): Cmd {
        this['command_body'] = commandBody;
        return this;
    }
    public set commandBody(commandBody: object  | undefined) {
        this['command_body'] = commandBody;
    }
    public get commandBody(): object | undefined {
        return this['command_body'];
    }
    public withServiceId(serviceId: string): Cmd {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBufferTimeout(bufferTimeout: number): Cmd {
        this['buffer_timeout'] = bufferTimeout;
        return this;
    }
    public set bufferTimeout(bufferTimeout: number  | undefined) {
        this['buffer_timeout'] = bufferTimeout;
    }
    public get bufferTimeout(): number | undefined {
        return this['buffer_timeout'];
    }
    public withResponseTimeout(responseTimeout: number): Cmd {
        this['response_timeout'] = responseTimeout;
        return this;
    }
    public set responseTimeout(responseTimeout: number  | undefined) {
        this['response_timeout'] = responseTimeout;
    }
    public get responseTimeout(): number | undefined {
        return this['response_timeout'];
    }
    public withMode(mode: string): Cmd {
        this['mode'] = mode;
        return this;
    }
}