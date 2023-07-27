

export class Ignore {
    public method?: string;
    public path?: string;
    public constructor() { 
    }
    public withMethod(method: string): Ignore {
        this['method'] = method;
        return this;
    }
    public withPath(path: string): Ignore {
        this['path'] = path;
        return this;
    }
}