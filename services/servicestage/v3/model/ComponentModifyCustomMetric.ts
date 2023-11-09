

export class ComponentModifyCustomMetric {
    public path?: string;
    public port?: number;
    public dimensions?: string;
    public constructor(path?: string, port?: number, dimensions?: string) { 
        this['path'] = path;
        this['port'] = port;
        this['dimensions'] = dimensions;
    }
    public withPath(path: string): ComponentModifyCustomMetric {
        this['path'] = path;
        return this;
    }
    public withPort(port: number): ComponentModifyCustomMetric {
        this['port'] = port;
        return this;
    }
    public withDimensions(dimensions: string): ComponentModifyCustomMetric {
        this['dimensions'] = dimensions;
        return this;
    }
}