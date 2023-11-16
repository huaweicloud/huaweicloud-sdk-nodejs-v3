

export class CreateBussinessSceneSpecMatches {
    public name?: string;
    public apiPath?: object;
    public headers?: object;
    public method?: Array<string>;
    public serviceName?: string;
    public constructor() { 
    }
    public withName(name: string): CreateBussinessSceneSpecMatches {
        this['name'] = name;
        return this;
    }
    public withApiPath(apiPath: object): CreateBussinessSceneSpecMatches {
        this['apiPath'] = apiPath;
        return this;
    }
    public withHeaders(headers: object): CreateBussinessSceneSpecMatches {
        this['headers'] = headers;
        return this;
    }
    public withMethod(method: Array<string>): CreateBussinessSceneSpecMatches {
        this['method'] = method;
        return this;
    }
    public withServiceName(serviceName: string): CreateBussinessSceneSpecMatches {
        this['serviceName'] = serviceName;
        return this;
    }
}