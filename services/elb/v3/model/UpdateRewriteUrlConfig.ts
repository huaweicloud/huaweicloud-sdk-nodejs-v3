

export class UpdateRewriteUrlConfig {
    public host?: string;
    public path?: string;
    public query?: string;
    public constructor() { 
    }
    public withHost(host: string): UpdateRewriteUrlConfig {
        this['host'] = host;
        return this;
    }
    public withPath(path: string): UpdateRewriteUrlConfig {
        this['path'] = path;
        return this;
    }
    public withQuery(query: string): UpdateRewriteUrlConfig {
        this['query'] = query;
        return this;
    }
}