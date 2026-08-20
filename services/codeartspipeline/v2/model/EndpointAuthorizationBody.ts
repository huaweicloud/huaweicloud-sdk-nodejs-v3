

export class EndpointAuthorizationBody {
    public parameters?: object;
    public scheme?: string;
    public constructor() { 
    }
    public withParameters(parameters: object): EndpointAuthorizationBody {
        this['parameters'] = parameters;
        return this;
    }
    public withScheme(scheme: string): EndpointAuthorizationBody {
        this['scheme'] = scheme;
        return this;
    }
}