

export class ComponentInfoCustomMetric {
    public path?: string;
    public port?: number;
    public dimensions?: string;
    public constructor() { 
    }
    public withPath(path: string): ComponentInfoCustomMetric {
        this['path'] = path;
        return this;
    }
    public withPort(port: number): ComponentInfoCustomMetric {
        this['port'] = port;
        return this;
    }
    public withDimensions(dimensions: string): ComponentInfoCustomMetric {
        this['dimensions'] = dimensions;
        return this;
    }
}