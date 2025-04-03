

export class CreateTokenReqBody {
    private 'client_id'?: string;
    private 'client_secret'?: string;
    public code?: string;
    private 'device_code'?: string;
    private 'grant_type'?: CreateTokenReqBodyGrantTypeEnum | string;
    private 'redirect_uri'?: string;
    private 'refresh_token'?: string;
    public scopes?: Array<string>;
    public constructor(clientId?: string, clientSecret?: string, grantType?: string) { 
        this['client_id'] = clientId;
        this['client_secret'] = clientSecret;
        this['grant_type'] = grantType;
    }
    public withClientId(clientId: string): CreateTokenReqBody {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withClientSecret(clientSecret: string): CreateTokenReqBody {
        this['client_secret'] = clientSecret;
        return this;
    }
    public set clientSecret(clientSecret: string  | undefined) {
        this['client_secret'] = clientSecret;
    }
    public get clientSecret(): string | undefined {
        return this['client_secret'];
    }
    public withCode(code: string): CreateTokenReqBody {
        this['code'] = code;
        return this;
    }
    public withDeviceCode(deviceCode: string): CreateTokenReqBody {
        this['device_code'] = deviceCode;
        return this;
    }
    public set deviceCode(deviceCode: string  | undefined) {
        this['device_code'] = deviceCode;
    }
    public get deviceCode(): string | undefined {
        return this['device_code'];
    }
    public withGrantType(grantType: CreateTokenReqBodyGrantTypeEnum | string): CreateTokenReqBody {
        this['grant_type'] = grantType;
        return this;
    }
    public set grantType(grantType: CreateTokenReqBodyGrantTypeEnum | string  | undefined) {
        this['grant_type'] = grantType;
    }
    public get grantType(): CreateTokenReqBodyGrantTypeEnum | string | undefined {
        return this['grant_type'];
    }
    public withRedirectUri(redirectUri: string): CreateTokenReqBody {
        this['redirect_uri'] = redirectUri;
        return this;
    }
    public set redirectUri(redirectUri: string  | undefined) {
        this['redirect_uri'] = redirectUri;
    }
    public get redirectUri(): string | undefined {
        return this['redirect_uri'];
    }
    public withRefreshToken(refreshToken: string): CreateTokenReqBody {
        this['refresh_token'] = refreshToken;
        return this;
    }
    public set refreshToken(refreshToken: string  | undefined) {
        this['refresh_token'] = refreshToken;
    }
    public get refreshToken(): string | undefined {
        return this['refresh_token'];
    }
    public withScopes(scopes: Array<string>): CreateTokenReqBody {
        this['scopes'] = scopes;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTokenReqBodyGrantTypeEnum {
    AUTHORIZATION_CODE = 'authorization_code',
    URNIETFPARAMSOAUTHGRANT_TYPEDEVICE_CODE = 'urn:ietf:params:oauth:grant-type:device_code'
}
