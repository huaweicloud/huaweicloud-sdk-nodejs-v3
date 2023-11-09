

export class ComponentLifecycle {
    public type?: ComponentLifecycleTypeEnum | string;
    public scheme?: ComponentLifecycleSchemeEnum | string;
    public host?: string;
    public port?: number;
    public path?: string;
    public command?: Array<string>;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: ComponentLifecycleTypeEnum | string): ComponentLifecycle {
        this['type'] = type;
        return this;
    }
    public withScheme(scheme: ComponentLifecycleSchemeEnum | string): ComponentLifecycle {
        this['scheme'] = scheme;
        return this;
    }
    public withHost(host: string): ComponentLifecycle {
        this['host'] = host;
        return this;
    }
    public withPort(port: number): ComponentLifecycle {
        this['port'] = port;
        return this;
    }
    public withPath(path: string): ComponentLifecycle {
        this['path'] = path;
        return this;
    }
    public withCommand(command: Array<string>): ComponentLifecycle {
        this['command'] = command;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentLifecycleTypeEnum {
    HTTP = 'http',
    COMMAND = 'command'
}
/**
    * @export
    * @enum {string}
    */
export enum ComponentLifecycleSchemeEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
