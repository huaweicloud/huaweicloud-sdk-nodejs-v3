

export class MasterEIPResponseStatus {
    public privateEndpoint?: string;
    public publicEndpoint?: string;
    public constructor() { 
    }
    public withPrivateEndpoint(privateEndpoint: string): MasterEIPResponseStatus {
        this['privateEndpoint'] = privateEndpoint;
        return this;
    }
    public withPublicEndpoint(publicEndpoint: string): MasterEIPResponseStatus {
        this['publicEndpoint'] = publicEndpoint;
        return this;
    }
}