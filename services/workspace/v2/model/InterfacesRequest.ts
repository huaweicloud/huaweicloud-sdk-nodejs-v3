

export class InterfacesRequest {
    public method?: string;
    public params?: { [key: string]: string; };
    public headers?: { [key: string]: string; };
    public body?: string;
    public url?: string;
    public configs?: { [key: string]: object; };
    public constructor() { 
    }
    public withMethod(method: string): InterfacesRequest {
        this['method'] = method;
        return this;
    }
    public withParams(params: { [key: string]: string; }): InterfacesRequest {
        this['params'] = params;
        return this;
    }
    public withHeaders(headers: { [key: string]: string; }): InterfacesRequest {
        this['headers'] = headers;
        return this;
    }
    public withBody(body: string): InterfacesRequest {
        this['body'] = body;
        return this;
    }
    public withUrl(url: string): InterfacesRequest {
        this['url'] = url;
        return this;
    }
    public withConfigs(configs: { [key: string]: object; }): InterfacesRequest {
        this['configs'] = configs;
        return this;
    }
}