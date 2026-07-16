

export class Metrics {
    public endpoint?: string;
    public path?: string;
    public port?: string;
    public scheme?: string;
    private 'metrics_source'?: string;
    public constructor(endpoint?: string, port?: string, scheme?: string) { 
        this['endpoint'] = endpoint;
        this['port'] = port;
        this['scheme'] = scheme;
    }
    public withEndpoint(endpoint: string): Metrics {
        this['endpoint'] = endpoint;
        return this;
    }
    public withPath(path: string): Metrics {
        this['path'] = path;
        return this;
    }
    public withPort(port: string): Metrics {
        this['port'] = port;
        return this;
    }
    public withScheme(scheme: string): Metrics {
        this['scheme'] = scheme;
        return this;
    }
    public withMetricsSource(metricsSource: string): Metrics {
        this['metrics_source'] = metricsSource;
        return this;
    }
    public set metricsSource(metricsSource: string  | undefined) {
        this['metrics_source'] = metricsSource;
    }
    public get metricsSource(): string | undefined {
        return this['metrics_source'];
    }
}