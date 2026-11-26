

export class Oauth2AuthorizationServerMetadata {
    private 'authorization_endpoint'?: string;
    public issuer?: string;
    private 'token_endpoint'?: string;
    private 'response_types'?: Array<string>;
    private 'token_endpoint_auth_methods'?: Array<string>;
    public constructor(authorizationEndpoint?: string, issuer?: string, tokenEndpoint?: string) { 
        this['authorization_endpoint'] = authorizationEndpoint;
        this['issuer'] = issuer;
        this['token_endpoint'] = tokenEndpoint;
    }
    public withAuthorizationEndpoint(authorizationEndpoint: string): Oauth2AuthorizationServerMetadata {
        this['authorization_endpoint'] = authorizationEndpoint;
        return this;
    }
    public set authorizationEndpoint(authorizationEndpoint: string  | undefined) {
        this['authorization_endpoint'] = authorizationEndpoint;
    }
    public get authorizationEndpoint(): string | undefined {
        return this['authorization_endpoint'];
    }
    public withIssuer(issuer: string): Oauth2AuthorizationServerMetadata {
        this['issuer'] = issuer;
        return this;
    }
    public withTokenEndpoint(tokenEndpoint: string): Oauth2AuthorizationServerMetadata {
        this['token_endpoint'] = tokenEndpoint;
        return this;
    }
    public set tokenEndpoint(tokenEndpoint: string  | undefined) {
        this['token_endpoint'] = tokenEndpoint;
    }
    public get tokenEndpoint(): string | undefined {
        return this['token_endpoint'];
    }
    public withResponseTypes(responseTypes: Array<string>): Oauth2AuthorizationServerMetadata {
        this['response_types'] = responseTypes;
        return this;
    }
    public set responseTypes(responseTypes: Array<string>  | undefined) {
        this['response_types'] = responseTypes;
    }
    public get responseTypes(): Array<string> | undefined {
        return this['response_types'];
    }
    public withTokenEndpointAuthMethods(tokenEndpointAuthMethods: Array<string>): Oauth2AuthorizationServerMetadata {
        this['token_endpoint_auth_methods'] = tokenEndpointAuthMethods;
        return this;
    }
    public set tokenEndpointAuthMethods(tokenEndpointAuthMethods: Array<string>  | undefined) {
        this['token_endpoint_auth_methods'] = tokenEndpointAuthMethods;
    }
    public get tokenEndpointAuthMethods(): Array<string> | undefined {
        return this['token_endpoint_auth_methods'];
    }
}