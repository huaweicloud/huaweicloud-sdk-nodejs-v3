

export class UpdateOpenIdConnectConfig {
    private 'access_mode'?: string;
    private 'idp_url'?: string;
    private 'client_id'?: string;
    private 'authorization_endpoint'?: string;
    public scope?: string;
    private 'response_type'?: UpdateOpenIdConnectConfigResponseTypeEnum | string;
    private 'response_mode'?: UpdateOpenIdConnectConfigResponseModeEnum | string;
    private 'signing_key'?: string;
    public constructor() { 
    }
    public withAccessMode(accessMode: string): UpdateOpenIdConnectConfig {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): string | undefined {
        return this['access_mode'];
    }
    public withIdpUrl(idpUrl: string): UpdateOpenIdConnectConfig {
        this['idp_url'] = idpUrl;
        return this;
    }
    public set idpUrl(idpUrl: string  | undefined) {
        this['idp_url'] = idpUrl;
    }
    public get idpUrl(): string | undefined {
        return this['idp_url'];
    }
    public withClientId(clientId: string): UpdateOpenIdConnectConfig {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withAuthorizationEndpoint(authorizationEndpoint: string): UpdateOpenIdConnectConfig {
        this['authorization_endpoint'] = authorizationEndpoint;
        return this;
    }
    public set authorizationEndpoint(authorizationEndpoint: string  | undefined) {
        this['authorization_endpoint'] = authorizationEndpoint;
    }
    public get authorizationEndpoint(): string | undefined {
        return this['authorization_endpoint'];
    }
    public withScope(scope: string): UpdateOpenIdConnectConfig {
        this['scope'] = scope;
        return this;
    }
    public withResponseType(responseType: UpdateOpenIdConnectConfigResponseTypeEnum | string): UpdateOpenIdConnectConfig {
        this['response_type'] = responseType;
        return this;
    }
    public set responseType(responseType: UpdateOpenIdConnectConfigResponseTypeEnum | string  | undefined) {
        this['response_type'] = responseType;
    }
    public get responseType(): UpdateOpenIdConnectConfigResponseTypeEnum | string | undefined {
        return this['response_type'];
    }
    public withResponseMode(responseMode: UpdateOpenIdConnectConfigResponseModeEnum | string): UpdateOpenIdConnectConfig {
        this['response_mode'] = responseMode;
        return this;
    }
    public set responseMode(responseMode: UpdateOpenIdConnectConfigResponseModeEnum | string  | undefined) {
        this['response_mode'] = responseMode;
    }
    public get responseMode(): UpdateOpenIdConnectConfigResponseModeEnum | string | undefined {
        return this['response_mode'];
    }
    public withSigningKey(signingKey: string): UpdateOpenIdConnectConfig {
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
export enum UpdateOpenIdConnectConfigResponseTypeEnum {
    ID_TOKEN = 'id_token'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateOpenIdConnectConfigResponseModeEnum {
    FRAGMENT = 'fragment',
    FORM_POST = 'form_post'
}
