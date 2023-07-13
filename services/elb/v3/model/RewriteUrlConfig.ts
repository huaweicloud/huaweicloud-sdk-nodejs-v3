

export class RewriteUrlConfig {
    public host?: string;
    public path?: string;
    public query?: string;
    public constructor() { 
    }
    public withHost(host: string): RewriteUrlConfig {
        this['host'] = host;
        return this;
    }
    public withPath(path: string): RewriteUrlConfig {
        this['path'] = path;
        return this;
    }
    public withQuery(query: string): RewriteUrlConfig {
        this['query'] = query;
        return this;
    }
}