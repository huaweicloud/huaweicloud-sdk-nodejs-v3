

export class ComponentProbe {
    public type?: ComponentProbeTypeEnum | string;
    public delay?: number;
    public timeout?: number;
    public scheme?: ComponentProbeSchemeEnum | string;
    public host?: string;
    public port?: number;
    public path?: string;
    public command?: Array<string>;
    public constructor(type?: string, delay?: number, timeout?: number) { 
        this['type'] = type;
        this['delay'] = delay;
        this['timeout'] = timeout;
    }
    public withType(type: ComponentProbeTypeEnum | string): ComponentProbe {
        this['type'] = type;
        return this;
    }
    public withDelay(delay: number): ComponentProbe {
        this['delay'] = delay;
        return this;
    }
    public withTimeout(timeout: number): ComponentProbe {
        this['timeout'] = timeout;
        return this;
    }
    public withScheme(scheme: ComponentProbeSchemeEnum | string): ComponentProbe {
        this['scheme'] = scheme;
        return this;
    }
    public withHost(host: string): ComponentProbe {
        this['host'] = host;
        return this;
    }
    public withPort(port: number): ComponentProbe {
        this['port'] = port;
        return this;
    }
    public withPath(path: string): ComponentProbe {
        this['path'] = path;
        return this;
    }
    public withCommand(command: Array<string>): ComponentProbe {
        this['command'] = command;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentProbeTypeEnum {
    HTTP = 'http',
    TCP = 'tcp',
    COMMAND = 'command'
}
/**
    * @export
    * @enum {string}
    */
export enum ComponentProbeSchemeEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
