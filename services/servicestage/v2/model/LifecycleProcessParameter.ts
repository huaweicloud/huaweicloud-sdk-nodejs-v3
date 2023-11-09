

export class LifecycleProcessParameter {
    public command?: Array<string>;
    public host?: string;
    public port?: number;
    public path?: string;
    public constructor() { 
    }
    public withCommand(command: Array<string>): LifecycleProcessParameter {
        this['command'] = command;
        return this;
    }
    public withHost(host: string): LifecycleProcessParameter {
        this['host'] = host;
        return this;
    }
    public withPort(port: number): LifecycleProcessParameter {
        this['port'] = port;
        return this;
    }
    public withPath(path: string): LifecycleProcessParameter {
        this['path'] = path;
        return this;
    }
}