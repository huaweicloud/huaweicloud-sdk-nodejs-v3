

export class EndPointResponseAuthorization {
    public parameters?: object;
    public scheme?: object;
    public constructor() { 
    }
    public withParameters(parameters: object): EndPointResponseAuthorization {
        this['parameters'] = parameters;
        return this;
    }
    public withScheme(scheme: object): EndPointResponseAuthorization {
        this['scheme'] = scheme;
        return this;
    }
}