

export class HttpGetDTO {
    public path?: string;
    public port?: number;
    public host?: string;
    public scheme?: HttpGetDTOSchemeEnum | string;
    public constructor(path?: string, port?: number, scheme?: string) { 
        this['path'] = path;
        this['port'] = port;
        this['scheme'] = scheme;
    }
    public withPath(path: string): HttpGetDTO {
        this['path'] = path;
        return this;
    }
    public withPort(port: number): HttpGetDTO {
        this['port'] = port;
        return this;
    }
    public withHost(host: string): HttpGetDTO {
        this['host'] = host;
        return this;
    }
    public withScheme(scheme: HttpGetDTOSchemeEnum | string): HttpGetDTO {
        this['scheme'] = scheme;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HttpGetDTOSchemeEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
