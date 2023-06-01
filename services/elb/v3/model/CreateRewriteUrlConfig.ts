

export class CreateRewriteUrlConfig {
    public host?: string;
    public path?: string;
    public query?: string;
    public constructor() { 
    }
    public withHost(host: string): CreateRewriteUrlConfig {
        this['host'] = host;
        return this;
    }
    public withPath(path: string): CreateRewriteUrlConfig {
        this['path'] = path;
        return this;
    }
    public withQuery(query: string): CreateRewriteUrlConfig {
        this['query'] = query;
        return this;
    }
}