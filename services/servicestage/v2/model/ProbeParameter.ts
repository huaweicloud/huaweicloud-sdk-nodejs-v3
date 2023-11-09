

export class ProbeParameter {
    public scheme?: ProbeParameterSchemeEnum | string;
    public host?: string;
    public port?: number;
    public path?: string;
    public command?: Array<string>;
    public constructor() { 
    }
    public withScheme(scheme: ProbeParameterSchemeEnum | string): ProbeParameter {
        this['scheme'] = scheme;
        return this;
    }
    public withHost(host: string): ProbeParameter {
        this['host'] = host;
        return this;
    }
    public withPort(port: number): ProbeParameter {
        this['port'] = port;
        return this;
    }
    public withPath(path: string): ProbeParameter {
        this['path'] = path;
        return this;
    }
    public withCommand(command: Array<string>): ProbeParameter {
        this['command'] = command;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProbeParameterSchemeEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
