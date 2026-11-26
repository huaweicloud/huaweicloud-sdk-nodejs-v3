import { CustomClaimValidation } from './CustomClaimValidation';


export class CustomJWTAuthorizerConfiguration {
    private 'discovery_url'?: string;
    private 'allowed_audience'?: Array<string>;
    private 'allowed_clients'?: Array<string>;
    private 'allowed_scopes'?: Array<string>;
    private 'custom_claims'?: Array<CustomClaimValidation>;
    public constructor(discoveryUrl?: string) { 
        this['discovery_url'] = discoveryUrl;
    }
    public withDiscoveryUrl(discoveryUrl: string): CustomJWTAuthorizerConfiguration {
        this['discovery_url'] = discoveryUrl;
        return this;
    }
    public set discoveryUrl(discoveryUrl: string  | undefined) {
        this['discovery_url'] = discoveryUrl;
    }
    public get discoveryUrl(): string | undefined {
        return this['discovery_url'];
    }
    public withAllowedAudience(allowedAudience: Array<string>): CustomJWTAuthorizerConfiguration {
        this['allowed_audience'] = allowedAudience;
        return this;
    }
    public set allowedAudience(allowedAudience: Array<string>  | undefined) {
        this['allowed_audience'] = allowedAudience;
    }
    public get allowedAudience(): Array<string> | undefined {
        return this['allowed_audience'];
    }
    public withAllowedClients(allowedClients: Array<string>): CustomJWTAuthorizerConfiguration {
        this['allowed_clients'] = allowedClients;
        return this;
    }
    public set allowedClients(allowedClients: Array<string>  | undefined) {
        this['allowed_clients'] = allowedClients;
    }
    public get allowedClients(): Array<string> | undefined {
        return this['allowed_clients'];
    }
    public withAllowedScopes(allowedScopes: Array<string>): CustomJWTAuthorizerConfiguration {
        this['allowed_scopes'] = allowedScopes;
        return this;
    }
    public set allowedScopes(allowedScopes: Array<string>  | undefined) {
        this['allowed_scopes'] = allowedScopes;
    }
    public get allowedScopes(): Array<string> | undefined {
        return this['allowed_scopes'];
    }
    public withCustomClaims(customClaims: Array<CustomClaimValidation>): CustomJWTAuthorizerConfiguration {
        this['custom_claims'] = customClaims;
        return this;
    }
    public set customClaims(customClaims: Array<CustomClaimValidation>  | undefined) {
        this['custom_claims'] = customClaims;
    }
    public get customClaims(): Array<CustomClaimValidation> | undefined {
        return this['custom_claims'];
    }
}