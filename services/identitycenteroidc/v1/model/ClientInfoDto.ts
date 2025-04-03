

export class ClientInfoDto {
    private 'authorization_endpoint'?: string;
    private 'client_id'?: string;
    private 'client_id_issued_at'?: number;
    private 'client_secret'?: string;
    private 'client_secret_expires_at'?: number;
    private 'token_endpoint'?: string;
    public scopes?: Array<string>;
    public constructor(authorizationEndpoint?: string, clientId?: string, clientIdIssuedAt?: number, clientSecret?: string, clientSecretExpiresAt?: number, tokenEndpoint?: string) { 
        this['authorization_endpoint'] = authorizationEndpoint;
        this['client_id'] = clientId;
        this['client_id_issued_at'] = clientIdIssuedAt;
        this['client_secret'] = clientSecret;
        this['client_secret_expires_at'] = clientSecretExpiresAt;
        this['token_endpoint'] = tokenEndpoint;
    }
    public withAuthorizationEndpoint(authorizationEndpoint: string): ClientInfoDto {
        this['authorization_endpoint'] = authorizationEndpoint;
        return this;
    }
    public set authorizationEndpoint(authorizationEndpoint: string  | undefined) {
        this['authorization_endpoint'] = authorizationEndpoint;
    }
    public get authorizationEndpoint(): string | undefined {
        return this['authorization_endpoint'];
    }
    public withClientId(clientId: string): ClientInfoDto {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withClientIdIssuedAt(clientIdIssuedAt: number): ClientInfoDto {
        this['client_id_issued_at'] = clientIdIssuedAt;
        return this;
    }
    public set clientIdIssuedAt(clientIdIssuedAt: number  | undefined) {
        this['client_id_issued_at'] = clientIdIssuedAt;
    }
    public get clientIdIssuedAt(): number | undefined {
        return this['client_id_issued_at'];
    }
    public withClientSecret(clientSecret: string): ClientInfoDto {
        this['client_secret'] = clientSecret;
        return this;
    }
    public set clientSecret(clientSecret: string  | undefined) {
        this['client_secret'] = clientSecret;
    }
    public get clientSecret(): string | undefined {
        return this['client_secret'];
    }
    public withClientSecretExpiresAt(clientSecretExpiresAt: number): ClientInfoDto {
        this['client_secret_expires_at'] = clientSecretExpiresAt;
        return this;
    }
    public set clientSecretExpiresAt(clientSecretExpiresAt: number  | undefined) {
        this['client_secret_expires_at'] = clientSecretExpiresAt;
    }
    public get clientSecretExpiresAt(): number | undefined {
        return this['client_secret_expires_at'];
    }
    public withTokenEndpoint(tokenEndpoint: string): ClientInfoDto {
        this['token_endpoint'] = tokenEndpoint;
        return this;
    }
    public set tokenEndpoint(tokenEndpoint: string  | undefined) {
        this['token_endpoint'] = tokenEndpoint;
    }
    public get tokenEndpoint(): string | undefined {
        return this['token_endpoint'];
    }
    public withScopes(scopes: Array<string>): ClientInfoDto {
        this['scopes'] = scopes;
        return this;
    }
}