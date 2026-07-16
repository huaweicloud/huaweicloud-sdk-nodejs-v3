

export class HttpGet {
    public path?: string;
    public port?: number;
    public constructor() { 
    }
    public withPath(path: string): HttpGet {
        this['path'] = path;
        return this;
    }
    public withPort(port: number): HttpGet {
        this['port'] = port;
        return this;
    }
}