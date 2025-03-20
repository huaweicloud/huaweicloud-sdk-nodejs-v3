import { UnscopedTokenUser } from './UnscopedTokenUser';


export class IdpToken {
    private 'issued_at'?: string;
    private 'expires_at'?: string;
    public methods?: Array<string>;
    public user?: UnscopedTokenUser;
    public constructor(issuedAt?: string, expiresAt?: string, methods?: Array<string>, user?: UnscopedTokenUser) { 
        this['issued_at'] = issuedAt;
        this['expires_at'] = expiresAt;
        this['methods'] = methods;
        this['user'] = user;
    }
    public withIssuedAt(issuedAt: string): IdpToken {
        this['issued_at'] = issuedAt;
        return this;
    }
    public set issuedAt(issuedAt: string  | undefined) {
        this['issued_at'] = issuedAt;
    }
    public get issuedAt(): string | undefined {
        return this['issued_at'];
    }
    public withExpiresAt(expiresAt: string): IdpToken {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withMethods(methods: Array<string>): IdpToken {
        this['methods'] = methods;
        return this;
    }
    public withUser(user: UnscopedTokenUser): IdpToken {
        this['user'] = user;
        return this;
    }
}