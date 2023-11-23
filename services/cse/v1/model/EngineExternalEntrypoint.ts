import { EntrypointItem } from './EntrypointItem';


export class EngineExternalEntrypoint {
    public externalAddress?: string;
    public publicAddress?: string;
    public serviceEndpoint?: { [key: string]: EntrypointItem; };
    public publicServiceEndpoint?: { [key: string]: EntrypointItem; };
    public constructor() { 
    }
    public withExternalAddress(externalAddress: string): EngineExternalEntrypoint {
        this['externalAddress'] = externalAddress;
        return this;
    }
    public withPublicAddress(publicAddress: string): EngineExternalEntrypoint {
        this['publicAddress'] = publicAddress;
        return this;
    }
    public withServiceEndpoint(serviceEndpoint: { [key: string]: EntrypointItem; }): EngineExternalEntrypoint {
        this['serviceEndpoint'] = serviceEndpoint;
        return this;
    }
    public withPublicServiceEndpoint(publicServiceEndpoint: { [key: string]: EntrypointItem; }): EngineExternalEntrypoint {
        this['publicServiceEndpoint'] = publicServiceEndpoint;
        return this;
    }
}