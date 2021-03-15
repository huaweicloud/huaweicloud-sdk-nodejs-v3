

export class Cmd {
    private 'command_name': string | undefined;
    private 'command_body': object | undefined;
    private 'service_id': string | undefined;
    private 'buffer_timeout'?: number | undefined;
    private 'response_timeout'?: number | undefined;
    public mode?: string;
    public constructor(commandName: any, commandBody: any, serviceId: any) { 
        this['command_name'] = commandName;
        this['command_body'] = commandBody;
        this['service_id'] = serviceId;
    }
    public withCommandName(commandName: string): Cmd {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName() {
        return this['command_name'];
    }
    public withCommandBody(commandBody: object): Cmd {
        this['command_body'] = commandBody;
        return this;
    }
    public set commandBody(commandBody: object | undefined) {
        this['command_body'] = commandBody;
    }
    public get commandBody() {
        return this['command_body'];
    }
    public withServiceId(serviceId: string): Cmd {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId() {
        return this['service_id'];
    }
    public withBufferTimeout(bufferTimeout: number): Cmd {
        this['buffer_timeout'] = bufferTimeout;
        return this;
    }
    public set bufferTimeout(bufferTimeout: number | undefined) {
        this['buffer_timeout'] = bufferTimeout;
    }
    public get bufferTimeout() {
        return this['buffer_timeout'];
    }
    public withResponseTimeout(responseTimeout: number): Cmd {
        this['response_timeout'] = responseTimeout;
        return this;
    }
    public set responseTimeout(responseTimeout: number | undefined) {
        this['response_timeout'] = responseTimeout;
    }
    public get responseTimeout() {
        return this['response_timeout'];
    }
    public withMode(mode: string): Cmd {
        this['mode'] = mode;
        return this;
    }
}