

export class CreateOpenIdConnectConfig {
    private 'access_mode'?: string;
    private 'idp_url'?: string;
    private 'client_id'?: string;
    private 'authorization_endpoint'?: string;
    public scope?: string;
    private 'response_type'?: CreateOpenIdConnectConfigResponseTypeEnum | string;
    private 'response_mode'?: CreateOpenIdConnectConfigResponseModeEnum | string;
    private 'signing_key'?: string;
    public constructor(accessMode?: string, idpUrl?: string, clientId?: string, signingKey?: string) { 
        this['access_mode'] = accessMode;
        this['idp_url'] = idpUrl;
        this['client_id'] = clientId;
        this['signing_key'] = signingKey;
    }
    public withAccessMode(accessMode: string): CreateOpenIdConnectConfig {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): string | undefined {
        return this['access_mode'];
    }
    public withIdpUrl(idpUrl: string): CreateOpenIdConnectConfig {
        this['idp_url'] = idpUrl;
        return this;
    }
    public set idpUrl(idpUrl: string  | undefined) {
        this['idp_url'] = idpUrl;
    }
    public get idpUrl(): string | undefined {
        return this['idp_url'];
    }
    public withClientId(clientId: string): CreateOpenIdConnectConfig {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withAuthorizationEndpoint(authorizationEndpoint: string): CreateOpenIdConnectConfig {
        this['authorization_endpoint'] = authorizationEndpoint;
        return this;
    }
    public set authorizationEndpoint(authorizationEndpoint: string  | undefined) {
        this['authorization_endpoint'] = authorizationEndpoint;
    }
    public get authorizationEndpoint(): string | undefined {
        return this['authorization_endpoint'];
    }
    public withScope(scope: string): CreateOpenIdConnectConfig {
        this['scope'] = scope;
        return this;
    }
    public withResponseType(responseType: CreateOpenIdConnectConfigResponseTypeEnum | string): CreateOpenIdConnectConfig {
        this['response_type'] = responseType;
        return this;
    }
    public set responseType(responseType: CreateOpenIdConnectConfigResponseTypeEnum | string  | undefined) {
        this['response_type'] = responseType;
    }
    public get responseType(): CreateOpenIdConnectConfigResponseTypeEnum | string | undefined {
        return this['response_type'];
    }
    public withResponseMode(responseMode: CreateOpenIdConnectConfigResponseModeEnum | string): CreateOpenIdConnectConfig {
        this['response_mode'] = responseMode;
        return this;
    }
    public set responseMode(responseMode: CreateOpenIdConnectConfigResponseModeEnum | string  | undefined) {
        this['response_mode'] = responseMode;
    }
    public get responseMode(): CreateOpenIdConnectConfigResponseModeEnum | string | undefined {
        return this['response_mode'];
    }
    public withSigningKey(signingKey: string): CreateOpenIdConnectConfig {
        this['signing_key'] = signingKey;
        return this;
    }
    public set signingKey(signingKey: string  | undefined) {
        this['signing_key'] = signingKey;
    }
    public get signingKey(): string | undefined {
        return this['signing_key'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateOpenIdConnectConfigResponseTypeEnum {
    ID_TOKEN = 'id_token'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateOpenIdConnectConfigResponseModeEnum {
    FRAGMENT = 'fragment',
    FORM_POST = 'form_post'
}
