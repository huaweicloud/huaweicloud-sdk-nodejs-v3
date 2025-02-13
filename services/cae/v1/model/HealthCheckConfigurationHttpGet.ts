

export class HealthCheckConfigurationHttpGet {
    public path?: string;
    public port?: number;
    public scheme?: HealthCheckConfigurationHttpGetSchemeEnum | string;
    public constructor() { 
    }
    public withPath(path: string): HealthCheckConfigurationHttpGet {
        this['path'] = path;
        return this;
    }
    public withPort(port: number): HealthCheckConfigurationHttpGet {
        this['port'] = port;
        return this;
    }
    public withScheme(scheme: HealthCheckConfigurationHttpGetSchemeEnum | string): HealthCheckConfigurationHttpGet {
        this['scheme'] = scheme;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HealthCheckConfigurationHttpGetSchemeEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
