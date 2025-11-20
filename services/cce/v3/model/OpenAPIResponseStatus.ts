

export class OpenAPIResponseStatus {
    public privateEndpoint?: string;
    public publicEndpoint?: string;
    public constructor() { 
    }
    public withPrivateEndpoint(privateEndpoint: string): OpenAPIResponseStatus {
        this['privateEndpoint'] = privateEndpoint;
        return this;
    }
    public withPublicEndpoint(publicEndpoint: string): OpenAPIResponseStatus {
        this['publicEndpoint'] = publicEndpoint;
        return this;
    }
}