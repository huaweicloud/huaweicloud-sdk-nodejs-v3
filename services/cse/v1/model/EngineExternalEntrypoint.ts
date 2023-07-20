import { EntrypointItem } from './EntrypointItem';


export class EngineExternalEntrypoint {
    private 'external_address'?: string;
    private 'public_address'?: string;
    private 'service_endpoint'?: { [key: string]: EntrypointItem; };
    private 'public_service_endpoint'?: { [key: string]: EntrypointItem; };
    public constructor() { 
    }
    public withExternalAddress(externalAddress: string): EngineExternalEntrypoint {
        this['external_address'] = externalAddress;
        return this;
    }
    public set externalAddress(externalAddress: string  | undefined) {
        this['external_address'] = externalAddress;
    }
    public get externalAddress(): string | undefined {
        return this['external_address'];
    }
    public withPublicAddress(publicAddress: string): EngineExternalEntrypoint {
        this['public_address'] = publicAddress;
        return this;
    }
    public set publicAddress(publicAddress: string  | undefined) {
        this['public_address'] = publicAddress;
    }
    public get publicAddress(): string | undefined {
        return this['public_address'];
    }
    public withServiceEndpoint(serviceEndpoint: { [key: string]: EntrypointItem; }): EngineExternalEntrypoint {
        this['service_endpoint'] = serviceEndpoint;
        return this;
    }
    public set serviceEndpoint(serviceEndpoint: { [key: string]: EntrypointItem; }  | undefined) {
        this['service_endpoint'] = serviceEndpoint;
    }
    public get serviceEndpoint(): { [key: string]: EntrypointItem; } | undefined {
        return this['service_endpoint'];
    }
    public withPublicServiceEndpoint(publicServiceEndpoint: { [key: string]: EntrypointItem; }): EngineExternalEntrypoint {
        this['public_service_endpoint'] = publicServiceEndpoint;
        return this;
    }
    public set publicServiceEndpoint(publicServiceEndpoint: { [key: string]: EntrypointItem; }  | undefined) {
        this['public_service_endpoint'] = publicServiceEndpoint;
    }
    public get publicServiceEndpoint(): { [key: string]: EntrypointItem; } | undefined {
        return this['public_service_endpoint'];
    }
}