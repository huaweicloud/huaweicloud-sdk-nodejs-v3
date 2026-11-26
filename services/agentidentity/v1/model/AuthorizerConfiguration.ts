import { CustomJWTAuthorizerConfiguration } from './CustomJWTAuthorizerConfiguration';
import { KeyAuthAuthorizerConfiguration } from './KeyAuthAuthorizerConfiguration';


export class AuthorizerConfiguration {
    private 'custom_jwt'?: CustomJWTAuthorizerConfiguration;
    private 'key_auth'?: KeyAuthAuthorizerConfiguration;
    public constructor() { 
    }
    public withCustomJwt(customJwt: CustomJWTAuthorizerConfiguration): AuthorizerConfiguration {
        this['custom_jwt'] = customJwt;
        return this;
    }
    public set customJwt(customJwt: CustomJWTAuthorizerConfiguration  | undefined) {
        this['custom_jwt'] = customJwt;
    }
    public get customJwt(): CustomJWTAuthorizerConfiguration | undefined {
        return this['custom_jwt'];
    }
    public withKeyAuth(keyAuth: KeyAuthAuthorizerConfiguration): AuthorizerConfiguration {
        this['key_auth'] = keyAuth;
        return this;
    }
    public set keyAuth(keyAuth: KeyAuthAuthorizerConfiguration  | undefined) {
        this['key_auth'] = keyAuth;
    }
    public get keyAuth(): KeyAuthAuthorizerConfiguration | undefined {
        return this['key_auth'];
    }
}