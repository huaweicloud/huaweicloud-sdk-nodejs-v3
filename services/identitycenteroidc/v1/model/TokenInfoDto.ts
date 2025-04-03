

export class TokenInfoDto {
    private 'access_token'?: string;
    private 'expires_in'?: number;
    private 'id_token'?: string;
    private 'refresh_token'?: string;
    private 'token_type'?: string;
    public constructor() { 
    }
    public withAccessToken(accessToken: string): TokenInfoDto {
        this['access_token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access_token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access_token'];
    }
    public withExpiresIn(expiresIn: number): TokenInfoDto {
        this['expires_in'] = expiresIn;
        return this;
    }
    public set expiresIn(expiresIn: number  | undefined) {
        this['expires_in'] = expiresIn;
    }
    public get expiresIn(): number | undefined {
        return this['expires_in'];
    }
    public withIdToken(idToken: string): TokenInfoDto {
        this['id_token'] = idToken;
        return this;
    }
    public set idToken(idToken: string  | undefined) {
        this['id_token'] = idToken;
    }
    public get idToken(): string | undefined {
        return this['id_token'];
    }
    public withRefreshToken(refreshToken: string): TokenInfoDto {
        this['refresh_token'] = refreshToken;
        return this;
    }
    public set refreshToken(refreshToken: string  | undefined) {
        this['refresh_token'] = refreshToken;
    }
    public get refreshToken(): string | undefined {
        return this['refresh_token'];
    }
    public withTokenType(tokenType: string): TokenInfoDto {
        this['token_type'] = tokenType;
        return this;
    }
    public set tokenType(tokenType: string  | undefined) {
        this['token_type'] = tokenType;
    }
    public get tokenType(): string | undefined {
        return this['token_type'];
    }
}