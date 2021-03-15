

export class CreateOpenIdConnectConfig {
    private 'access_mode': string | undefined;
    private 'idp_url': string | undefined;
    private 'client_id': string | undefined;
    private 'authorization_endpoint'?: string | undefined;
    public scope?: string;
    private 'response_type'?: CreateOpenIdConnectConfigResponseTypeEnum | undefined;
    private 'response_mode'?: CreateOpenIdConnectConfigResponseModeEnum | undefined;
    private 'signing_key': string | undefined;
    public constructor(accessMode: any, idpUrl: any, clientId: any, signingKey: any) { 
        this['access_mode'] = accessMode;
        this['idp_url'] = idpUrl;
        this['client_id'] = clientId;
        this['signing_key'] = signingKey;
    }
    public withAccessMode(accessMode: string): CreateOpenIdConnectConfig {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode() {
        return this['access_mode'];
    }
    public withIdpUrl(idpUrl: string): CreateOpenIdConnectConfig {
        this['idp_url'] = idpUrl;
        return this;
    }
    public set idpUrl(idpUrl: string | undefined) {
        this['idp_url'] = idpUrl;
    }
    public get idpUrl() {
        return this['idp_url'];
    }
    public withClientId(clientId: string): CreateOpenIdConnectConfig {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId() {
        return this['client_id'];
    }
    public withAuthorizationEndpoint(authorizationEndpoint: string): CreateOpenIdConnectConfig {
        this['authorization_endpoint'] = authorizationEndpoint;
        return this;
    }
    public set authorizationEndpoint(authorizationEndpoint: string | undefined) {
        this['authorization_endpoint'] = authorizationEndpoint;
    }
    public get authorizationEndpoint() {
        return this['authorization_endpoint'];
    }
    public withScope(scope: string): CreateOpenIdConnectConfig {
        this['scope'] = scope;
        return this;
    }
    public withResponseType(responseType: CreateOpenIdConnectConfigResponseTypeEnum): CreateOpenIdConnectConfig {
        this['response_type'] = responseType;
        return this;
    }
    public set responseType(responseType: CreateOpenIdConnectConfigResponseTypeEnum | undefined) {
        this['response_type'] = responseType;
    }
    public get responseType() {
        return this['response_type'];
    }
    public withResponseMode(responseMode: CreateOpenIdConnectConfigResponseModeEnum): CreateOpenIdConnectConfig {
        this['response_mode'] = responseMode;
        return this;
    }
    public set responseMode(responseMode: CreateOpenIdConnectConfigResponseModeEnum | undefined) {
        this['response_mode'] = responseMode;
    }
    public get responseMode() {
        return this['response_mode'];
    }
    public withSigningKey(signingKey: string): CreateOpenIdConnectConfig {
        this['signing_key'] = signingKey;
        return this;
    }
    public set signingKey(signingKey: string | undefined) {
        this['signing_key'] = signingKey;
    }
    public get signingKey() {
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
