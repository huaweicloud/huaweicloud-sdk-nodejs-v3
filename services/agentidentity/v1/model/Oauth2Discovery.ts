import { Oauth2AuthorizationServerMetadata } from './Oauth2AuthorizationServerMetadata';


export class Oauth2Discovery {
    private 'discovery_url'?: string;
    private 'authorization_server_metadata'?: Oauth2AuthorizationServerMetadata;
    public constructor() { 
    }
    public withDiscoveryUrl(discoveryUrl: string): Oauth2Discovery {
        this['discovery_url'] = discoveryUrl;
        return this;
    }
    public set discoveryUrl(discoveryUrl: string  | undefined) {
        this['discovery_url'] = discoveryUrl;
    }
    public get discoveryUrl(): string | undefined {
        return this['discovery_url'];
    }
    public withAuthorizationServerMetadata(authorizationServerMetadata: Oauth2AuthorizationServerMetadata): Oauth2Discovery {
        this['authorization_server_metadata'] = authorizationServerMetadata;
        return this;
    }
    public set authorizationServerMetadata(authorizationServerMetadata: Oauth2AuthorizationServerMetadata  | undefined) {
        this['authorization_server_metadata'] = authorizationServerMetadata;
    }
    public get authorizationServerMetadata(): Oauth2AuthorizationServerMetadata | undefined {
        return this['authorization_server_metadata'];
    }
}